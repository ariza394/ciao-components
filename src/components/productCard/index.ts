import { ProductCard as CardHoc, ProductCardProps } from "./ProductCard";
import { ProductButtons } from "./ProductButtons";
import { ProductImg, ImgProps } from './ProductImg';
import { ProductTitle, TitleProps } from "./ProductTitle";

export { ProductButtons } from "./ProductButtons";
export { ProductImg } from "./ProductImg";
export { ProductTitle } from "./ProductTitle";


export const ProductCard:ProductCardHOCProps = Object.assign(CardHoc, {
    Img : ProductImg,
    Title : ProductTitle,
    Buttons : ProductButtons,
})

interface ProductCardHOCProps{
    ({ children }: ProductCardProps ):JSX.Element
    Img:( Props: ImgProps ) => JSX.Element,
    Title:( Props: TitleProps ) => JSX.Element,
    Buttons:( Props:any ) => JSX.Element
}