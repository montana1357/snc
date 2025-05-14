import React from 'react'
import Services from '../json/services.json';
import ResumeJson from '../json/resume.json';
import Skills from '../json/skills.json';

const Resume = () => {
    return (
        <div className="card-inner" id="resume-card">
            <div className="card-wrap">
                <div className="content resume">
                    <div className="title">履歴書</div>
                    <div className="row">
                        <div className="col border-line-v">
                            <div className="resume-title border-line-h">
                                <div className="icon"><i className="fa fa-briefcase"></i></div>
                                <div className="name">経験</div>
                            </div>
                            <div className="resume-items">
                                {ResumeJson.map((resumeItem, _) => {
                                    return (
                                        <div className="resume-item border-line-h active">
                                            <div className="date">{resumeItem.start_date} - {resumeItem.end_date}</div>
                                            <div className="name">{resumeItem.role}</div>
                                            <div className="company">{resumeItem.company_name}</div>
                                            <p>
                                                {resumeItem.description}
                                            </p>
                                        </div>
                                    )
                                })}
                            </div>
                        </div>

                        <div className="col border-line-v">
                            <div className="resume-title border-line-h">
                                <div className="icon"><i className="fa fa-university"></i></div>
                                <div className="name">教育</div>
                            </div>
                            <div className="resume-items">
                                {Skills.education.map((eduItem, _) => {
                                    return (
                                        <div className="resume-item border-line-h">
                                            <div className="date">{eduItem.start_date} - {eduItem.end_date}</div>
                                            <div className="name">{eduItem.university_name}</div>
                                            <div className="company">{eduItem.location}</div>
                                            <p>
                                                {eduItem.award}
                                            </p>
                                        </div>
                                    )
                                })}                                
                            </div>
                        </div>

                        <div className="clear"></div>
                    </div>

                </div>

                <div className="content skills">
                    <div className="title">私のスキル</div>
                    <div className="row">
                        {/* <div className="col col-d-6 col-t-6 col-m-12 border-line-v">
                            <div className="skills-list">
                                <div className="skill-title border-line-h">
                                    <div className="icon"><i className="fa fa-paint-brush"></i></div>
                                    <div className="name">Design</div>
                                </div>
                                <ul>
                                    <li className="border-line-h">
                                        <div className="name">Web Design</div>
                                        <div className="progress">
                                            <div className="percentage" style={{ width: "90%" }}></div>
                                        </div>
                                    </li>
                                    <li className="border-line-h">
                                        <div className="name">Write Music</div>
                                        <div className="progress">
                                            <div className="percentage" style={{ width: "65%" }}></div>
                                        </div>
                                    </li>
                                    <li className="border-line-h">
                                        <div className="name">Photoshop</div>
                                        <div className="progress">
                                            <div className="percentage" style={{ width: "75%" }}></div>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="name">Graphic Design</div>
                                        <div className="progress">
                                            <div className="percentage" style={{ width: "85%" }}></div>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div> */}


                        <div className="col col-d-6 col-t-6 col-m-12 border-line-v">
                            <div className="skills-list dotted">
                                <div className="skill-title border-line-h">
                                    <div className="icon"><i className="fa fa-flag"></i></div>
                                    <div className="name">言語</div>
                                </div>
                                <ul>
                                    <li className="border-line-h">
                                        <div className="name">英語</div>
                                        <div className="progress">
                                            <div className="percentage" style={{ width: "90%" }}></div>
                                        </div>
                                    </li>
                                    <li className="border-line-h">
                                        <div className="name">中国語</div>
                                        <div className="progress">
                                            <div className="percentage" style={{ width: "90%" }}></div>
                                        </div>
                                    </li>
                                    <li className="border-line-h">
                                        <div className="name">日本語</div>
                                        <div className="progress">
                                            <div className="percentage" style={{ width: "70%" }}></div>
                                        </div>
                                    </li>
                                 </ul>
                            </div>
                        </div>


                        {/* <div className="col col-d-6 col-t-6 col-m-12 border-line-v">
                            <div className="skills-list circles">
                                <div className="skill-title border-line-h">
                                    <div className="icon"><i className="fa fa-code"></i></div>
                                    <div className="name">Coding</div>
                                </div>
                                <ul>
                                    <li>
                                        <div className="name">WordPress</div>
                                        <div className="progress p90">
                                            <span>90%</span>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="name">PHP / MYSQL</div>
                                        <div className="progress p75">
                                            <span>75%</span>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="name">Angular / JavaScript</div>
                                        <div className="progress p85">
                                            <span>85%</span>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="name">HTML / CSS</div>
                                        <div className="progress p95">
                                            <span>95%</span>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div> */}


                        {/* <div className="col col-d-6 col-t-6 col-m-12 border-line-v">
                            <div className="skills-list list">
                                <div className="skill-title border-line-h">
                                    <div className="icon"><i className="fa fa-list"></i></div>
                                    <div className="name">Knowledge</div>
                                </div>
                                <ul>
                                    <li>
                                        <div className="name">Website hosting</div>
                                    </li>
                                    <li>
                                        <div className="name">iOS and android apps</div>
                                    </li>
                                    <li>
                                        <div className="name">Create logo design</div>
                                    </li>
                                    <li>
                                        <div className="name">Design for print</div>
                                    </li>
                                    <li>
                                        <div className="name">Modern and mobile-ready</div>
                                    </li>
                                    <li>
                                        <div className="name">Advertising services include</div>
                                    </li>
                                    <li>
                                        <div className="name">Graphics and animations</div>
                                    </li>
                                    <li>
                                        <div className="name">Search engine marketing</div>
                                    </li>
                                </ul>
                            </div>
                        </div> */}

                        <div className="clear"></div>
                    </div>

                </div>


                <div className="content testimonials">


                    <div className="title">お客様の声</div>


                    <div className="row testimonials-items">


                        <div className="col col-d-12 col-t-12 col-m-12 border-line-v">
                            <div className="revs-carousel default-revs">
                                <div className="owl-carousel">
                                    {Services.clients.map((clnt, ind) =>
                                        <div className="item">
                                            <div className="revs-item">
                                                <div className="text">
                                                    {clnt.content}
                                                </div>
                                                <div className="user">
                                                    <div className="img"><img src={clnt.avatarUrl} alt="" /></div>
                                                    <div className="info">
                                                        <div className="name">{clnt.name}</div>
                                                        <div className="company">{clnt.role}</div>
                                                    </div>
                                                    <div className="clear"></div>
                                                </div>
                                            </div>
                                        </div>
                                    )}
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

export default Resume
