import css from './SearchBox.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { changeFilter } from '../../redux/filtersSlice';

export default function SearchBox() {
  const dispatch = useDispatch();
  const filterValue = useSelector((state) => state.filters.name);

  const handleChange = (event) => {
    dispatch(changeFilter(event.target.value));
  };

  return (
    <div className={css.search_box}>
      <span>Find contacts by name</span>
      <input
        className={css.input_search}
        type="text"
        value={filterValue}
        onChange={handleChange}
      />
    </div>
  );
}
