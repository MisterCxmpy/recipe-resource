import React from "react";
import InfoBox from "../InfoBox/InfoBox";
import "./Section.css";

export default function Section({ heading, title, message, img }) {
  return (
    <div className="section">
      <h1 className="heading">{heading}</h1>
      {title && message && img ? (
        <div className="boxes">
          <InfoBox title={title[0]} message={message[0]} img={img[0]} />
          <InfoBox title={title[1]} message={message[1]} img={img[1]} />
          <InfoBox title={title[2]} message={message[2]} img={img[2]} />
        </div>
      ) : (
        ""
      )}
    </div>
  );
}
