import {JSX} from "react";
import ProductCard from "../product-card/product-card";
import {OpenedFilter, Price, Product} from "../../consts";
import store from "../../store/store";
import {observer} from "mobx-react-lite";

type ProductListProps = {
    products: Product[]
}
function ProductList({products} : ProductListProps): JSX.Element {
    let sortedProducts = []
    if (store.openedFilter === OpenedFilter.CHEAP) {
        sortedProducts = products.slice().sort((a: Product, b: Product) => Price(a.material, a.size, a.color) > Price(b.material, b.size, b.color) ? 1 : -1)
    }
    else if (store.openedFilter === OpenedFilter.EXPENSIVE) {
        sortedProducts = products.slice().sort((a: Product, b: Product) => Price(a.material, a.size, a.color) > Price(b.material, b.size, b.color) ? 1 : -1).reverse()
    }
    else {
        sortedProducts = products.slice().sort((a: Product, b: Product) => a.popular > b.popular ? 1 : -1)
    }

    return (
        <>
            {
            }
        {
            sortedProducts
                .slice((store.currentPage-1)*6, store.currentPage*6)
                .map((prod) => <ProductCard material={prod.material} size={prod.size} color={prod.color}/>)}
    </>)
}
export default observer(ProductList)
