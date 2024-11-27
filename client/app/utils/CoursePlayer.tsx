import React, { FC, useEffect, useState } from "react";
import axios from "axios";
const cloud_name=process.env.NEXT_PUBLIC_CLOUD_NAME;

type Props = {
  videoUrl: string;
  title: string;
};

const CoursePlayer: FC<Props> = ({ videoUrl }) => {
  // const [videoData, setVideoData] = useState({
  //   otp: "",
  //   playbackInfo: "",
  // });

  // useEffect(() => {
  //   axios
  //     .post(`${process.env.NEXT_PUBLIC_SERVER_URI}/getVdoCipherOTP`, {
  //       videoId: videoUrl,
  //     })
  //     .then((res) => {
  //       // console.log(res.data.otp);
  //       console.log(res.data.playbackInfo);
  //       setVideoData(res.data);
  //     });
  // }, [videoUrl]);
  // console.log(videoData);
  return (
    <div
      style={{ position: "relative", paddingTop: "56.25%", overflow: "hidden" }}
    >
      {/* {videoData.otp!=="" && videoData.playbackInfo !== "" && ( */}
        <iframe
          src={`https://player.cloudinary.com/embed/?public_id=${videoUrl}&cloud_name=${cloud_name}&profile=cld-default&autoplay=true`}
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            border: 0,
          }}
          allow="autoplay; fullscreen; encrypted-media; picture-in-picture"
        ></iframe>
      {/* )} */}
    </div>
  );
};




        // <iframe
        //   src={`https://player.vdocipher.com/v2/?otp=${videoData?.otp}&playbackInfo=${videoData.playbackInfo}&player=NTt9g9mANS7xLPYc`}
        //   style={{
        //     position: "absolute",
        //     top: 0,
        //     left: 0,
        //     width: "100%",
        //     height: "100%",
        //     border: 0,
        //   }}
        //   allowFullScreen={true}
        //   allow="encrypted-media"
        // ></iframe>

export default CoursePlayer;