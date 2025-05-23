import css from './Contact.module.css';
import { FaPhone } from 'react-icons/fa6';
import { MdPerson4 } from 'react-icons/md';
import { useDispatch } from 'react-redux';
import { deleteContact } from '../../redux/contactsSlice';

export default function Contact({ name, number, id }) {
  const dispatch = useDispatch();

  const handleClickDelete = () => {
    dispatch(deleteContact(id));
  };

  return (
    <>
      <ul>
        <li>
          <MdPerson4 size={20} />
          {name}
        </li>
        <li>
          <FaPhone size={15} />
          {number}
        </li>
      </ul>
      <button
        className={css.delete_btn}
        type="button"
        id={id}
        onClick={handleClickDelete}
      >
        Delete
      </button>
    </>
  );
}
