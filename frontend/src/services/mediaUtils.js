export function extractVideoMetadata(file) {
  return new Promise((resolve) => {
    const video = document.createElement("video");
    video.preload = "metadata";
    video.onloadedmetadata = () => {
      resolve({ duration: video.duration, name: file.name });
    };
    video.src = URL.createObjectURL(file);
  });
}
