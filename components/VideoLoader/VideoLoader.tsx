export default function VideoLoader({
  src,
  loop,
  autoPlay,
  controls,
  muted,
  preload,
  className,
  controlsList,
  onClick,
}: any) {
  return (
    <video
      src={src}
      loop={loop}
      autoPlay={autoPlay}
      controls={controls}
      muted={muted}
      preload={preload}
      className={className}
      controlsList={controlsList}
      onClick={onClick}
    ></video>
  );
}
