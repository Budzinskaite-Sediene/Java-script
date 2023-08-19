import "./Video.css";

const Video = ({
  videoID,
  autoplay,
  colour,
  controls,
  start,
  end,
  loop,
  thumbnail,
  className,
}) => {
  if (!videoID) {
    return <img src={thumbnail} alt="Thumbnail" />;
  }

  const videoUrl = `https://www.youtube.com/embed/${videoID}?autoplay=${autoplay}&color=${colour}&controls=${controls}&start=${start}&end=${end}&loop=${loop}`;

  return (
    <iframe
      title="YouTube Video Player"
      width="200"
      height="300"
      src={videoUrl}
      frameBorder="0"
      allowFullScreen
    ></iframe>
  );
};

export default Video;
