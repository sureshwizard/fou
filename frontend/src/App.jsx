import React, { useState } from "react";
import InputPanel from "./components/InputPanel.jsx";
import AssetList from "./components/AssetList.jsx";
import StoryblokTimeline from "./components/StoryblokTimeline.jsx";
import ExportPanel from "./components/ExportPanel.jsx";

export default function App() {
  const [assets, setAssets] = useState([]);
  const [storyblok, setStoryblok] = useState(null);

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white p-6">
      <h1 className="text-3xl font-bold mb-4">🎬 Frames of Us (FOU)</h1>
      <InputPanel onAdd={setAssets} />
      <AssetList assets={assets} />
      <StoryblokTimeline storyblok={storyblok} />
      <ExportPanel storyblok={storyblok} />
    </div>
  );
}
