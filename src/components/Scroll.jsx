export default function Scroll({ children }) {
  return (
    <>
      <div className="overflow-y-scroll border-8 border-black rounded-lg h-[70vh] p-5">
        {children}
      </div>
    </>
  );
}
