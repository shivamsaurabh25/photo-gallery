import React from "react";

const MediaItem = ({ item }) => {
  const handleDownload = async () => {
    try {
      const response = await fetch(item.src.large2x);
      const blob = await response.blob();
      const url = URL.createObjectURL(blob);

      const link = document.createElement("a");
      link.href = url;
      link.download = `${item.photographer.replace(/\s+/g, "_")}_photo.jpg`; // Set filename
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);

      URL.revokeObjectURL(url);
    } catch (error) {
      console.error("Download failed:", error);
    }
  };

  return (
    <div className="media-item glass">
      <img src={item.src.medium} alt={item.photographer} />
      <p>{item.photographer}</p>
      <button onClick={handleDownload}>Download</button>
    </div>
  );
};

export default MediaItem;