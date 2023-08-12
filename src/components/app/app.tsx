import {JSX} from "react";
import Chat from "../chat/chat";
import Header from "../header/header";
import Products from "../products/products";
import Customize from "../customize/customize";

export default function App() :JSX.Element{
    return (<>
        <Header/>
        <Products/>
        <Customize/>
        <Chat/>
    </>)
}
