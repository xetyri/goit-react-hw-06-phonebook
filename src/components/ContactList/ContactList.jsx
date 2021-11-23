import s from './ContactList.module.css'
import { useSelector, useDispatch } from 'react-redux';
import action from '../../redux/action'
import { getVisibleContacts } from '../../redux/selector';

export default function ContactList() {
  const dispatch = useDispatch();
  const visibleContact = useSelector(getVisibleContacts);
  return (
  <ul className={s.list}>
      {visibleContact.map(({id,name,number }) => (
        <li className={s.elem} key={id}>
          <div className={s.title}>{`${name}: ${number}`}</div>
          <button
            className={s.button}
            type="button"
            onClick={() => dispatch(action.deleteContact(id))}
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
}