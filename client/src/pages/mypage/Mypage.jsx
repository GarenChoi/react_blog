import React from "react";
import { Link } from "react-router-dom";
import "./mypage.css";

export default function Mypage() {
    return (
        <main id="contents">
            <h2 className="ir_so">컨텐츠 영역</h2>
            <section className="join-type gray">
                <div className="member-form">
                    <form action="mypageModify.php" id="imgForm" method="post" encType="multipart/form-data">
                        <h3 className="mb30">회원 정보</h3>
                        <div className="join-intro">
                            <div className="face">
                                <figure>
                                    <img src="./img01.jpeg" alt="프로필이미지" className="mypage__img" id="View" />
                                </figure>
                            </div>
                            <div className="intro">안녕하세요~</div>
                        </div>
                        <div className="join-info">
                            <ul>
                                <li>
                                    <strong>소개하는 글</strong>
                                    <span>안녕하세요~</span>
                                </li>
                                <li>
                                    <strong>이메일</strong>
                                    <span>1111@gmail.com</span>
                                </li>
                                <li>
                                    <strong>닉네임</strong>
                                    <span>가나다123</span>
                                </li>
                                <li>
                                    <strong>이름</strong>
                                    <span>최근영</span>
                                </li>
                                <li>
                                    <strong>생일</strong>
                                    <span>1997-01-17</span>
                                </li>
                                <li>
                                    <strong>번호</strong>
                                    <span>010-2222-5555</span>
                                </li>
                                <li>
                                    <strong>성별</strong>
                                    <span>남자</span>
                                </li>
                                <li>
                                    <strong>사이트</strong>
                                    <span>https://garenchoi2.netlify.app/</span>
                                </li>
                            </ul>
                        </div>
                        <div className="join-btn">
                            <Link to="/">수정하기</Link>
                            <Link to="/">탈퇴하기</Link>
                        </div>
                    </form>
                </div>
            </section>
        </main>
    );
}
