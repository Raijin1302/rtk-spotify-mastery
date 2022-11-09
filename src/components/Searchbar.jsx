import { useNavigate } from "react-router-dom";
import { FiSearch } from "react-icons/fi";

const Searchbar = () => (
  <form
    autoComplete="off"
    className="p-2 text-gray-400 focus-within:text-gray-600"
    action=""
  >
    <label htmlFor="search-field" className="sr-only">
      Search all songs
    </label>
    <div className="flex flex-row justify-start items-center">
      <FiSearch className="w-5 h-5 ml-4" />
      <input
        name="search-field"
        autoComplete="off"
        id="search-field"
        type="search"
        value=""
        placeholder="Search"
        onChange={() => {}}
        className="flex-1 bg-transparent border-none placeholder-gray-500 outline-none text-base text-white p-4"
      />
    </div>
  </form>
);

export default Searchbar;
