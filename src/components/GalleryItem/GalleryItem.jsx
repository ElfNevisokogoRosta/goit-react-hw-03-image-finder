import { Img, ListElement } from './GalleyItem.styled';
import PropTypes from 'prop-types';
const GalleryItem = ({ data, imageHandler }) => {
  const { id, previewURL, largeImageURL, tags } = data;
  return (
    <ListElement
      key={id}
      onClick={() => {
        imageHandler(largeImageURL, tags);
      }}
    >
      <Img src={previewURL} alt={tags} loading="lazy" />
    </ListElement>
  );
};
GalleryItem.propTypes = {
  data: PropTypes.shape({
    id: PropTypes.string.isRequired,
    previewURL: PropTypes.string.isRequired,
    largeImageURL: PropTypes.string.isRequired,
    tags: PropTypes.arrayOf(PropTypes.string).isRequired,
  }).isRequired,
  imageHandler: PropTypes.func.isRequired,
};
export default GalleryItem;
