function Search() {
  return (
    <div className="w-full flex gap-8 justify-between px-4 bg-background-search rounded-2xl h-16 items-center text-white text-base backdrop-blur-sm">
      <div className="flex place-content-center">
        <img className="w-5 h-5 mr-2" src="assets/icon-search.svg" alt="" />
        <input
          className="
          border-none
          bg-transparent
          outline-none
          w-80
          "
          type="search"
          placeholder="Search destinations, hotels"
        />
      </div>
      <div className="flex">
        <div className="flex">
          <img className="mr-2" src="./assets/calendar.svg" alt="" />
          <input
            className="border-none outline-none bg-transparent appearance-none"
            type="date"
            name="Check in"
            id=""
          />
        </div>
        <div className="flex">
          <img className="mr-2" src="./assets/calendar.svg" alt="" />
          <input
            className="
          border-none 
          outline-none 
          bg-transparent 
          appearance-none "
            type="date"
            name="Check out"
          />
        </div>
      </div>
      <div className="flex">
        <img className="mr-2" src="./assets/person.svg" alt="" />

        <div className="flex">1 room, 2 adults</div>
      </div>
      <button className="bg-white rounded-[32px] w-36 h-8 text-indigo-600 font-bold">
        Search
      </button>
    </div>
  );
}

export default Search;
