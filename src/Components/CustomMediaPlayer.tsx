import React, { useState } from "react";
import CustomCard from "./CustomCard";

//add support for youtube and other video types
interface CardProps {
  textLocation?: "top" | "bottom";
  videoUrl: string;
  size: "small" | "large";
  themeType: string;
  title: string;
  videoType: string;
}

const CustomMediaPlayer: React.FC<CardProps> = ({
  videoUrl,
  size,
  themeType,
  title,
  videoType,
}) => {
  return (
    <CustomCard size={size} title={title} themeType={themeType}>
      <video width="100%" height="100%" preload="none" controls>
        <source src={videoUrl} type={`video/${videoType}`} />
        Your browser does not support the video tag.
      </video>
    </CustomCard>
  );
};

export default CustomMediaPlayer;
