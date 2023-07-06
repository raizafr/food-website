import { useContext } from "react";
import { SearchContext } from "../context/SearchContext";
import { AiOutlineArrowDown } from "react-icons/ai";
const Header = () => {
  const { search, setSearch } = useContext(SearchContext);
  const handleChange = (e) => {
    e.preventDefault();
    const value = e.target.value.toLowerCase();
    setSearch(value);
  };

  const handleClick = () => {
    const targetElement = document.getElementById("targetElement");
    targetElement.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header className="bg-header w-full h-screen bg-cover flex justify-center items-center">
      <div className="flex flex-col gap-4 lg:-mt-24 -mt-36">
        <h1 className="text-white md:text-6xl text-4xl font-bold">
          Find a Recipe here
        </h1>
        <div>
          <input
            value={search}
            onChange={handleChange}
            type="text"
            className="text-black focus:outline-none w-full px-5 py-2 rounded-xl"
            placeholder="Search Recipe"
          />
        </div>
        <div className="flex justify-center animate-bounce">
          <AiOutlineArrowDown
            className="text-white scale-[2] cursor-pointer hover:translate-y-2 duration-300 hover:scale-[2.1]"
            onClick={handleClick}
          />
        </div>
      </div>
    </header>
  );
};

export default Header;
