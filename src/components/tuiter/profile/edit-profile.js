import React from "react";

const EditProfile = () => {
  return (
      <>
        <h2>Edit Profile</h2>

        <a href="profile.html">Save</a>

        <img src="dnd.png"
             height="200px"
             width="100%"/>

        <input type="file"/>

        <br/>

        <img src="ownerimage.jpg"
             height="48px"/>

        <br/>

        <input type="file"/>

          <label for="name">Name</label>
          <br/>
          <input type="text" id="name" placeholder="Name"
                 value="WebDev"/>

        <form id="bio">
          <label
              for="bio-body">Bio</label><br/>
          <textarea id="bio-body" cols="50" rows="10">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</textarea>
        </form>
      </>
  );

}

export default EditProfile;