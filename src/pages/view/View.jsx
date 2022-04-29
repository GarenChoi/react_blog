import React from "react";
import "./view.css";
import { Link } from "react-router-dom";

export default function View() {
    return (
        <main id="contents" className="gray">
            <h2 className="ir_so">블로그 영역</h2>
            <section id="board-type" className="center pb100 pt100">
                <div className="container">
                    <div className="blog__layout">
                        <div className="blog__left">
                            <div className="blog__label">
                                <img src="https://source.unsplash.com/800x600/?nature,water" alt="이미지" />
                            </div>
                            <h4>타이틀</h4>
                            <div className="blog__left__info">
                                <span className="info">
                                    <Link to="/">GraenChoi</Link>
                                    <span>2022/04/27</span>
                                </span>
                                <span className="infoBtn">
                                    <Link to="/">수정</Link>
                                    <Link to="/">삭제</Link>
                                </span>
                            </div>
                            <div>
                                컨텐츠 내용입니다.컨텐츠 내용입니다.컨텐츠 내용입니다.컨텐츠 내용입니다.컨텐츠
                                내용입니다.컨텐츠 내용입니다.컨텐츠 내용입니다.컨텐츠 내용입니다.컨텐츠 내용입니다.
                            </div>
                        </div>
                        <div className="blog__right">
                            <div className="ad">
                                <iframe
                                    src="https://ads-partners.coupang.com/widgets.html?id=572086&template=carousel&trackingCode=AF7618501&subId=&width=300&height=300"
                                    title="쿠팡ad"
                                    width="300"
                                    height="300"
                                    frameBorder="0"
                                    scrolling="no"
                                    referrerPolicy="unsafe-url"
                                ></iframe>
                            </div>
                            <Link to="/">목록으로</Link>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}
