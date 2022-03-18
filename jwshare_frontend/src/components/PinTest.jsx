import React from "react";
import { urlFor } from "../client";

// const Pin = ({ pin: postedBy, image, _id }) => {
const Pin = ({ pin }) => {
  console.log("pin = ", pin);
  return (
    <div>
      <img
        className="rounded-lg w-full"
        alt="user-post"
        // src={urlFor(image.asset.url).width(250).url()}
        // src={image.asset.url}
        src={pin.image.asset.url}
      />
    </div>
  );
};

export default Pin;
