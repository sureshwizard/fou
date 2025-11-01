// Stub: integrate Chrome Built-in AI calls here later
export async function createStoryblokFromAssets(assets) {
  // Example: call /api/generate_storyblok or local Chrome AI
  const res = await fetch("/api/generate_storyblok", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ keyframes: assets, transcript: "sample text" })
  });
  return await res.json();
}
