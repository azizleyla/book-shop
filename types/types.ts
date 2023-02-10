export interface ITitle {
    title:string
}
export interface IBookItem{
    id:number,
    title:string,
    img:any,
    prevPrice?:number,
    currentPrice:number,
    qty:number,
    rating:number,
    isFavorite:boolean,
    isNew:boolean,
    isStock: boolean,
    author?: string,
    product_no:number

}
export interface IBooks {
    books:IBookItem[]
}