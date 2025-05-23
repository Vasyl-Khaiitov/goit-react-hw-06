import { useDebounce } from 'use-debounce';
import Contact from '../Contact/Contact';
import css from './ContactList.module.css';
import { useSelector } from 'react-redux';

export default function ContactList() {
  const contacts = useSelector((state) => state.contacts.items);
  const filter = useSelector((state) => state.filters.name);

  const [debouncedFilter] = useDebounce(filter, 400);

  const filteredContacts = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(debouncedFilter.toLowerCase()),
  );

  return (
    <ul className={css.contact_list}>
      {filteredContacts.map(({ id, name, number }) => (
        <li className={css.contact_list_item} key={id}>
          <Contact name={name} number={number} id={id} />
        </li>
      ))}
    </ul>
  );
}
