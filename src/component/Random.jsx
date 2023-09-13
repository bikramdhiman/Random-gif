import useGif from "../hooks/useGif";
import Spinner from "./Spinner";

const Random = () => {
  const { gif, loading, fetchdata } = useGif();

  function clickhandler() {
    fetchdata();
  }
  return (
    <div
      className="lg:w-1/2 w-full bg-blue-500 rounded-xl border border-black
    flex flex-col items-center gap-y-5 mt-[15px]"
    >
      <div>
        <h1 className="mt-[15px] text-xl md:text-2xl  underline uppercase font-bold">
          A Random gif
        </h1>
        {loading ? <Spinner /> : <img src={gif} alt="gif" />}
        <button
          onClick={clickhandler}
          className="w-11/12 bg-yellow-500 text-lg py-2 roundd-lg mb-[20px] uppercase font-medium tracking-wide
          "
        >
          Generate
        </button>
      </div>
    </div>
  );
};

export default Random;
