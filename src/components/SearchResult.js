import "./SearchResult.css";

function SearchResult ({ result }) {
  return (
    <div
      className="searchResultContainer"
      onClick={(e) => console.log(`You selected ${result}!`)}
    >
      {result}
    </div>
  );
}

export default SearchResult