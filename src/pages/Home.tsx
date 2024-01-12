import { Card } from "../components/Card";
import { objects } from "../api/homeObjects";

export const Home = () => {
  return (
    <div className="max-w-xl mx-auto">
      <div className="mt-10">
        <h1 className="text-2xl sm:text-6xl font-bold text-center truncate  text-shadow-sw">
          Star Wars Dex
        </h1>
      </div>
      <section className="bg-gray-2 pb-8 pt-16 dark:bg-dark lg:pb-20 lg:pt-[120px]">
        <div className="container">
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-2">
            {objects.map((object, index) => (
              <Card object={object} key={index} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};
