export default function VideoLoader({
  src,
  loop,
  autoPlay,
  controls,
  muted,
  className,
  controlsList,
}: any) {
  return (
    <video
      src={src}
      loop
      autoPlay={autoPlay}
      controls={controls}
      muted
      className={className}
      controlsList={controlsList}
    ></video>
  );
}
