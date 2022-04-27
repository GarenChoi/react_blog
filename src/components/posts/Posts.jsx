import React from "react";
import "./posts.css";
import Post from "../post/Post";

export default function posts() {
    return (
        <div id="blog">
            <h2 className="ir_so">블로그 영역</h2>
            <section id="board-type">
                <div className="container">
                    {/* <h3>구기종목 블로그</h3>
                    <p class="section__desc">구기종목과 관련된 블로그입니다. 다양한 정보를 확인하세요!</p> */}
                    <div className="blog__inner">
                        <Post />
                        <Post />
                        <Post />
                        <Post />
                        <Post />
                        <Post />
                        <Post />
                        <Post />
                        <Post />
                    </div>
                </div>
            </section>
        </div>
    );
}
