import React from "react";

export default function YoutubeShort({ code }: { code: string }) {
  return (
      <iframe
        width="360"
        height="640"
        src={`https://www.youtube.com/embed/${code}`}
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
      ></iframe>
  );
}
