import React from "react";
import "./post.css";

export default function Post() {
    return (
        <article className="blog">
            <figure className="blog__header" aria-hidden="true">
                <a href="#">
                    <img src="./img02.jpeg" alt="" />
                </a>
            </figure>
            <div className="blog__body">
                <span className="blog__cate">카테고리</span>
                <div className="blog__title">타이틀</div>
                <div className="blog__desc">내용입니다.</div>
                <div className="blog__info">
                    <span className="author">
                        <a href="#">GarenChoi</a>
                    </span>
                    <span className="date">2022/04/27</span>
                </div>
            </div>
        </article>
    );
}
