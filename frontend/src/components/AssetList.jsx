import React from "react";

export default function AssetList({ assets }) {
  if (!assets.length) return null;
  return (
    <div className="bg-white rounded-xl p-4 mb-4 shadow">
      <h2 className="font-semibold mb-3">Uploaded Assets</h2>
      <ul className="list-disc pl-6">
        {assets.map((a, i) => (
          <li key={i}>{a}</li>
        ))}
      </ul>
    </div>
  );
}
