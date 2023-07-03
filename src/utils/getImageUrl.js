const getImageUrl = (imageUrl) =>
  `${process.env.REACT_APP_API_URL}/${imageUrl}`;

export default getImageUrl;
