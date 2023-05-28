import "./SearchResultList.css";
import SearchResult from "./SearchResult";

function SearchResultList  ({ results }) {
  return (
    <div className="resultListContainer">
      {results.map((result, id) => {
        return <SearchResult result={result.name} key={id} />;
      })}
    </div>
  );
};

export default SearchResultList