export interface ITitle {
    title:string
}
export interface IBookItem{
    id:number,
    title:string,
    images: Image[] ,
    prevPrice?:number,
    currentPrice:number,
    qty:number,
    rating:number,
    isFavorite:boolean,
    isNew:boolean,
    isStock: boolean,
    author?: string,
    productNo: number,
    language:Language

}
interface Language {
    id: number,
    lang: "az" | "en" | "ru" | "tr"
}
interface Image{
    id: number,
    imgUrl:string,
    type: "BACK" | 'COVER'
}
export interface IBooks {
    books:IBookItem[]
}