import React, { useEffect, useState } from "react";
import { fetchPhotos } from "../api/pexels";
import MediaItem from "./MediaItem";

const MediaGrid = ({ query }) => {
  const [photos, setPhotos] = useState([]);
  const [orientation, setOrientation] = useState("landscape");

  useEffect(() => {
    const getPhotos = async () => {
      const data = await fetchPhotos(query, orientation);
      setPhotos(data);
    };
    getPhotos();
  }, [query, orientation]);

  return (
    <div>
      <div className="orientation-buttons">
        <button onClick={() => setOrientation("landscape")}>📷 Landscape</button>
        <button onClick={() => setOrientation("portrait")}>📱 Portrait</button>
        <button onClick={() => setOrientation("square")}>🔲 Square</button>
      </div>

      <div className="gallery">
        {photos.map((photo) => (
          <MediaItem key={photo.id} item={photo} />
        ))}
      </div>
    </div>
  );
};

export default MediaGrid;