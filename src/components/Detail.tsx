interface Props {
  name: string;
  title: string;
}

export const Detail = ({ name, title }: Props) => {
  return (
    <div className="border-4 border-sw-yellow rounded-2xl py-20 px-4 fade-in ">
      {name ? (
        <h2 className="text-xl font-bold truncate text-center text-shadow-sw py-4">
          {name.toLowerCase()}
        </h2>
      ) : (
        <h2 className="text-xl font-bold truncate text-center text-shadow-sw py-4">
          {title.toLowerCase()}
        </h2>
      )}
      <img
        className="sm:w-80 rounded-2xl mx-auto"
        src="https://placehold.co/600x400"
        alt="img-placeholder"
      />

      <p className="text-xl font-bold truncate px-6 text-shadow-sw py-4">
        Description:
      </p>

      <p className="text-sm px-6 text-shadow-sw py-4">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aspernatur ad
        facilis architecto labore velit culpa, quos nobis libero laboriosam
        delectus natus quaerat, voluptate deserunt? Veritatis aperiam doloribus
        facere vitae delectus.
      </p>
    </div>
  );
};
