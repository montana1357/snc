import React from 'react'
import Account from '../json/account.json'

const Header = () => {
    return (
        <header className="header">


            <div className="profile">
                <div className="title">{Account.name}</div>
                <div className="subtitle subtitle-typed">
                    <div className="typing-title">
                        {
                            Account.roles.map((role, ind) =>
                                <p key={{ role }}>{role}</p>
                            )
                        }
                    </div>
                </div>
            </div>


            {/* <a href="#" className="menu-btn"><span></span></a> */}

            <div className="top-menu">
                <ul>
                    <li className="active">
                        <a href="#about-card">
                            <span className="icon ion-person"></span>
                            <span className="link">について</span>
                        </a>
                    </li>
                    <li>
                        <a href="#resume-card">
                            <span className="icon ion-android-list"></span>
                            <span className="link">履歴書</span>
                        </a>
                    </li>
                    <li>
                        <a href="#works-card">
                            <span className="icon ion-paintbrush"></span>
                            <span className="link"> 作品</span>
                        </a>
                    </li>
                    {/* <li>
                        <a href="#blog-card">
                            <span className="icon ion-chatbox-working"></span>
                            <span className="link">Blog</span>
                        </a>
                    </li> */}
                    <li>
                        <a href="#contacts-card">
                            <span className="icon ion-at"></span>
                            <span className="link">コンタック</span>
                        </a>
                    </li>
                </ul>
            </div>

        </header>
    )
}

export default Header
