import React from "react";

export default function StoryblokTimeline({ storyblok }) {
  if (!storyblok) return null;
  return (
    <div className="bg-white p-4 rounded-xl mb-4 shadow">
      <h2 className="font-semibold mb-3">Storyblok Timeline</h2>
      {storyblok.scenes.map((s, i) => (
        <div key={i} className="border-b py-2">
          <p className="font-bold">{s.title}</p>
          <p className="text-sm text-gray-600">{s.narration}</p>
        </div>
      ))}
    </div>
  );
}
