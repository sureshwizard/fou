export async function renderPreviewCanvas(scene) {
  const canvas = document.createElement("canvas");
  const ctx = canvas.getContext("2d");
  canvas.width = 1280;
  canvas.height = 720;
  const img = new Image();
  img.src = scene.keyframe;
  await new Promise((r) => (img.onload = r));
  ctx.drawImage(img, 0, 0, 1280, 720);
  ctx.font = "32px Inter";
  ctx.fillStyle = "white";
  ctx.fillText(scene.title, 40, 60);
  return canvas;
}
