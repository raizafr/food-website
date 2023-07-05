const Card = ({ data }) => {
  return (
    <>
      <div
        className="sm:w-[350px] sm:h-[440px] w-[320px] h-[410px] bg-[#B6B3A8] bg-opacity-50 rounded-lg hover:-translate-y-2 duration-300 cursor-pointer"
        // onClick={() => handleClick(data)}
      >
        <div>
          <img
            src={data.strMealThumb}
            alt=""
            className="bg-[#f0e9ce] rounded-t-lg"
          />

          <div className="text-center font-semibold text-2xl py-2">
            {data.strMeal}
          </div>
          <ul className="text-center">
            <li className="text-sm text-orange-600 font-semibold">
              {data.strCategory}
            </li>
            <li className="text-xs opacity-50">{data.strArea}</li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Card;
