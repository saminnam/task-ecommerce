import "./FilterBar.css";

const FilterBar = ({
  setCategory,
  setPriceRange,
  setSortOrder,
  priceRange,
}) => {
  const handlePriceChange = (e) => {
    setPriceRange(e.target.value);
  };

  return (
    <div className="filter-bar">
      <h2>Filters</h2>
      <select onChange={(e) => setCategory(e.target.value)}>
        <option value="">All Category</option>
        <option value="groceries">Groceries</option>
        <option value="furniture">Furniture</option>
        <option value="fragrances">Fragrances</option>
        <option value="beauty">Beauty</option>
      </select>
      <div className="price-range">
        <input
          type="range"
          min="0"
          max="500"
          step="10"
          onChange={handlePriceChange}
          value={priceRange}
        />
        <label>Price Range: ${priceRange} - $500</label>
      </div>
      <select onChange={(e) => setSortOrder(e.target.value)}>
        <option value="low-to-high">Price: Low to High</option>
        <option value="high-to-low">Price: High to Low</option>
      </select>
    </div>
  );
};

export default FilterBar;
