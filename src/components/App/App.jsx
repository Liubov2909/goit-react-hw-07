import { useEffect } from "react";
import ContactForm from "../ContactForm/ContactForm";
import ContactList from "../ContactList/ContactList";
import SearchBox from "../SearchBox/SearchBox";
import css from "./App.module.css";
import { useDispatch, useSelector } from "react-redux";
import { fetchContacts } from "../../redux/contactsOps";
import ErrorMessage from "../ErrorMessage/ErrorMessage";
import Loading from "../Loading/Loading";

export default function App() {
  const dispatch = useDispatch();
  const loading = useSelector((state) => state.contacts.loading);
  const error = useSelector((state) => state.contacts.error);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div className={css.box}>
      <h1>Phonebook</h1>
      <ContactForm />
      <SearchBox />
      {loading && <Loading>Loading contacts...</Loading>}
      {error && <ErrorMessage>Error fetching contacts!</ErrorMessage>}
      <ContactList />
    </div>
  );
}
