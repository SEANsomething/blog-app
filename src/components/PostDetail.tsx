export default function PostDetail() {
  return <>
    <div className="post__detail">
      <div className="post__box">
        <div className="post__title">
          Lorem, ipsum dolor sit
        </div>
        <div className="post__profile-box">
          <div className="post__profile"></div>
          <div className="post__author-name">작성자 이름</div>
          <div className="post__date">2024.04.17</div>
        </div>
        <div className="post__utils-box">
          <div className="post__delete">삭제</div>
          <div className="post__edit">수정</div>
        </div>
        <div className="post__text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores, ea accusamus nemo voluptas a ipsa voluptates beatae molestias tenetur eum aliquam corrupti reiciendis, exercitationem omnis eligendi animi possimus illo! Neque?</div>
      </div>
    </div>
  </>;
}