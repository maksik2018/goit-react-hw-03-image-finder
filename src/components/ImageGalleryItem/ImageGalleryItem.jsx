import React from "react";
import PropTypes from "prop-types";

function ImageGalleryItem({ largeImageURL, webformatURL, onClick }) {
  return (
    <li className="ImageGalleryItem">
      <img
        data-large={largeImageURL}
        onClick={onClick}
        src={webformatURL}
        alt=""
        className="ImageGalleryItem-image"
      />
    </li>
  );
}

ImageGalleryItem.propTypes = {
  largeImageURL: PropTypes.string.isRequired,
  tags: PropTypes.string.isRequired,
  webformatURL: PropTypes.string.isRequired,
};

export default ImageGalleryItem;


