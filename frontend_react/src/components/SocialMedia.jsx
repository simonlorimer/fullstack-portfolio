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
      <div>
        <BsFacebook/>
      </div>
      <div>
        <BsSpotify/>
      </div>
      <div>
        <BsInstagram/>
      </div>
      <div>
        <BsLinkedin/>
      </div>
      <div>
        <BsGithub/>
      </div>
    </div>
  );
}

export default SocialMedia;