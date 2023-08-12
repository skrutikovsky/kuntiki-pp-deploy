import {JSX, useEffect} from "react";
import store from "../../store/store";
import ProductList from "../product-list/product-list";
import {observer} from "mobx-react-lite";
import {OpenedFilter} from "../../consts";

function Products(): JSX.Element {
    useEffect(()=> {
        store.getProducts()
    },[])
    return (<>
        <section className="products">
            <div className="products-filter">
                <button onClick={()=>{store.changeFilter(OpenedFilter.EXPENSIVE)}}
                        className={store.openedFilter === OpenedFilter.EXPENSIVE?"filter filter-active":"filter"}>Сначала дорогие</button>
                <button onClick={()=>{store.changeFilter(OpenedFilter.CHEAP)}}
                        className={store.openedFilter === OpenedFilter.CHEAP?"filter filter-active":"filter"}>Сначала дешевые</button>
                <button onClick={()=>{store.changeFilter(OpenedFilter.POPULAR)}}
                        className={store.openedFilter === OpenedFilter.POPULAR?"filter filter-active":"filter"}>Сначала популярные</button>
            </div>
            <div className="products-list" style={{minHeight:"700px"}}>
                {store.products?<ProductList products={store.products}/>:<></>}
            </div>
            <div className="move-buttons">
                <button onClick={()=>{store.prevPage()}} disabled={store.currentPage === 1} className="move-butt">Назад</button>
                <button onClick={()=>{store.nextPage()}} disabled={store.products.length <= store.currentPage*6} className="move-butt">Вперед</button>
            </div>
        </section>
    </>)
}
export default observer(Products)
