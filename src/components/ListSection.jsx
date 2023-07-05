import { useContext, useEffect, useState } from "react";
import Card from "./Card";
import axios from "axios";
import { SearchContext } from "../context/SearchContext";

const ListSection = () => {
  const { search } = useContext(SearchContext);
  const [datas, setDatas] = useState([]);
  useEffect(() => {
    const getData = async () => {
      try {
        const res = await axios.get(
          `${import.meta.env.VITE_APP_API_BASEURL}/search.php?s=${search}`
        );
        setDatas(res.data.meals);
      } catch (err) {
        console.log(err);
      }
    };
    getData();
  }, [setDatas, search]);
  console.log(datas);
  return (
    <section className=" bg-amber-100 py-7">
      <div>
        <h1 className="text-4xl font-bold ml-6">Food</h1>
        {datas ? (
          <div className="mt-6 grid lg:grid-cols-3 md:grid-cols-2 justify-items-center lg:gap-9 md:gap-5 gap-6">
            {datas.map((data) => {
              return <Card key={data.idMeal} data={data} />;
            })}
          </div>
        ) : (
          ""
        )}
      </div>
    </section>
  );
};

export default ListSection;
