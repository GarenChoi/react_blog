import React from "react";
import "./header.css";
import { Link } from "react-router-dom";

export default function Header() {
    return (
        <header id="header">
            <h1 className="logo">
                <Link to="/">
                    REACT <em>blog</em>
                </Link>
            </h1>
            <nav className="menu">
                <h2 className="ir_so">메인 메뉴</h2>
                <ul>
                    <li>
                        <Link to="/">HOME</Link>
                    </li>
                    <li>
                        <Link to="/login">LOGIN</Link>
                    </li>
                    <li>
                        <Link to="../board/board.php">CONTACT</Link>
                    </li>
                    <li>
                        <Link to="../blog/blog.php">WRITE</Link>
                    </li>
                    <li>
                        <Link to="../quiz/quiz.php">LOGOUT</Link>
                    </li>
                </ul>
            </nav>
            <div className="member">
                <span className="ir_so">회원정보 영역</span>

                <Link to="/" className="setting">
                    <img src="./img01.jpeg" alt="이미지" />
                </Link>
                <Link to="/">...님 환영합니다.</Link>
            </div>
        </header>
    );
}
