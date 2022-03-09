import React from 'react';

import { 
  BsFacebook,
  BsInstagram, 
  BsSpotify, 
  BsLinkedin, 
  BsGithub 
} from 'react-icons/bs';

const SocialMedia = () => {
  return (
    <div className="app__social">
      <a href="https://www.facebook.com/lorimersimon/" target="_blank">
        <div>
        <BsFacebook/>
        </div>
      </a>
      <a href="https://open.spotify.com/user/12178407794?si=820e466226f2474e" target="_blank">
        <div>
        <BsSpotify/>
        </div>
      </a>
      <a href="https://www.instagram.com/simonlorimer/" target="_blank">
        <div>
          <BsInstagram/>
        </div>
      </a>
      <a href="https://www.linkedin.com/in/simonlorimer/" target="_blank">
        <div>
          <BsLinkedin/>
        </div>
      </a>
      <a href="https://github.com/simonlorimer/" target="_blank">
        <div>
          <BsGithub/>
        </div>
      </a>
    </div>
  );
}

export default SocialMedia;