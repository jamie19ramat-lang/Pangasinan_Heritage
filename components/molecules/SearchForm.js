import Button from "../atoms/Button";
import Icon from "../atoms/Icon";

export default function SearchForm() {
  return (
    <form className="search-panel" action="#heritage">
      <div className="search-input-wrap">
        <Icon name="search" label="Search" />
        <label htmlFor="heritage-search" className="sr-only">Search heritage sites</label>
        <input
          id="heritage-search"
          className="search-input"
          type="search"
          placeholder="Search Pangasinan heritage sites..."
        />
      </div>
      <Button href="#heritage">Explore Sites</Button>
    </form>
  );
}