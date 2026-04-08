import { BG_URL } from "../utils/constants";
import GptMovieSuggetions from "./GptMovieSuggetions";
import GptSearchBar from "./GptSearchBar";

const GptSearch = () => {
  return (
    <div>
      <div className="absolute -z-10">
        <img alt="netflix-bg-image" src={BG_URL} />
      </div>
      <GptSearchBar />
      <GptMovieSuggetions />
    </div>
  );
};

export default GptSearch;
