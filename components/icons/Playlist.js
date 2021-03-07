import * as React from "react";

function SvgPlaylist(props) {
  return (
    <svg
      width="1em"
      height="1em"
      viewBox="0 0 30 30"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g clipPath="url(#playlist_svg__clip0)" fill="currentColor">
        <path d="M25.62 1.232C25.62.552 25.067 0 24.386 0H1.232C.552 0 0 .552 0 1.232v23.155a1.232 1.232 0 102.464 0V2.464h21.923c.68 0 1.232-.551 1.232-1.232z" />
        <path d="M28.768 4.38H5.613c-.68 0-1.232.552-1.232 1.233v23.155c0 .68.551 1.232 1.232 1.232h23.155c.68 0 1.232-.552 1.232-1.232V5.613c0-.68-.552-1.232-1.232-1.232zM22.36 14.926a1.232 1.232 0 01-1.653.551l-1.972-.986v5.517A3.74 3.74 0 0115 23.742a3.74 3.74 0 01-3.735-3.735A3.74 3.74 0 0115 16.27h1.271v-3.774c0-.916.965-1.51 1.783-1.102l3.755 1.877c.609.305.855 1.045.551 1.653z" />
      </g>
      <defs>
        <clipPath id="playlist_svg__clip0">
          <path fill="#fff" d="M0 0h30v30H0z" />
        </clipPath>
      </defs>
    </svg>
  );
}

export default SvgPlaylist;
