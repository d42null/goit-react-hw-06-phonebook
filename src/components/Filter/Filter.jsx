import { Label } from 'components/ContactForm/ContactForm.styled';
import { useDispatch } from 'react-redux';
import { setFilter } from '../../redux/store';
export const Filter = () => {
  // const filter = useSelector(getFilter);
  const dispatch = useDispatch();
  const onFilterChange = e => {
    console.log(e.target.value);
    dispatch(setFilter(e.target.value.toLowerCase()));
  };
  return (
    <Label>
      Find contacts by name
      <input
        name="filter"
        // value={filter}
        type="text"
        onChange={onFilterChange}
      />
    </Label>
  );
};
