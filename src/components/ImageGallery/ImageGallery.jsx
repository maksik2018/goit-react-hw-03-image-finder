import React from "react";
import PropTypes from "prop-types";
import ImageGalleryItem from "../ImageGalleryItem/ImageGalleryItem";

export default function ImageGallery({ gallery, onClick }) {
  return (
    <ul className="ImageGallery">
      {gallery.map(({ id, webformatURL, largeImageURL, tags }) => (
        <ImageGalleryItem
          key={id}
          webformatURL={webformatURL}
          largeImageURL={largeImageURL}
          tags={tags}
          onClick={onClick}
        />
      ))}
    </ul>
  );
}
ImageGallery.propTypes = {
  images: PropTypes.array,
  onClick: PropTypes.func,
};
