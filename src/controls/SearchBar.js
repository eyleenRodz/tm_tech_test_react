function SearchBar({
  className="",
  onSearch=(txt) => {}
}) {
  return ( 
    <form action="/" className={className+" search"}>
      <img className="search--image" src="/search.svg"/>
      <input name="query" className="search--input" />
    </form> 
  );
}

export default SearchBar;