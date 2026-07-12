<template>
    <div class="px-16 py-8 flex flex-col gap-16">
        <ServiceCategory>
            <template v-slot:Name> Setup & Configuration </template>
            <template v-slot:Items>

                <ServiceCard>
                    <template v-slot:Name> New PC Setup </template>
                    <template v-slot:Price> $95 </template>
                    <template v-slot:List>
                        <div class="grid grid-cols-1 gap-1">
                            <li> Unboxing, account setup, and OS updates </li>
                            <li> Essential software install (browser, office suite, antivirus) </li>
                            <li> Printer, peripheral, and network connection </li>
                            <li> Old PC data transfer included </li>
                        </div>
                    </template>
                    <template v-slot:Why> Getting a new machine set up right the first time saves you from digging through settings menus for a week. </template>
                </ServiceCard>

                <ServiceCard>
                    <template v-slot:Name> Operating System Install & Reinstall </template>
                    <template v-slot:Price> $110 </template>
                    <template v-slot:List>
                        <div class="grid grid-cols-1 gap-1">
                            <li> Clean install or repair install </li>
                            <li> Driver installation for all hardware </li>
                            <li> Data backup beforehand (if accessible) </li>
                            <li> Software reinstallation assistance </li>
                        </div>
                    </template>
                    <template v-slot:Why> A clean install clears out the clutter and instability that builds up over years of everyday use.  </template>
                </ServiceCard>

                <ServiceCard>
                    <template v-slot:Name> Network & Wi-Fi Setup </template>
                    <template v-slot:Price> $100 </template>
                    <template v-slot:List>
                        <div class="grid grid-cols-1 gap-1">
                            <li> Router/modem configuration and Wi-Fi optimization </li>
                            <li> Wired network setup for multiple devices </li>
                            <li> Guest network and parental controls </li>
                            <li> VPN configuration </li>
                        </div>
                    </template>
                    <template v-slot:Why> A poorly configured network means slow speeds and dead zones that are usually a quick fix once someone knows where to look. </template>
                </ServiceCard>

                <ServiceCard>
                    <template v-slot:Name> Smart Home & IoT Device Setup </template>
                    <template v-slot:Price> $25/device </template>
                    <template v-slot:List>
                        <div class="grid grid-cols-1 gap-1">
                            <li> Device pairing and Wi-Fi network integration </li>
                            <li> Companion app setup and account configuration </li>
                            <li> Naming, room assignment, and grouping for voice assistants </li>
                            <li> Automation/routine setup (e.g., schedules, triggers, scenes) </li>
                            <li> Firmware update check during setup </li>
                            <li> Basic troubleshooting if device fails to connect </li>
                        </div>
                    </template>
                    <template v-slot:Why> Getting every device properly paired and updated the first time means fewer app crashes and connection drops down the road. </template>
                </ServiceCard>

            </template>
        </ServiceCategory>
        
        <ServiceCategory>
            <template v-slot:Name> Cleaning & Maintenance </template>
            <template v-slot:Items>

                <ServiceCard>
                    <template v-slot:Name> PC Physical Cleaning & Dust Removal </template>
                    <template v-slot:Price> $75/desktop or $65/laptop </template>
                    <template v-slot:List>
                        <div class="grid grid-cols-1 gap-1">
                            <li> Full interior cleaning </li>
                            <li> Dust filter cleaning and fan inspection </li>
                            <li> Thermal paste check and reapplication if degraded </li>
                            <li> Cable management tidy-up for improved airflow </li>
                            <li> Exterior cleaning and sanitizing </li>
                        </div>
                    </template>
                    <template v-slot:Why> Dust buildup is one of the leading causes of overheating, and overheating is one of the leading causes of hardware failure. </template>
                </ServiceCard>

                <ServiceCard>
                    <template v-slot:Name> Software Cleanup & Performance Tune-up </template>
                    <template v-slot:Price> $95/PC </template>
                    <template v-slot:List>
                        <div class="grid grid-cols-1 gap-1">
                            <li> Remove bloatware, unused programs, and startup clutter </li>
                            <li> Clear temp files, cache, and disk junk </li>
                            <li> Disk optimization </li>
                            <li> Update drivers and OS patches </li>
                            <li> Before/after performance report </li>
                        </div>
                    </template>
                    <template v-slot:Why> Years of installed programs and startup clutter are usually why a computer that used to feel fast now feels sluggish. </template>
                </ServiceCard>

                <ServiceCard>
                    <template v-slot:Name> Scheduled Maintenance Plan </template>
                    <template v-slot:Price> $25/mo 3+ PCs: $20/mo </template>
                    <template v-slot:List>
                        <div class="grid grid-cols-1 gap-1">
                            <li> Quarterly physical cleaning + software tune-up bundled </li>
                            <li> Priority scheduling ahead of one-off customers </li>
                            <li> Discounted diagnostic/repair rates for members </li>
                            <li> Automatic reminder when service is due </li>
                        </div>
                    </template>
                    <template v-slot:Why> Regular upkeep catches small issues before they turn into an expensive repair or a lost weekend. </template>
                </ServiceCard>

            </template>
        </ServiceCategory>
        
        <ServiceCategory>
            <template v-slot:Name> BIOS & Firmware </template>
            <template v-slot:Items>

                <ServiceCard>
                    <template v-slot:Name> BIOS Configuration & Update </template>
                    <template v-slot:Price> $55 </template>
                    <template v-slot:List>
                        <div class="grid grid-cols-1 gap-1">
                            <li> Safe BIOS/UEFI firmware updates </li>
                            <li> Boot order, secure boot, and virtualization settings </li>
                            <li> Fan curve and basic thermal tuning </li>
                            <li> Troubleshooting BIOS-level boot failures </li>
                        </div>
                    </template>
                    <template v-slot:Why> Outdated firmware can cause boot failures and security gaps that no amount of software fixing will solve. </template>
                </ServiceCard>

                <ServiceCard>
                    <template v-slot:Name> Overclocking & Performance Tuning </template>
                    <template v-slot:Price> $100+ </template>
                    <template v-slot:List>
                        <div class="grid grid-cols-1 gap-1">
                            <li> CPU/GPU/RAM overclock within safe thermal limits </li>
                            <li> Stability and stress testing </li>
                            <li> Voltage and temperature monitoring setup </li>
                            <li> Rollback plan if instability occurs </li>
                        </div>
                    </template>
                    <template v-slot:Why> Pushing a system past stock settings without proper testing risks instability or damage — done right, it's free performance. </template>
                </ServiceCard>

            </template>
        </ServiceCategory>
        
        <ServiceCategory>
            <template v-slot:Name> Diagnostics & Troubleshooting </template>
            <template v-slot:Items>

                <ServiceCard>
                    <template v-slot:Name> Hardware Troubleshooting & Diagnosis </template>
                    <template v-slot:Price> $100 </template>
                    <template v-slot:List>
                        <div class="grid grid-cols-1 gap-1">
                            <li> Crash/freeze/blue screen diagnosis </li>
                            <li> Component-level testing </li>
                            <li> Stress testing to reproduce intermittent issues </li>
                            <li> Boot failure / POST error diagnosis </li>
                            <li> Written report with repair recommendations </li>
                        </div>
                    </template>
                    <template v-slot:Why> Guessing at a hardware problem wastes money on parts that were never the issue; proper diagnosis finds it the first time. </template>
                </ServiceCard>

                <ServiceCard>
                    <template v-slot:Name> Virus & Malware Removal </template>
                    <template v-slot:Price> $125/PC </template>
                    <template v-slot:List>
                        <div class="grid grid-cols-1 gap-1">
                            <li> Full system scan and infection removal </li>
                            <li> Browser hijacker and adware cleanup </li>
                            <li> Rootkit/ransomware assessment </li>
                            <li> Security software installation and configuration </li>
                            <li> Follow-up scan to confirm system is clean </li>
                        </div>
                    </template>
                    <template v-slot:Why> An infected PC can quietly steal passwords and files long before you notice anything's wrong. </template>
                </ServiceCard>

                <ServiceCard>
                    <template v-slot:Name> Data Recovery </template>
                    <template v-slot:Price> $125+ </template>
                    <template v-slot:List>
                        <div class="grid grid-cols-1 gap-1">
                            <li> Recovery from failed, corrupted, or accidentally formatted drives </li>
                            <li> Free evaluation — pay only if data is recoverable </li>
                            <li> Secure handling of personal/business data </li>
                            <li> Recovered data delivered on external media </li>
                        </div>
                    </template>
                    <template v-slot:Why>  </template>
                </ServiceCard>

            </template>
        </ServiceCategory>
        
        <ServiceCategory>
            <template v-slot:Name> Builds & Upgrades </template>
            <template v-slot:Items>

                <ServiceCard>
                    <template v-slot:Name> Custom PC Build Service </template>
                    <template v-slot:Price> $200 +parts </template>
                    <template v-slot:List>
                        <div class="grid grid-cols-1 gap-1">
                            <li> Full assembly from customer- or shop-sourced parts </li>
                            <li> Cable management and airflow optimization </li>
                            <li> BIOS setup, OS install, and driver installation </li>
                            <li> Burn-in stress test before delivery </li>
                            <li> 30-day post-build support included </li>
                        </div>
                    </template>
                    <template v-slot:Why> A build assembled by someone who's done it hundreds of times means fewer compatibility surprises and better airflow from day one. </template>
                </ServiceCard>

                <ServiceCard>
                    <template v-slot:Name> Build Advising & Parts Consultation </template>
                    <template v-slot:Price> $50/consult </template>
                    <template v-slot:List>
                        <div class="grid grid-cols-1 gap-1">
                            <li> Budget-based parts list tailored to use case </li>
                            <li> Compatibility check (CPU/motherboard/RAM/PSU/case) </li>
                            <li> Price-to-performance recommendations </li>
                            <li> Where-to-buy guidance </li>
                        </div>
                    </template>
                    <template v-slot:Why> The wrong part choice can mean a system that bottlenecks itself or doesn't fit the case you already bought. </template>
                </ServiceCard>

                <ServiceCard>
                    <template v-slot:Name> Component Upgrade & Installation </template>
                    <template v-slot:Price> $55 +parts </template>
                    <template v-slot:List>
                        <div class="grid grid-cols-1 gap-1">
                            <li> RAM, SSD/HDD, GPU, or PSU upgrades </li>
                            <li> Old-to-new data migration during upgrade </li>
                            <li> Compatibility verification before purchase </li>
                            <li> System tested after install </li>
                        </div>
                    </template>
                    <template v-slot:Why> A single well-chosen upgrade can add years of useful life to a computer that still has plenty left in it. </template>
                </ServiceCard>

            </template>
        </ServiceCategory>
        
        <ServiceCategory>
            <template v-slot:Name> Extras & Ongoing Care </template>
            <template v-slot:Items>

                <ServiceCard>
                    <template v-slot:Name> Data Backup Setup </template>
                    <template v-slot:Price> $80/setup +$10/mo monitor </template>
                    <template v-slot:List>
                        <div class="grid grid-cols-1 gap-1">
                            <li> Local (external drive) and/or cloud backup configuration </li>
                            <li> Automated backup schedule </li>
                            <li> Initial full backup performed </li>
                            <li> Quick-reference restore guide </li>
                        </div>
                    </template>
                    <template v-slot:Why> A backup you never tested isn't really a backup, it's a hope. </template>
                </ServiceCard>

                <ServiceCard>
                    <template v-slot:Name> Remote Support Retainer </template>
                    <template v-slot:Price> $25/mo </template>
                    <template v-slot:List>
                        <div class="grid grid-cols-1 gap-1">
                            <li> Unlimited remote troubleshooting for software issues </li>
                            <li> Monthly check-in scan for malware/performance issues </li>
                            <li> Discounted rate on any in-person visits </li>
                        </div>
                    </template>
                    <template v-slot:Why> Most software issues can be fixed in minutes remotely, without waiting for an in-person appointment. </template>
                </ServiceCard>

                <ServiceCard>
                    <template v-slot:Name> PC Health Checkup Report </template>
                    <template v-slot:Price> $40 </template>
                    <template v-slot:List>
                        <div class="grid grid-cols-1 gap-1">
                            <li> Full hardware and software health assessment </li>
                            <li> Letter-grade scorecard </li>
                            <li> Prioritized fix list in plain language </li>
                            <li> Low-cost entry point for new customers </li>
                        </div>
                    </template>
                    <template v-slot:Why> A quick health check catches small problems while they're still cheap to fix. </template>
                </ServiceCard>

            </template>
        </ServiceCategory>

    </div>
</template>

<script setup lang="ts">
import ServiceCard from '@/components/Cards/ServiceCard.vue';
import ServiceCategory from '@/components/Sections/ServiceCategory.vue';

</script>