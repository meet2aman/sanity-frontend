import React from "react";
import { BsTwitterX, BsInstagram, BsGithub, BsLinkedin } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa";

const SocialMedia = () => {
  return (
    <div className="app__social">
      <div>
        <a href="https://x.com/Amankushwaha200" target="_blank">
          <BsTwitterX />
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
      <div>
        <a href="www.linkedin.com/in/meet2amank" target="_blank">
          <BsLinkedin />
        </a>
      </div>
      <div>
        <a href="https://github.com/meet2aman" target="_blank">
          <BsGithub />
        </a>
      </div>
    </div>
  );
};

export default SocialMedia;
