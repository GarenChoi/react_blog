import React from "react";
import "./view.css";

export default function View() {
    return (
        <main id="contents">
            <h2 className="ir_so">블로그 영역</h2>
            <section id="board-type" className="center mb100">
                <div className="blog__label">
                    <h3 className="section__title">타이틀</h3>
                    <span className="author">
                        <a href="/">GraenChoi</a>
                    </span>
                    <span className="date">2022/04/28 15:23</span>
                    <br />

                    <span className="modify">
                        <a href="/">수정</a>
                    </span>
                    <span className="delete">
                        <a href="/">삭제</a>
                    </span>
                </div>
                <div className="container">
                    <div className="blog__layout">
                        <div className="blog__left">
                            <h4>타이틀</h4>
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
                                    frameborder="0"
                                    scrolling="no"
                                    referrerpolicy="unsafe-url"
                                ></iframe>
                            </div>
                            <a href="/">목록으로</a>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}
