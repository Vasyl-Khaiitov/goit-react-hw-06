import Contact from '../Contact/Contact';
import css from './ContactList.module.css';

export default function ContactList({ contactItem, onDelete }) {
  return (
    <ul className={css.contact_list}>
      {contactItem.map(({ id, name, number }) => (
        <li className={css.contact_list_item} key={id}>
          <Contact name={name} number={number} id={id} onDelete={onDelete} />
        </li>
      ))}
    </ul>
  );
}
