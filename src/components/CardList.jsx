import Card from "./Card.jsx";

export default function CardList({ robots }) {
  return (
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
}
