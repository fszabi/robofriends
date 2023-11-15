export default function SearchBox({ searchChange }) {
  return (
    <>
      <input
        className="px-5 py-3 bg-blue-100 border-[3px] rounded-md border-blue-500
        transition-transform duration-300 placeholder:text-lg hover:scale-105 focus:scale-105 focus:outline-none"
        type="search"
        placeholder="Search robots"
        onChange={searchChange}
      />
    </>
  );
}
