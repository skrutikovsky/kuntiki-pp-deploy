import { JSX, useEffect, useRef, useState } from 'react';
import store from '../../store/store';
import { observer } from 'mobx-react-lite';

function ChatWindow(): JSX.Element {
    const [messText, setMessText] = useState('');
    const containerRef = useRef<HTMLDivElement>(null);
    const inputRef = useRef<HTMLInputElement>(null);

    const clickHandler = () => {
        if (messText) {
            store.addMessage({ text: messText, isClient: true });
            if (inputRef.current) {
                inputRef.current.value = ''
                setMessText('')
            }
        }
    };

    useEffect(() => {
        if (containerRef.current) {
            containerRef.current.scrollTop = containerRef.current.scrollHeight;
        }
    });

    return (
        <>
            <div ref={containerRef} className="chat-container">
                <div  className="chat-window">
                    {store.messages.map((mess, index) => (
                        <div key={index} className={mess.isClient ? 'message client-message' : 'message'}>
                            {mess.text}
                        </div>
                    ))}
                </div>
            </div>
            <div className="input-field">
                <input ref={inputRef} onChange={(evt) => { setMessText(evt.target.value); }} type="text" placeholder="Задайте ваш вопрос..." />
                <div onClick={clickHandler} className="send-message" />
            </div>
        </>
    );
}

export default observer(ChatWindow);
