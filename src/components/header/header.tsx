import {JSX} from "react";

export default function Header(): JSX.Element {
    return (<>
        <section className="header">
            <div className="presenter-part">
                <div className="logo">
                    <div className="logo-text">
                        KUNTIK
                        <br/><span>STORE</span>
                    </div>
                    <img src="/img/logo.svg" alt="kuntik"/>
                </div>
                <div className="presenter-part-description">Первый маркетплейс в Вестляндии предоставляющий кастомный
                    ассортимент кунтиков
                </div>
            </div>
            <div className="advantages-container">
                <div className="advantage">
                    <img src="/img/emoji_flags.svg" alt="flag"/>
                        <span>Доставка по всей Вестляндии</span>
                </div>
                <div className="advantage">
                    <img src="/img/settings_slow_motion.svg" alt="cog"/>
                        <span>Кастомная сборка</span>
                </div>
                <div className="advantage">
                    <img src="/img/box_add.svg" alt="box"/>
                        <span>Широкий ассортимент</span>
                </div>
                <div className="advantage">
                    <img src="/img/call.svg" alt="call"/>
                        <span>Всегда на связи</span>
                </div>
            </div>
        </section>
        </>)

}
