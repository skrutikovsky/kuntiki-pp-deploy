import {makeAutoObservable, runInAction} from "mobx";
import {Message, OpenedFilter, ParamList, Product} from "../consts";


class Store {
    public isExtraOptions: boolean = false;
    public openedFilter: OpenedFilter = OpenedFilter.CHEAP;
    public messages: Message[] = [];
    public products: Product[] = [];
    public priceList: ParamList = {
        "wood": 0,
        "iron": 0,
        "steel": 0,
        "diamond": 0,
        "gold": 0,
        "S": 0,
        "M": 0,
        "L": 0,
        "XL": 0,
        "XXL": 0,
        "XXXL": 0,
        "red": 0,
        "tiger": 0,
        "rainbow": 0,
        "golden": 0,
        "silver": 0,
        "cooper": 0,
        "black": 0,
        "skyblue": 0
    };
    public quality: ParamList = {
        "wood": 0,
        "iron": 0,
        "steel": 0,
        "diamond": 0,
        "gold": 0,
        "S": 0,
        "M": 0,
        "L": 0,
        "XL": 0,
        "XXL": 0,
        "XXXL": 0,
        "red": 0,
        "tiger": 0,
        "rainbow": 0,
        "golden": 0,
        "silver": 0,
        "cooper": 0,
        "black": 0,
        "skyblue": 0
    };
    public weight: ParamList = {
        "wood": 0,
        "iron": 0,
        "steel": 0,
        "diamond": 0,
        "gold": 0,
        "S": 0,
        "M": 0,
        "L": 0,
        "XL": 0,
        "XXL": 0,
        "XXXL": 0,
        "red": 0,
        "tiger": 0,
        "rainbow": 0,
        "golden": 0,
        "silver": 0,
        "cooper": 0,
        "black": 0,
        "skyblue": 0
    };
    public currentPage: number = 1;
    public customMaterial: string = '';
    public customSize: string = '';
    public customColor: string = '';

    constructor(){
        makeAutoObservable(this);
        this.getPrices();
        this.getQuality();
        this.getWeight();
    }
    public Price(): number {
        const priceList = this.priceList
        // @ts-ignore
        const multi = (priceList[this.customSize] || 10) / 10
        // @ts-ignore
        return (priceList[this.customMaterial.toLowerCase()] || 0) * multi + (priceList[this.customColor.toLowerCase()] || 0) * multi ;
    }
    public Quality(): number {
        const qualityList = this.quality;
        // @ts-ignore
        return (qualityList[this.customMaterial.toLowerCase()] || 0) + (qualityList[this.customSize] || 0) + (qualityList[this.customColor.toLowerCase()] || 0);
    }
    public Weight(): number {
        const weights = this.weight;
        // @ts-ignore
        const multi = (weights[this.customSize] || 10) / 10
        // @ts-ignore
        return (weights[this.customMaterial.toLowerCase()] || 0) * multi + (weights[this.customColor.toLowerCase()] || 0) * multi;
    }
    public setCustomMaterial (newStr: string): void{
        this.customMaterial = newStr;
    }
    public setCustomSize (newStr: string): void{
        this.customSize = newStr;
    }
    public setCustomColor(newStr: string): void{
        this.customColor = newStr;
    }
    public nextPage(): void{
        console.log(this.currentPage)
        this.currentPage += 1;
        console.log(this.currentPage)
    }
    public prevPage(): void{
        this.currentPage -= 1;
    }
    public addMessage(mess: Message): void{
        let newMess = this.messages
        newMess.push(mess)
        this.messages = newMess
    }
    public toggleOptions(): void{
        this.isExtraOptions = !this.isExtraOptions;
    }
    public changeFilter(newFilter: OpenedFilter): void {
        this.openedFilter = newFilter;
    }
    public getProducts(): void {
        fetch("https://server-personal-page-2.onrender.com/kuntiks").then(response => response.json())
            .then((res: Product[]) =>{
                runInAction(()=> {
                    this.products = res
                })
            });
    }
    public getPrices(): void {
        fetch("https://server-personal-page-2.onrender.com/prices").then(response => response.json())
            .then((res: ParamList) =>{
                runInAction(()=> {
                    this.priceList = res
                })
            });
    }
    public getQuality(): void {
        fetch("https://server-personal-page-2.onrender.com/quality").then(response => response.json())
            .then((res: ParamList) =>{
                runInAction(()=> {
                    this.quality = res
                })
            });
    }
    public getWeight(): void {
        fetch("https://server-personal-page-2.onrender.com/weights").then(response => response.json())
            .then((res: ParamList) =>{
                runInAction(()=> {
                    this.weight = res
                })
            });
    }

}

const store = new Store();

export default store;
