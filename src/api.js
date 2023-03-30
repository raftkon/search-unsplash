import axios from "axios";

const searchImages = async (searchTerm) => {
  console.log(searchTerm);
  const response = await axios.get("https://api.unsplash.com/search/photos", {
    headers: {
      Authorization: `Client-ID ${process.env.REACT_APP_UNSPLASH_ACCESS_KEY}`,
    },
    params: {
      query: searchTerm,
    },
  });

  return response && response.data.results;
};

export default searchImages;

// hello from the other side
