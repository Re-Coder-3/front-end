import React from "react";
import { Facebook, Twitter, Google } from "react-sharingbuttons";
import "react-sharingbuttons/dist/main.css";

export const SharingBtn = () => {
  const url = "https://github.com/caspg/react-sharingbuttons";
  const shareText = "Check this site!";

  return (
    <div>
      <Google url={url} />
      <Facebook url={url} />
      <Twitter url={url} shareText={shareText} />
    </div>
  );
};
