import React from "react";
import "./write.css";

export default function Write() {
    return (
        <main id="contents" className="gray">
            <h2 className="ir_so">게시판 영역</h2>
            <section id="board-type" className="section center mb100">
                <div className="container">
                    <h3 className="section__title">블로그 게시글 작성하기</h3>
                    <p className="section__desc">구기종목과 관련된 게시글을 작성해주세요!</p>
                    <div className="blog__inner">
                        <div className="blog__write">
                            <form
                                action="blogWriteSave.php"
                                name="blogWrite"
                                method="post"
                                encType="multipart/form-data"
                            >
                                <fieldset>
                                    <legend className="ir_so">블로그 게시글 작성 영역</legend>
                                    <div>
                                        <label htmlFor="blogCate">카테고리</label>
                                        <select name="blogCate" id="blogCate">
                                            <option value="golf">golf</option>
                                            <option value="basketball">basketball</option>
                                            <option value="soccer">soccer</option>
                                        </select>
                                    </div>
                                    <div>
                                        <label htmlFor="blogTitle">제목</label>
                                        <input
                                            type="text"
                                            name="blogTitle"
                                            id="blogTitle"
                                            placeholder="제목을 입력해주세요!"
                                            required
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="blogContents">내용</label>
                                        <textarea
                                            name="blogContents"
                                            id="blogContents"
                                            placeholder="내용을 입력해주세요!"
                                            required
                                        ></textarea>
                                    </div>
                                    <div>
                                        <label htmlFor="blogFile">파일</label>
                                        <input
                                            type="file"
                                            name="blogFile"
                                            accept=".jpg, .jpeg, png, git"
                                            placeholder="사진을 넣어주세요! 사진은 jpg png만 지원됩니다."
                                        />
                                    </div>
                                    <button type="submit" value="저장하기">
                                        저장하기
                                    </button>
                                </fieldset>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}
