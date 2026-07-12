export type Service = {
    Name: string,
    Price: string,
    Details: string[],
    Why: string
}

export type Category = {
    Name: string,
    Services: Service[]
}