const WhoToFollowListItem = (who) => {
  return(`
    <div class="row wd-rtl">
      <div class="col wd-vert-center wd-no-wrap">
        <image class="wd-float-left wd-50-by-50 wd-rounded-corners-50"
               src="${who.avatarIcon}"/>
        <span class="wd-white-fg wd-bold">
          ${who.userName} <i class="fas fa-check-circle"></i>
        </span>
        <br/>
        <span class="wd-gray-fg">
          @ ${who.handle}
        </span>
      </div>
      <div class="col-auto wd-vert-center">
        <a href=""
           class="btn wd-button-bs-override-white wd-vert-center">
          Follow
        </a>
      </div>
    </div>`);
}

export default WhoToFollowListItem;