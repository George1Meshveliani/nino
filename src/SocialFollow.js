import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faYoutube,
    faFacebook,
    faTwitter,
    faInstagram
  } from "@fortawesome/free-brands-svg-icons";

export default function SocialFollow() {
  return (
    <div class="social-container">
      <h3>Feel free to contact me</h3>
<a href="https://www.facebook.com/gogatishvilin" target="_blank"
  className="facebook social">
  <FontAwesomeIcon icon={faFacebook} size="3x" />
</a>
    </div>
  );
}