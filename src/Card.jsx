function Card({ id, name, email }) {
  return (
    <>
      <div
        className="text-center cursor-pointer space-y-5 bg-teal-400 rounded-md
       shadow-[0_5px_15px_rgba(0,0,0,0.35)] p-5 hover:scale-105 
       transition-transform duration-300 active:scale-[0.98]"
      >
        <img
          src={`https://robohash.org/${id}?size=200x200`}
          alt="robot photo"
        />
        <div className="space-y-1">
          <h2 className="text-xl font-bold">{name}</h2>
          <p className="text-sm">{email}</p>
        </div>
      </div>
    </>
  );
}

export default Card;
