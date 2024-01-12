import { Link } from "react-router-dom";

interface Props {
  title: string;
}

export const Header = ({ title }: Props) => {
  return (
    <div className="max-w-xs md:max-w-md pb-8 flex px-4 space-x-4 items-center">
      <Link to={"/"}>
        <svg
          className="w-6 h-6 text-gray-800 dark:text-white"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 14 10"
        >
          <path
            stroke="#ffe81f"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M13 5H1m0 0 4 4M1 5l4-4"
          />
        </svg>
      </Link>
      <h2 className="text-2xl font-bold  truncate  text-shadow-sw text-center">
        {title}
      </h2>
    </div>
  );
};
