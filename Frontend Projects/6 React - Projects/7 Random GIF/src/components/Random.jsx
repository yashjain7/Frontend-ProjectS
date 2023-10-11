import React from "react";
import useGif from "../hooks/useGif";
import Spinner from "./Spinner";


const Random = () => {
  // const [gif, setGif] = useState("");
  // const [loading, setLoading] = useState(false);

  // async function fetchData() {
  //   setLoading(true)
  //   const url = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`;

  //   const { data } = await axios.get(url);
  //   const imageSource = data.data.images.downsized_large.url;
  //   setGif(imageSource);
  //   console.log(imageSource);
  //   setLoading(false);
  // }

  // useEffect(() => {
  //   fetchData();
  // }, []);

  const { gif, loading, fetchData } = useGif();

  return (
    <div className="w-1/2  bg-green-500 rounded-lg border border-black 
    flex flex-col items-center gap-y-5 mt-[15px]">

      <h1 className="mt-[15px] text-2xl uppercase underline font-bold">A Random Gif</h1>

      {
        loading ? <Spinner /> : <img src={gif} width="450" alt="pic" />
      }


      <button
        onClick={() => fetchData()}
        className="w-10/12 bg-white text-lg py-2 rounded-lg mb-[20px] font-bold">

        Generate

      </button>
    </div>
  )
}

export default Random;
