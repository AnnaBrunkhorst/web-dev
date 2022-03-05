const PostSummaryItem = (post) => {
  if (post.link != null) {
  return(`
<div class="wd-row">
  <image class="wd-float-left wd-left-margin wd-top-bottom-margin wd-48-by-48 wd-rounded-corners-48" src="${post.pfp}"/>
  <p class="wd-float-left wd-left-margin-12 wd-top-bottom-margin wd-white-fg wd-15px-font wd-width-506">
    <span class="wd-bold">${post.userName}</span> <span class="wd-gray-fg">@${post.handle} - ${post.time}</span>
    <br/>
    ${post.content}
  </p>
  <i class="fas fa-ellipsis-h wd-float-right"></i>
</div>

<div class="wd-row">
  <image class="wd-float-left wd-left-margin-plus-pic wd-dark-gray-border-full wd-rounded-top-corners wd-width-504 wd-height-264" src="${post.image}"/>
</div>

<div class="wd-row">
  <p class="wd-float-left wd-left-margin-plus-pic wd-gray-fg wd-dark-gray-border-full wd-rounded-bottom-corners wd-width-504 wd-padded">
    <span class="wd-white-fg wd-bold">${post.linkTitle}</span>
    <br/>
    ${post.linkContent}
  </p>
</div>

<div class="wd-row">
  <a href="#">
    <i class="fas fa-comment wd-float-left wd-left-margin-plus-pic wd-gray-fg"></i>
    <p class="wd-float-left wd-left-margin-12 wd-gray-fg">${post.comments}</p>
  </a>
  <a href="#">
    <i class="fas fa-retweet wd-float-left wd-left-margin-80 wd-gray-fg"></i>
    <p class="wd-float-left wd-left-margin-12 wd-gray-fg">${post.retuits}</p>
  </a>
  <a href="#">
    <i class="fas fa-heart wd-float-left wd-left-margin-80 wd-gray-fg"></i>
    <p class="wd-float-left wd-left-margin-12 wd-gray-fg">${post.likes}</p>
  </a>
  <a href="#">
    <i class="fas fa-upload wd-float-left wd-left-margin-80 wd-gray-fg"></i>
  </a>
</div>`); }
  else {
    return(`
<div class="wd-row">
  <image class="wd-float-left wd-left-margin wd-top-bottom-margin wd-48-by-48 wd-rounded-corners-48" src="${post.pfp}"/>
  <p class="wd-float-left wd-left-margin-12 wd-top-bottom-margin wd-white-fg wd-15px-font wd-width-506">
    <span class="wd-bold">${post.userName}</span> <span class="wd-gray-fg">@${post.handle} - ${post.time}</span>
    <br/>
    ${post.content}
  </p>
  <i class="fas fa-ellipsis-h wd-float-right"></i>
</div>

<div class="wd-row">
  <image class="wd-float-left wd-left-margin-plus-pic wd-dark-gray-border-full wd-rounded-top-corners wd-rounded-bottom-corners wd-width-504 wd-height-264" src="${post.image}"/>
</div>

<div class="wd-row">
  <a href="#">
    <i class="fas fa-comment wd-float-left wd-left-margin-plus-pic wd-gray-fg"></i>
    <p class="wd-float-left wd-left-margin-12 wd-gray-fg">${post.comments}</p>
  </a>
  <a href="#">
    <i class="fas fa-retweet wd-float-left wd-left-margin-80 wd-gray-fg"></i>
    <p class="wd-float-left wd-left-margin-12 wd-gray-fg">${post.retuits}</p>
  </a>
  <a href="#">
    <i class="fas fa-heart wd-float-left wd-left-margin-80 wd-gray-fg"></i>
    <p class="wd-float-left wd-left-margin-12 wd-gray-fg">${post.likes}</p>
  </a>
  <a href="#">
    <i class="fas fa-upload wd-float-left wd-left-margin-80 wd-gray-fg"></i>
  </a>
</div>`); }
}

export default PostSummaryItem;