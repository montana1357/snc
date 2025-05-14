import React from 'react'
import Account from '../json/account.json'

const ContactMe = () => {
    return (
        <div className="card-inner contacts" id="contacts-card">
            <div className="card-wrap">
                <div className="content contacts">
                    <div className="title">お問い合わせ</div>
                    <div className="row">
                        <div className="col col-d-12 col-t-12 col-m-12 border-line-v">
                            {/* <div className="map" id="map"></div> */}
                            <div className="info-list">
                                <ul>
                                    <li><strong>住所 . . . . </strong> {Account.address} </li>
                                    <li><strong>メール . . . . </strong> <span style={{fontSize: '15px'}}> {Account.email}</span></li>
                                    {Account.phone && <li><strong>電話 . . . . .</strong> {Account.phone} </li>}
                                    <li><strong>フリーランス . . . . .</strong> 可能</li>
                                </ul>
                            </div>
                        </div>
                        <div className="clear"></div>
                    </div>
                </div>


                <div className="content contacts">
                    <div className="title">お問い合わせフォーム</div>
                    <div className="row">
                        <div className="col col-d-12 col-t-12 col-m-12 border-line-v">
                            <div className="contact_form">
                                <form id="cform" method="post">
                                    <div className="row">
                                        <div className="col col-d-6 col-t-6 col-m-12">
                                            <div className="group-val">
                                                <input type="text" name="name" placeholder="Full Name" />
                                            </div>
                                        </div>
                                        <div className="col col-d-6 col-t-6 col-m-12">
                                            <div className="group-val">
                                                <input type="text" name="email" placeholder="Email Address" />
                                            </div>
                                        </div>
                                        <div className="col col-d-12 col-t-12 col-m-12">
                                            <div className="group-val">
                                                <textarea name="message" placeholder="Your Message"></textarea>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="align-left">
                                        <a href="#" className="button" onclick="$('#cform').submit(); return false;">
                                            <span className="text">メッセージを送信</span>
                                            <span className="arrow"></span>
                                        </a>
                                    </div>
                                </form>
                                <div className="alert-success">
                                    <p>ありがとうございます。メッセージは正常に送信されました。</p>
                                </div>
                            </div>
                        </div>
                        <div className="clear"></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ContactMe
