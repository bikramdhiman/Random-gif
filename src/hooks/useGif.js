import { useEffect, useState } from "react";
import axios from "axios";

const url = `https://api.giphy.com/v1/gifs/random?api_key=fLcT9kKtXg2aY3v9ToLuHs38ZkOShGsD`;
const useGif = () => {
  const [gif, setgif] = useState("");
  const [loading, setLoading] = useState("false");

  async function fetchdata(tag) {
    setLoading(true);
    const { data } = await axios.get(tag ? `${url}&tag=${tag}` : url);
    const imagesource = data.data.images.downsized_large.url;
    setgif(imagesource);
    setLoading(false);
  }
  useEffect(() => {
    fetchdata("car");
  }, []);
  return { gif, loading, fetchdata };
};

export default useGif;
