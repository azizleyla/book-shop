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
    productNo:number

}
export interface IBooks {
    books:IBookItem[]
}