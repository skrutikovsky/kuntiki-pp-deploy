import store from "./store/store";

export  function getPrice(): number {
    return 1
}

export  function getQuality(): string {
    return ""
}

export enum OpenedFilter {
    EXPENSIVE = 'expensive',
    CHEAP = 'cheap',
    POPULAR = 'popular',
}

export type Product = {
    "id": string,
    "material": string,
    "size": string,
    "color": string,
    "popular": number
}
export type Message = {
    "text": string,
    "isClient": boolean,
}
export type ParamList = {
    "wood": number,
    "iron": number,
    "steel": number,
    "diamond": number,
    "gold": number,
    "S": number,
    "M": number,
    "L": number,
    "XL": number,
    "XXL": number,
    "XXXL": number,
    "red": number,
    "tiger": number,
    "rainbow": number,
    "golden": number,
    "silver": number,
    "cooper": number,
    "black": number,
    "skyblue": number

}
export function getRarity(num: number){
    switch (num){
        case (10):
            return "SSS"
        case (9):
            return "SS"
        case (8):
            return "S"
        case (7):
            return "A"
        case (6):
            return "B"
        case (5):
            return "C"
        case (4):
            return "D"
        case (3):
            return "F"
        case (2):
            return "F"
        case (1):
            return "F"
        case (0):
            return "F"
        default:
            return "SSS"
    }
}

export function Price(material: string, size: string, color: string): number {
    const priceList = store.priceList
    // @ts-ignore
    const multi = (priceList[size] || 10) / 10
    // @ts-ignore
    return (priceList[material.toLowerCase()] || 0) * multi + (priceList[color.toLowerCase()] || 0) * multi ;
}
export function Quality(material: string, size: string, color: string): number {
    const qualityList = store.quality;
    // @ts-ignore
    return (qualityList[material.toLowerCase()] || 0) + (qualityList[size] || 0) + (qualityList[color.toLowerCase()] || 0);
}
export function Weight(material: string, size: string, color: string): number {
    const weights = store.weight;
    // @ts-ignore
    const multi = (weights[size] || 10) / 10
    // @ts-ignore
    return (weights[material.toLowerCase()] || 0) * multi + (weights[color.toLowerCase()] || 0) * multi;
}
