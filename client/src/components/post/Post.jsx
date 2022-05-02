import React from "react";
import "./post.css";
import { Link } from "react-router-dom";

export default function Post() {
    return (
        <article className="blog">
            <figure className="blog__header" aria-hidden="true">
                <Link to="/">
                    <img src="https://source.unsplash.com/800x600/?nature,water" alt="이미지" />
                </Link>
            </figure>
            <div className="blog__body">
                <span className="blog__cate">카테고리</span>
                <div className="blog__title">타이틀</div>
                <div className="blog__desc">내용입니다.</div>
                <div className="blog__info">
                    <span className="author">
                        <Link to="/">GarenChoi</Link>
                    </span>
                    <span className="date">2022/04/27</span>
                </div>
            </div>
        </article>
    );
}
