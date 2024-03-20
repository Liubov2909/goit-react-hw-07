import css from "./Contact.module.css";
import { FaUser } from "react-icons/fa";
import { FaPhone } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { deleteContact } from "../../redux/contactsSlice";

export default function Contact({ item }) {
  const dispatch = useDispatch();
  const { id, name, number } = item;

  function handleClick() {
    dispatch(deleteContact(id));
  }

  return (
    <div className={css.container}>
      <ul className={css.text}>
        <li className={css.list}>
          <FaUser height={10} width={10} />
          {name}
        </li>
        <li className={css.list}>
          <FaPhone height={10} width={10} />
          {number}
        </li>
      </ul>
      <button className={css.btn} type="button" onClick={handleClick}>
        Delete
      </button>
    </div>
  );
}
