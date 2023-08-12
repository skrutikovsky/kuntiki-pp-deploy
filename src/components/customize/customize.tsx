import {JSX} from "react";
import store from "../../store/store";
import {observer} from "mobx-react-lite";
import {getRarity} from "../../consts";

function Customize(): JSX.Element {

    return (<>
        <section className="customize">
            <div className="custom-kuntik">

                <img style={{transform:`scale(${
                        // @ts-ignore
                    10+ (store.weight[store.customSize]*5 || 20)}%)`}} src={`/${store.customColor===""?'img':'colors'}/${store.customColor===""?'logo':store.customColor.toLowerCase()}.svg`} alt="kuntik"/>
            </div>

            <div className="properties">
                <div className="prop-item">
                    <span>Material:</span>
                    <section className="container">
                        <div className="dropdown">
                            <select onChange={(evt)=>{store.setCustomMaterial(evt.target.value)}} name="one" className="dropdown-select">
                                <option  value="">Выбрать…</option>
                                <option value="Wood">Wood</option>
                                <option value="Iron">Iron</option>
                                <option value="Steel">Steel</option>
                                <option value="Diamond">Diamond</option>
                                <option value="Gold">Gold</option>
                            </select>
                        </div>
                    </section>
                </div>
                <div className="prop-item">
                    <span>Size:</span>
                    <section className="container">
                        <div className="dropdown">
                            <select onChange={(evt)=>{store.setCustomSize(evt.target.value)}} name="one" className="dropdown-select">
                                <option value="">Выбрать…</option>
                                <option value="S">S</option>
                                <option value="M">M</option>
                                <option value="L">L</option>
                                <option value="XL">XL</option>
                                <option value="XXL">XXL</option>
                                <option value="XXXL">XXXL</option>
                            </select>
                        </div>
                    </section>
                </div>
                <div className="prop-item">
                    <span>Color:</span>
                    <section className="container">
                        <div className="dropdown">
                            <select onChange={(evt)=>{store.setCustomColor(evt.target.value)}} name="one" className="dropdown-select">
                                <option value="">Выбрать…</option>
                                <option value="Red">Red</option>
                                <option value="Tiger">Tiger</option>
                                <option value="Rainbow">Rainbow</option>
                                <option value="Golden">Golden</option>
                                <option value="Silver">Silver</option>
                                <option value="Cooper">Cooper</option>
                                <option value="Black">Black</option>
                                <option value="Skyblue">Skyblue</option>
                            </select>
                        </div>
                    </section>
                </div>
            </div>

            <div className="extra-options">
                <div onClick={()=>{store.toggleOptions()}} className="is-extra">
                    <span>Extra option</span>
                    <div>
                        <div className={`mark ${store.isExtraOptions?'active':''}`}/>
                    </div>
                </div>
                <div className="product-params">
                    <div className="params-item">
                        <img src="/img/weight.svg" alt="weight" />
                            <span>{store.Weight()}h</span>
                    </div>
                    <div className="params-item">
                        <img src="/img/auto_awesome.svg" alt="#"/>
                            <span>{getRarity(store.Quality())}</span>
                    </div>
                    <div className="params-item">
                        <img src="/img/attach_money.svg" alt="#"/>
                        <span>{store.Price()}</span>
                    </div>
                    <div className="params-item">
                        <img src="/img/local_shipping.svg" alt="#"/>
                        <span>{store.Weight() >= 150 && (store.customSize==='XXL'||store.customSize==='XXXL')?'Вагонетка':'Воздушный шар'}</span>
                    </div>
                </div>
            </div>
        </section>
    </>)
}
export default observer(Customize)
