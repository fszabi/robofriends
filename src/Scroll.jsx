export default function Scroll(props) {
  return (
    <>
      <div className="overflow-y-scroll border-8 border-black rounded-lg h-[70vh] p-5">
        {props.children}
      </div>
    </>
  );
}
