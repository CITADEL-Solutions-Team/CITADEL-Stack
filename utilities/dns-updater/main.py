#!/usr/bin/env python
"""
Used to update the dns records of the Cloudflare to counteract rotating DNS
"""
import os
import json
import requests
from cloudflare import Cloudflare

def main():
    url = 'https://api.ipify.org?format=json'
    headers = {}
    client = Cloudflare(
        api_token=os.environ.get("CLOUDFLARE_API_TOKEN"),
    )

    resp = requests.get(url, headers = headers)
    content = str(resp.content)[2:-1]
    json_info = json.loads(content)
    ip = json_info.get("ip", "88.88.88.88")

    zone: str = ""
    record_id: str = ""
    name: str = ""

    with open("./data.json", "r") as data:
        json_data = json.loads(data.read())
        zone = json_data.get("ZoneID", "")

        for i in json_data.get("Items", []):
            record_id = json_data.get("RecordID", "")
            name = json_data.get("Name")
            
            rec_resp = client.dns.records.edit(
                dns_record_id=record_id,
                zone_id=zone,
                name=name,
                ttl=3600,
                type="A",
                content=ip
            )

            print(rec_resp)
if __name__ == "__main__":
    main()
