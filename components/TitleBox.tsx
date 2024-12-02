import React from "react";

const TitleBox = ({ type = "title", title, subtext, user }: TitleBoxProps) => {
  return (
    <div className="title-box">
      <h1 className="title-box-title">
        {title}
        {type === "greeting" && (
          <span className="text-primary">&nbsp;{user}</span>
        )}
      </h1>
      <p className="title-box-subtext">{subtext}</p>
    </div>
  );
};

export default TitleBox;
