import React from "react";

const PostItem = (
    {
      post = {
        pfp: './muskpfp.png',
        userName: 'Elon Musk',
        handle: 'elonmusk',
        time: '23h',
        content: 'Amazing show about @Inspiration4x mission!',
        image: './spacesuit.png',
        linkTitle: 'Countdown: Inspiration4 Mission to Space | Netflix Official Site',
        linkContent: 'From training to launch to landing, this all-access docuseries rides along with the Inspiration4 crew on the first all-civilian orbital space ...',
        link: 'netflix.com',
        comments: '4.2K',
        retuits: '3.5K',
        likes: '37.5K'
      }
    }) => {
  if (post.link != null) {
  return(
      <>
<div className="wd-row">
  <img className="wd-float-left wd-left-margin wd-top-bottom-margin wd-48-by-48 wd-rounded-corners-48" src={require("" + post.pfp)}/>
  <p className="wd-float-left wd-left-margin-12 wd-top-bottom-margin wd-white-fg wd-15px-font wd-width-506">
    <span className="wd-bold">{post.userName}</span> <span className="wd-gray-fg">@{post.handle} - {post.time}</span>
    <br/>
    {post.content}
  </p>
  <i className="fas fa-ellipsis-h wd-float-right"></i>
</div>

<div className="wd-row">
  <img className="wd-float-left wd-left-margin-plus-pic wd-dark-gray-border-full wd-rounded-top-corners wd-width-504 wd-height-264" src={require("" + post.image)}/>
</div>

<div className="wd-row">
  <p className="wd-float-left wd-left-margin-plus-pic wd-gray-fg wd-dark-gray-border-full wd-rounded-bottom-corners wd-width-504 wd-padded">
    <span className="wd-white-fg wd-bold">{post.linkTitle}</span>
    <br/>
    {post.linkContent}
  </p>
</div>

<div className="wd-row">
  <a href="#">
    <i className="fas fa-comment wd-float-left wd-left-margin-plus-pic wd-gray-fg"></i>
    <p className="wd-float-left wd-left-margin-12 wd-gray-fg">{post.comments}</p>
  </a>
  <a href="#">
    <i className="fas fa-retweet wd-float-left wd-left-margin-80 wd-gray-fg"></i>
    <p className="wd-float-left wd-left-margin-12 wd-gray-fg">{post.retuits}</p>
  </a>
  <a href="#">
    <i className="fas fa-heart wd-float-left wd-left-margin-80 wd-gray-fg"></i>
    <p className="wd-float-left wd-left-margin-12 wd-gray-fg">{post.likes}</p>
  </a>
  <a href="#">
    <i className="fas fa-upload wd-float-left wd-left-margin-80 wd-gray-fg"></i>
  </a>
</div>
        </>
  ); }
  else {
    return(
        <>
<div className="wd-row">
  <img className="wd-float-left wd-left-margin wd-top-bottom-margin wd-48-by-48 wd-rounded-corners-48" src={require("" + post.pfp)}/>
  <p className="wd-float-left wd-left-margin-12 wd-top-bottom-margin wd-white-fg wd-15px-font wd-width-506">
    <span className="wd-bold">{post.userName}</span> <span className="wd-gray-fg">@{post.handle} - {post.time}</span>
    <br/>
    {post.content}
  </p>
  <i className="fas fa-ellipsis-h wd-float-right"></i>
</div>

<div className="wd-row">
  <img className="wd-float-left wd-left-margin-plus-pic wd-dark-gray-border-full wd-rounded-top-corners wd-rounded-bottom-corners wd-width-504 wd-height-264" src={require("" + post.image)}/>
</div>

<div className="wd-row">
  <a href="#">
    <i className="fas fa-comment wd-float-left wd-left-margin-plus-pic wd-gray-fg"></i>
    <p className="wd-float-left wd-left-margin-12 wd-gray-fg">{post.comments}</p>
  </a>
  <a href="#">
    <i className="fas fa-retweet wd-float-left wd-left-margin-80 wd-gray-fg"></i>
    <p className="wd-float-left wd-left-margin-12 wd-gray-fg">{post.retuits}</p>
  </a>
  <a href="#">
    <i className="fas fa-heart wd-float-left wd-left-margin-80 wd-gray-fg"></i>
    <p className="wd-float-left wd-left-margin-12 wd-gray-fg">{post.likes}</p>
  </a>
  <a href="#">
    <i className="fas fa-upload wd-float-left wd-left-margin-80 wd-gray-fg"></i>
  </a>
</div>
</>
); }
}

export default PostItem;