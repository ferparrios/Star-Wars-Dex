import { useEffect, useState } from "react";
import { getData } from "../api/mainApi";
import { ItemList } from "../components/ItemList";
import { useParams } from "react-router-dom";
import { Loading } from "../components/Loading";
import { Header } from "../components/Header";

export const ListPage = () => {
  const [isLoading, setIsLoading] = useState(true);
  const { id } = useParams();
  // console.log("id: ", id);
  const [data, setData] = useState<[]>([]);
  useEffect(() => {
    const loadData = async () => {
      const res = await getData(id);
      setData(res.data.results);
      // console.log(res.data.results)
      setIsLoading(false);
    };
    loadData();
  }, []);

  if (isLoading) {
    return <Loading />;
  }

  return (
    <section className="bg-gray-2 pb-8 pt-16 px-4 sm:px-2 dark:bg-dark lg:pb-20 lg:pt-[120px]">
      <Header title={id!} />
      <div className="container">
        <div className="grid gap-8 sm:grid-cols-1 lg:grid-cols-1">
          {data.map((item, index) => (
            <ItemList object={item} key={index} />
          ))}
        </div>
      </div>
    </section>
  );
};
