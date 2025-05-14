import React from 'react'
import Account from '../json/account.json';
import Services from '../json/services.json';

const about = () => {
    return (
        <div className="card-inner animated active" id="about-card">
            <div className="card-wrap">
                <div className="content about">
                    <div className="title">私について</div>
                    <div className="row">
                        <div className="col col-d-6 col-t-6 col-m-12 border-line-v">
                            <div className="text-box">
                                <p> {Account.description} </p>
                            </div>
                        </div>
                        <div className="col col-d-6 col-t-6 col-m-12 border-line-v">
                            <div className="info-list">
                                <ul>
                                    <li><strong>年齢 . . . . .</strong> {Account.age}</li>
                                    <li><strong>住居 . . . . .</strong> {Account.country}</li>
                                    <li><strong>フリーランス . . . . .</strong> 可能</li>
                                    <li><strong>住所 . . . . .</strong> {Account.address} </li>
                                    <li><strong>メール . . . . .</strong> <span style={{fontSize: '15px'}}>{Account.email} </span></li>
                                </ul>
                            </div>
                        </div>
                        <div className="clear"></div>
                    </div>

                </div>


                <div className="content services">


                    <div className="title">私のサービス</div>


                    <div className="row service-items border-line-v">
                        {Services.services.map((srvc, ind) =>
                            <div className="col col-d-6 col-t-6 col-m-12 border-line-h">
                                <div className="service-item">
                                    <div className="icon">
                                        <span className={`fa fa-${srvc.icon ?? 'code'}`}></span>
                                    </div>
                                    <div className="name">
                                        <span> {srvc.title}</span>
                                    </div>
                                    <div className="desc">
                                        <div >
                                            <p>{srvc.content}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                    <div className="clear"></div>

                </div>


                <div className="content pricing">
                    <div className="title">価格</div>
                    <div className="row pricing-items">
                        <div className="col col-d-6 col-t-6 col-m-12 border-line-v">
                            <div className="pricing-item">
                                <div className="icon"><i className="fa fa-battery-half"></i></div>
                                <div className="name">基本</div>
                                <div className="amount">
                                    <span className="dollar">$</span>
                                    <span className="number">{Services.min_hourly_rate}</span>
                                    <span className="period">時間</span>
                                </div>
                                <div className="feature-list">
                                    <ul>
                                        <li>ウェブ開発</li>
                                        <li>Wordpress/shopify 開発</li>
                                    </ul>
                                </div>
                            </div>
                        </div>


                        <div className="col col-d-6 col-t-6 col-m-12 border-line-v">
                            <div className="pricing-item">
                                <div className="icon"><i className="fa fa-battery-full"></i></div>
                                <div className="name">プロ</div>
                                <div className="amount">
                                    <span className="dollar">$</span>
                                    <span className="number">{Services.max_hourly_rate}</span>
                                    <span className="period">時間</span>
                                </div>
                                <div className="feature-list">
                                    <ul>
                                        <li>ウェブ3開発</li>
                                        <li>モバイル開発</li>
                                        <li>ゲーム開発</li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div className="clear"></div>
                    </div>

                </div>

                {/* <div className="content quote">
                    <div className="title">
                    <span >Quote</span>
                    </div>
                    <div className="row">
                    <div className="col col-d-12 col-t-12 col-m-12 border-line-v">
                        <div className="revs-item">
                        <div className="text">
                            <div >
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            </div>
                        </div>
                        <div className="user">
                            <div className="img">
                            <img src="images/profile.png" alt="Ryan Adlard" />
                            </div>
                            <div className="info">
                            <div className="name">Ryan Adlard</div>
                            <div className="company">Web Designer</div>
                            </div>
                            <div className="clear"></div>
                        </div>
                        </div>
                    </div>
                    <div className="clear"></div>
                    </div>

                </div> */}

            </div>
        </div>
    )
}
export default about
