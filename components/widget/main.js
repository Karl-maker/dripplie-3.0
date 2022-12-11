import Media from "./media";

export default function MainWidget({ media }) {
  return <Media media={media.url} />;
}
