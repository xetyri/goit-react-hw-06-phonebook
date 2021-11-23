import s from './Filter.module.css'
import { getFilter} from "../../redux/selector";
import { useDispatch,useSelector } from "react-redux";
import action from '../../redux/action'

export default function Filter() {
  const filter = useSelector(getFilter);
  const dispatch = useDispatch();
  return (
    <label className={s.elem}>
      Find contacts by name
      <input
        type="text"
        name="filter"
        className={s.input}
        value={filter}
        onChange={event => dispatch(action.changeFilter(event.target.value))}
        placeholder="Enter name "
      />
    </label>
  );
}

