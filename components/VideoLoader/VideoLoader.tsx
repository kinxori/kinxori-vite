export default function VideoLoader(src, loop, autoPlay, controls, muted) {
  return <video src={src} loop autoPlay controls={controls} muted></video>;
}
