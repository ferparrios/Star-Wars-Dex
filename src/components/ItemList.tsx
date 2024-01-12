import { useState } from "react";
import { FilmsResult, PeopleResult } from "../interfaces/SwInterfaces";
import { Detail } from "./Detail";

interface Props {
  object: PeopleResult & FilmsResult;
}
export const ItemList = ({ object }: Props) => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <ul className="max-w-xs md:max-w-md divide-y divide-gray-200 dark:divide-gray-700">
        <li className="pb-3 sm:pb-4">
          <div className="flex items-center space-x-4 rtl:space-x-reverse">
            <div className="flex-shrink-0">
              <img
                className="w-10 h-10 rounded-full"
                src="https://placehold.co/600x600"
                alt="Avatar image"
              />
            </div>
            <div className="flex-1 min-w-0">
              {object.name ? (
                <p className="text-xl font-bold  truncate  text-shadow-sw">
                  {object.name.toLowerCase()}
                </p>
              ) : (
                <p className="text-xl font-bold  truncate  text-shadow-sw">
                  {object.title.toLowerCase()}
                </p>
              )}
            </div>
            <div
              className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white"
              onClick={() => setOpen(!open)}
            >
              {!open ? (
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
                    d="M1 5h12m0 0L9 1m4 4L9 9"
                  />
                </svg>
              ) : (
                <svg
                  className="w-6 h-6 text-gray-800 dark:text-white"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 10 14"
                >
                  <path
                    stroke="#ffe81f"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M5 1v12m0 0 4-4m-4 4L1 9"
                  />
                </svg>
              )}
            </div>
          </div>
        </li>
      </ul>

      {open && <Detail name={object.name} title={object.title} />}
    </>
  );
};
