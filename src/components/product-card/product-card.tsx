import {JSX} from "react";
import store from "../../store/store";
import {getRarity, Price, Quality, Weight} from "../../consts";

type ProductCardProps = {
    material: string,
    size: string,
    color: string,
}
export default function ProductCard({material, size, color}:ProductCardProps): JSX.Element {
    return (<>
        <div className="products-item">
            <div className="img&text">
                <div className="kuntik-container">
                    <img className="kuntik" src={`/colors/${color}.svg`} alt="#"/>
                </div>
                <div className="params">
                    <img src="/img/weight.svg"  style={Weight(material,size,color)<150?{opacity: "0%"}:{opacity: "100%"}} alt="#" />
                    Material:
                    <br/>
                    <span>{material}</span>
                    Size:
                    <br/>
                    <span>{size}</span>
                    Color:
                    <br/>
                    <span>{color}</span>
                </div>
            </div>
            <div className="price&quality">
                <div className="price&quality-item">
                    <img src="/img/attach_money.svg" alt="#"/>
                    <span>{Price(material,size,color)}</span>
                </div>
                <div className="price&quality-item">
                    <img src="/img/auto_awesome.svg" alt="#"/>
                    <span>{getRarity(Quality(material,size,color))}</span>
                </div>
            </div>
        </div>
    </>)
}
