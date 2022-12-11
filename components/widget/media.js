const IMAGE = "img";

/**
 *
 * @author Karl-Johan Bailey
 * @created 11/12/2022
 * @desc Abstacts all media displaying
 * @param { Object } media
 * @param { Object } options
 *
 */

export default function Media({ media, options = {}, borderRadius }) {
  if (media.type === IMAGE || !media.type)
    return (
      <img
        src={media.url}
        alt={options.alt || ""}
        width={options.width || "100%"}
        height={options.height || "100%"}
        objectFit="none"
      />
    );
}
