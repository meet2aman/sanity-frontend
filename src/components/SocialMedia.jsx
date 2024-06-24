import React from "react";
import { BsTwitter, BsInstagram } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa";

const SocialMedia = () => {
  return (
    <div className="app__social">
      <div>
        <a href="https://twitter.com/Amankushwaha200" target="_blank">
          <BsTwitter />
        </a>
      </div>
      <div>
        <a href="https://www.instagram.com/meet2amankushwaha/" target="_blank">
          <BsInstagram />
        </a>
      </div>
      <div>
        <a
          href="https://www.facebook.com/profile.php?id=100008408310230"
          target="_blank"
        >
          <FaFacebookF />
        </a>
      </div>
    </div>
  );
};

export default SocialMedia;
