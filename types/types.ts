export interface ITitle {
    title:string
}
export interface IBookItem{
    title:string,
    img:string,
    prevPrice?:number,
    currentPrice:number,
    qty:number,
    rating:number,
    isFavorite:false,
    isNew:boolean,
    isStock:boolean

}
export interface IBooks {
    books:IBookItem[]
}