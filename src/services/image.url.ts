// const getCroppedImageUrl = (url: string) => {
//   const target = "media/";
//   const index = url.indexOf(target) + target.length;
//   return url.slice(0, index) + "crop/600/400" + url.slice(index);
// };

// export default getCroppedImageUrl;

import noImage from "../assets/no-image.jpg";

const getCroppedImageUrl = (url: string | null) => {
  const regex = /media\//;
  const cropParams = "/crop/600/400/";

  if (!url) return noImage;

  return url.replace(regex, `media${cropParams}`);
};

export default getCroppedImageUrl;
