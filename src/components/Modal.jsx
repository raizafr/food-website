import { GrClose } from "react-icons/gr";

const Modal = ({ data, close }) => {
  return (
    <>
      <div className="fixed left-0 top-0 flex h-full w-full items-center justify-center bg-black bg-opacity-50 py-10 z-10">
        <div className="max-h-full w-full max-w-xl overflow-y-auto sm:rounded-2xl bg-white">
          <div className="flex justify-center cursor-pointer" onClick={close}>
            <GrClose className="text-center scale-150 mt-5 hover:-translate-y-1 duration-300 hover:scale-[1.7]" />
          </div>
          <div className="w-full">
            <div className="m-8 my-4 max-w-[400px] mx-auto">
              <div className="mb-8">
                <h1 className="mb-4 text-3xl font-extrabold text-center">
                  {data.strMeal}
                </h1>
                <img src={data.strMealThumb} alt="" />
              </div>
              <div className="space-y-4 flex flex-col justify-center text-center">
                <a
                  href={data.strSource}
                  target="blank"
                  className="p-3 bg-black rounded-full text-white w-full font-semibold hover:bg-gray-800"
                >
                  Click to See Recipe on Website
                </a>
                <a
                  href={data.strYoutube}
                  target="blank"
                  className="p-3 bg-black rounded-full text-white w-full font-semibold hover:bg-gray-800"
                >
                  Click to See Youtube Tutorials
                </a>
                <p>{data.strInstructions}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Modal;
