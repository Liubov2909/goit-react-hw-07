import css from "./ErrorMessage.module.css";

export default function ErrorMessage({ error }) {
  return <p className={css.error}>{error}</p>;
}
