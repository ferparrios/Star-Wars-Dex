import { Link } from "react-router-dom";
import { SimpleObject } from "../interfaces/SwInterfaces";

interface Props {
  object: SimpleObject;
}

export const Card = ({ object }: Props) => {
  return (
    <div className="mb-10 mx-4 overflow-hidden rounded-lg bg-transparent shadow-1 duration-300 hover:shadow-3 dark:bg-dark-2 dark:shadow-card dark:hover:shadow-3">
      <img src={object.img} alt="card-image" className="w-full h-52" />
      <div className="text-center">
        <h3>
          <Link
            className="mb-2 block text-xl font-semibold text-dark hover:text-primary text-shadow-sw sm:text-[22px] md:text-xl lg:text-[22px] xl:text-xl 2xl:text-[22px] cursor-pointer"
            to={`${object.name}`}
          >
            {object.name}
          </Link>
        </h3>
      </div>
    </div>
  );
};
