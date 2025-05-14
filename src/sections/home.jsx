import React from 'react'
import Account from '../json/account.json';
import avatarImage from '../assets/avatar.jpg';
import DiscordIcon from '../assets/icons/discord'
import GithubIcon from '../assets/icons/github';
import WhatsappIcon from '../assets/icons/wa';

const Home = () => {
    return (
        <div className="card-started" id="home-card">
            <div className="profile no-photo">
                <div className="slide" style={{ backgroundImage: `url(${avatarImage})`, objectFit: 'scale-down' }}></div>
                <div className="title">{Account.name}</div>

                <div className="subtitle subtitle-typed">
                    <div className="typing-title">
                        {Account.roles.map((role, _) =>
                            <p key={{ role }}>{role}</p>
                        )}
                    </div>
                </div>

                <div className="social">
                    {Account.github && <a target="_blank" href={Account.github} rel="noopener noreferrer" style={{ width: '40px', height: '40px', marginRight: '12px' }}><GithubIcon /></a>}
                    {Account.discord && <a target="_blank" href={Account.discord} rel="noopener noreferrer" style={{ width: '42px', height: '42px' }}><DiscordIcon /></a>}
                    {Account.whatsapp && <a target="_blank" href={Account.whatsapp} rel="noopener noreferrer" style={{ width: '48px', height: '48px' }}><WhatsappIcon /></a>}
                    {/* {Account.social.map((item, ind) =>
                        <a target="_blank" href={item.link} rel="noopener noreferrer"><span className={`fa fa-${item.name}`} ></span></a>
                    )} */}
                </div>


                <div className="lnks">
                    <a href="/resume.pdf" className="lnk" download={`${Account.name}.pdf`} target="_blank" rel="noopener noreferrer">
                        <span className="text">履歴書をダウンロード</span>
                        <span className="ion ion-archive"></span>
                    </a>
                    <div className="lnk discover">
                        <span className="text">お問い合わせ</span>
                        <span className="arrow"></span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home
