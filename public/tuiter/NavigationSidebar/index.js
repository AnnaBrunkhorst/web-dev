const NavigationSidebar = (active) => {
  return(`
            <div class="list-group">
                <a class="list-group-item" href="../HomeScreen/oldHome.html">
                    <i class="fab fa-twitter"></i></a>
            <!-- continue the rest of the list -->
                <a class="list-group-item ${active == 'home' ? 'active' : ''}" href="../HomeScreen/oldHome.html">
                    <i class="fas fa-home"></i>&nbsp Home</a>
                <a class="list-group-item ${active == 'explore' ? 'active' : ''}" href="../ExploreScreen/oldExplore.html">
                    <i class="fas fa-hashtag"></i>&nbsp Explore</a>
                <a class="list-group-item ${active == 'notifications' ? 'active'
      : ''}" href="../notifications.html">
                    <i class="far fa-bell"></i>&nbsp Notifications</a>
                <a class="list-group-item ${active == 'messages' ? 'active'
      : ''}" href="../messages.html">
                    <i class="far fa-envelope"></i>&nbsp Messages</a>
                <a class="list-group-item ${active == 'bookmarks' ? 'active'
      : ''}" href="../bookmarks.html">
                    <i class="far fa-bookmark"></i>&nbsp Bookmarks</a>
                <a class="list-group-item ${active == 'lists' ? 'active' : ''}" href="../lists.html">
                    <i class="far fa-list-alt"></i>&nbsp Lists</a>
                <a class="list-group-item ${active == 'profile' ? 'active' : ''}" href="../oldProfile.html">
                    <i class="far fa-user"></i>&nbsp Profile</a>
                <a class="list-group-item ${active == 'more' ? 'active' : ''}" href="../more.html">
                    <i class="fas fa-ellipsis-h"></i>&nbsp More</a>
            </div>
            <div class="d-grid mt-2">
                <a href="../tuit.html"
                   class="btn btn-primary btn-block rounded-pill">
                    Tuit</a>
            </div>
    `);
}
export default NavigationSidebar;
