import GalleryItem from 'components/GalleryItem/GalleryItem';
import { List } from './Gallery.styled';
import PropTypes from 'prop-types';
const Gallery = ({ res, imageHandler }) => {
  return (
    <div className="container">
      <List>
        {res.map((image, id) => {
          return (
            <GalleryItem
              key={`${image.id}-${id}`}
              data={image}
              imageHandler={imageHandler}
            />
          );
        })}
      </List>
    </div>
  );
};
Gallery.propTypes = {
  res: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      previewURL: PropTypes.string.isRequired,
      tags: PropTypes.arrayOf(PropTypes.string).isRequired,
      largeImageURL: PropTypes.string.isRequired,
    })
  ).isRequired,
  imageHandler: PropTypes.func.isRequired,
};
export default Gallery;
