import React, { useRef } from "react";

export default function InputPanel({ onAdd }) {
  const fileRef = useRef();

  const handleUpload = async (e) => {
    const files = e.target.files;
    const fd = new FormData();
    for (let f of files) fd.append("files[]", f);
    const res = await fetch("/api/upload", { method: "POST", body: fd });
    const data = await res.json();
    onAdd(data.uploaded);
  };

  return (
    <div className="border-2 border-dashed p-6 rounded-xl mb-4 bg-white">
      <h2 className="font-semibold mb-2">Add Media</h2>
      <input type="file" multiple ref={fileRef} onChange={handleUpload} />
    </div>
  );
}
