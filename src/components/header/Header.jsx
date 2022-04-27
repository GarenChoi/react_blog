import React from "react";
import "./header.css";

export default function Header() {
    return (
        <header id="header">
            <h1 className="logo">
                <a href="#">
                    REACT <em>blog</em>
                </a>
            </h1>
            <nav className="menu">
                <h2 className="ir_so">메인 메뉴</h2>
                <ul>
                    <li>
                        <a href="../login/join.php">HOME</a>
                    </li>
                    <li>
                        <a href="../comment/comment.php">ABOUT</a>
                    </li>
                    <li>
                        <a href="../board/board.php">CONTACT</a>
                    </li>
                    <li>
                        <a href="../blog/blog.php">WRITE</a>
                    </li>
                    <li>
                        <a href="../quiz/quiz.php">LOGOUT</a>
                    </li>
                </ul>
            </nav>
            <div className="member">
                <span className="ir_so">회원정보 영역</span>

                <a href="#" className="setting">
                    <img src="./img01.jpeg" width="60" height="60" viewBox="0 0 60 60" />
                </a>
                <a href="../login/login.php">...님 환영합니다.</a>
            </div>
        </header>
    );
}
