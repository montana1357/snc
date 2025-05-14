import React from 'react'
import Projects from '../json/projects.json'

const Works = () => {
    return (
        <div className="card-inner" id="works-card">
            <div className="card-wrap">
                <div className="content works">
                    <div className="title">Recent Works</div>

                    <div className="filter-menu filter-button-group">
                        <div className="f_btn active">
                            <label><input type="radio" name="fl_radio" value="grid-item" />全て</label>
                        </div>
                        <div className="f_btn">
                            <label><input type="radio" name="fl_radio" value="web" />ウェブ</label>
                        </div>
                        <div className="f_btn">
                            <label><input type="radio" name="fl_radio" value="mobile" />モバイル</label>
                        </div>
                        <div className="f_btn">
                            <label><input type="radio" name="fl_radio" value="blockchain" />ブロックチェーン</label>
                        </div>
                        {/* <div className="f_btn">
                            <label><input type="radio" name="fl_radio" value="photo" />Image</label>
                        </div>
                        <div className="f_btn">
                            <label><input type="radio" name="fl_radio" value="gallery" />Gallery</label>
                        </div>
                        <div className="f_btn">
                            <label><input type="radio" name="fl_radio" value="design" />Content</label>
                        </div> */}
                    </div>


                    <div className="row grid-items border-line-v">
                        {
                            Projects.projects.map((project, ind) => {
                                let categoriesStr = project.categories.join(" ");
                                return (
                                    <div key={`project-${ind}`} className={`col col-d-6 col-t-6 col-m-12 grid-item ${categoriesStr} border-line-h`}>
                                        <div className="box-item">
                                            <div className="image">
                                                <a href={`#popup-${ind}`} className="has-popup-media">
                                                    <img src={project.imageUrl} alt="" />
                                                    <span className="info">
                                                        <span className="ion ion-images"></span>
                                                    </span>
                                                </a>
                                            </div>
                                            <div className="desc">
                                                <a href={`#popup-${ind}`} className="name has-popup-media">{project.name}</a>
                                                <div className="category">{project.categories.length ? project.categories[0] : 'Web'}</div>
                                            </div>
                                            <div id={`popup-${ind}`} className="popup-box mfp-fade mfp-hide">
                                                <div className="content">
                                                    <div className="image">
                                                        <img src={project.imageUrl} alt="" />
                                                    </div>
                                                    <div className="desc">
                                                        <div className="post-box">
                                                            <h1>{project.name}</h1>
                                                            <div className="blog-detail">説明</div>
                                                            <div className="blog-content">
                                                                <p> {project.content} </p>
                                                                <p> {"Key Features"}</p>
                                                                {project.keypoints.map((kp, ind) =>
                                                                    <blockquote key={`keypoint-${ind}`}> {kp} </blockquote>
                                                                )}
                                                                <p>テクノロジー</p>
                                                                <ul className="list-style" style={{ display: 'flex', gap: '20px' }}>
                                                                    {
                                                                        project.stacks.map((stack, ind) =>
                                                                            <li key={`stack-${ind}`} style={{ paddingLeft: "10px" }}> {stack} </li>
                                                                        )
                                                                    }
                                                                </ul>
                                                            </div>
                                                            <a href={project.link} className="button button-project"
                                                                style={{ marginTop: '16px', border: '1px solid green', height: "46px", lineHeight: '46px', textAlign: 'center' }}>
                                                                <span className="text">プロジェクトを見る</span>
                                                                <span className="arrow"></span>
                                                            </a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                );
                            })
                        }


                        {/* <div className="col col-d-6 col-t-6 col-m-12 grid-item gallery border-line-h">
                            <div className="box-item">
                                <div className="image">
                                    <a href="#gallery-1" className="has-popup-gallery">
                                        <img src="images/works/work5.jpg" alt="" />
                                        <span className="info">
                                            <span className="ion ion-images"></span>
                                        </span>
                                    </a>
                                    <div id="gallery-1" className="mfp-hide">
                                        <a href="images/works/work6.jpg"></a>
                                        <a href="images/works/work1.jpg"></a>
                                        <a href="images/works/work5.jpg"></a>
                                    </div>
                                </div>
                                <div className="desc">
                                    <a href="images/works/work5.jpg" className="name has-popup-image">Gereal Travels</a>
                                    <div className="category">Gallery</div>
                                </div>
                            </div>
                        </div> */}

                        <div className="clear"></div>
                    </div>

                </div>

            </div>
        </div>
    )
}

export default Works
