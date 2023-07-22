import axios from 'axios';
export default async function fetchImage(searchQuery, pageNumber) {
  if (searchQuery === '') {
    return;
  }
  const response = await axios({
    method: 'GET',
    url: 'https://pixabay.com/api/',
    params: {
      q: searchQuery,
      key: '28352970-95939234ba7a7257c292bac13',
      page: pageNumber,
      per_page: '12',
      orientation: 'horizontal',
      image_type: 'photo',
    },
  });
  const hits = response.data.hits.map(image => {
    return {
      id: image.id,
      largeImageURL: image.largeImageURL,
      previewURL: image.webformatURL,
      tags: image.tags,
    };
  });
  const responceObj = {
    total: response.data.totalHits,
    hits: hits,
  };
  return responceObj;
}
