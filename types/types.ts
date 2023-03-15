export interface ITitle {
    title:string
}
export interface IBookItem{
    id:number,
    title:string,
    images:any,
    coverImg: any,
    backImg?:any,
    prevPrice?:number,
    currentPrice:number,
    qty:number,
    rating:number,
    isFavorite:boolean,
    isNew:boolean,
    isStock: boolean,
    author?: string,
    productNo: number,
    language:ILang

}
interface ILang {
    id: number,
    lang: "Az | En || Ru || Tr"
}
export interface IBooks {
    books:IBookItem[]
}