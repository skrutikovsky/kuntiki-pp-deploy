import {JSX} from "react";
import ChatWindow from "../chat-window/chat-window";
import store from "../../store/store";
import {observer} from "mobx-react-lite";

 function Chat(): JSX.Element {
    return (<>
        {store.isExtraOptions && <section className="chat">
            <div className="agent">
                <img src="/img/account_circle.svg" alt="avatar"/>
                <span>Agent Irina</span>
            </div>
            <ChatWindow/>
        </section>}

    </>)
}
export default observer(Chat)
