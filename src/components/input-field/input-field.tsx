import {JSX, useState} from "react";
import store from "../../store/store";
import {observer} from "mobx-react-lite";

type InputFieldProp = {
    ref: any;
}
function InputField({ref}: InputFieldProp): JSX.Element {
    const [messText, setMessText] = useState('');
    const clickHandler = () => {
        store.addMessage({text: messText, isClient: true});
        if (ref.current !== undefined && ref.current) {
            ref.current.scrollTop = ref.current.scrollHeight;
        }
    }
    return (<>
        <div className="input-field">
            <input onChange={(evt) => {setMessText(evt.target.value);}} type="text" placeholder="Задайте ваш вопрос..."/>
            <img onClick={clickHandler} className="send-message" src="img/send.svg" alt="#"/>
        </div>
    </>)
}
export default observer(InputField)
