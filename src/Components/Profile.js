import React, { useContext } from "react";
import { AuthContext } from "../contexts/AuthProvider";

const Profile = ({ user }) => {
  const { logout } = useContext(AuthContext);

  const handleLogout = () => {
    logout().then((result) => {
      alert("logout");
    });
  };
  return (
    <div className="drawer drawer-end z-index-1">
      <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content">
        {/* Page content here */}
        <label
          htmlFor="my-drawer-4"
          className="drawer-button btn btn-ghost btn-circle avatar"
        >
          <div className="w-10 rounded-full ">
            {user.photoURL ? (
              <img alt="Tailwind CSS Navbar component" src={user.photoURL} />
            ) : (
              <img src="https://media.istockphoto.com/id/1281052753/vector/yummy-smile-icon-for-tasty-food-smiley-of-mouth-with-tongue-and-saliva-happy-face-after.jpg?s=612x612&w=0&k=20&c=eZuf9c1GsgXRU-4iO9xl-9B3Zle2xLbd587UvWJHWHg=" />
            )}
          </div>
        </label>
      </div>
      <div className="drawer-side">
        <label
          htmlFor="my-drawer-4"
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>
        <ul className="menu p-4 w-80 min-h-full bg-base-200 text-base-content">
          {/* Sidebar content here */}
          <li>
            <a href="/update-profile">Profile</a>
          </li>
          <li>
            <a>Orders</a>
          </li>
          <li>
            <a>Setting</a>
          </li>
          <li>
            <a onClick={handleLogout}>LogOut</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Profile;