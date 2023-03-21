// const getCroppedImageUrl = (url: string) => {
//   const target = "media/";
//   const index = url.indexOf(target) + target.length;
//   return url.slice(0, index) + "crop/600/400" + url.slice(index);
// };

// export default getCroppedImageUrl;

const getCroppedImageUrl = (url: string) => {
  const regex = /media\//;
  const cropParams = "/crop/600/400/";
  return url.replace(regex, `media${cropParams}`);
};

export default getCroppedImageUrl;
