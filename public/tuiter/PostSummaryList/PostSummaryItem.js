const PostSummaryItem = (post) => {
  return(`
    <div class="wd-row">
      <p class="wd-float-left wd-padded wd-gray-fg wd-13px-font wd-full-width-minus-pic wd-remove-margins">
        ${post.topic}
        <br/>
        <span class="wd-white-fg wd-bold">${post.userName}<i class="fas fa-check-circle"></i></span> - ${post.time}
        <br/>
        <span class="wd-white-fg wd-15px-font wd-bold">
          ${post.title}
        </span>
      </p>
      <image class="wd-float-right wd-padded wd-100-by-100 wd-rounded-corners-30"
             src="${post.image}"/>
      <div class="wd-row"/>
    </div>`);
}

export default PostSummaryItem;