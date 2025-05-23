import css from './SearchBox.module.css';

export default function SearchBox({ value, onChange }) {
  const handleChange = (event) => {
    onChange(event.target.value);
  };

  return (
    <div className={css.search_box}>
      <span>Find contacts by name</span>
      <input
        className={css.input_search}
        type="text"
        value={value}
        onChange={handleChange}
      />
    </div>
  );
}
