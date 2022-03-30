import React from "react";

const Profile = () => {
  return (
      <>
        <h2>Profile</h2>

        <img src="dnd.png"
             height="200px"
             width="100%"/>

        <br/>

        <img src="ownerimage.jpg"
             height="48px"/>
        <a href="editprofile">Edit profile</a>

        <h2>WebDev</h2>
        @WebDev

        <p>
          Candidate for Bachelor's in Computer Science and Economics with a
          minor in Sociology at Northeastern University. Avid Dungeons and
          Dragons player and fan of all films, good and bad. Excited for the new
          Formula 1 season!
        </p>
        <p>
          Joined January 2022
        </p>
        <p>
          <b>123</b> Following <b>234</b> Followers
        </p>

        <ul>
          <li><a href="tuits.html">Tuits</a></li>
          <li><a href="tuits-and-replies.html">Tuits & replies</a></li>
          <li><a href="media.html">Media</a></li>
          <li><a href="likes.html">Likes</a></li>
        </ul>
      </>
  );

}

export default Profile;