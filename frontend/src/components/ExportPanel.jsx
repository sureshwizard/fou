import React from "react";

export default function ExportPanel({ storyblok }) {
  if (!storyblok) return null;
  return (
    <div className="bg-white p-4 rounded-xl shadow">
      <h2 className="font-semibold mb-3">Export</h2>
      <p className="text-sm text-gray-600">Generate final video or social post presets.</p>
      <button className="mt-3 px-4 py-2 bg-gradient-to-r from-indigo-500 to-pink-500 text-white rounded-lg shadow">
        Export for YouTube
      </button>
    </div>
  );
}
