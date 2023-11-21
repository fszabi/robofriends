import { withErrorBoundary, useErrorBoundary } from "react-use-error-boundary";

import Card from "./Card.jsx";

const CardList = withErrorBoundary(({ robots }) => {
  const [error, resetError] = useErrorBoundary();

  return error ? (
    <>
      <div className="space-y-10">
        <h1 className="font-mono text-[#0ccac4] text-6xl font-bold uppercase">
          {error.message}
        </h1>
        <button
          onClick={resetError}
          className="border-[#0ccac4] rounded-md px-6 py-2 border-4 font-mono text-[#0ccac4] text-6xl font-bold uppercase"
        >
          Try Again
        </button>
      </div>
    </>
  ) : (
    <>
      <div className="grid place-content-center grid-cols-[repeat(auto-fit,_minmax(15rem,_1fr))] md:grid-cols-[repeat(auto-fit,_minmax(15rem,_20rem))] gap-5">
        {robots.map((robot, i) => {
          return (
            <Card
              key={i}
              id={robots[i].id}
              name={robots[i].name}
              email={robots[i].email}
            />
          );
        })}
      </div>
    </>
  );
});

export default CardList;
