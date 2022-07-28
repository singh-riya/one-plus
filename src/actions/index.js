const setImages = (images) => ({
  type: "SET_IMAGES",
  payload: images,
});

export const fetchImages = () => (dispatch) =>
  fetch("https://jsonplaceholder.typicode.com/albums/1/photos")
    .then((response) => response.json())
    .then((json) => dispatch(setImages(json.slice(0, 6))));
