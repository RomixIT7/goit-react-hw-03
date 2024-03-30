import css from "./Contact.module.css";
import { FaUserLarge } from "react-icons/fa6";
import { FaPhoneAlt } from "react-icons/fa";

const Contact = ({ contact: { id, name, number }, deleteContact }) => {
  return (
    <li className={css.listItem}>
      <div>
        <p className={css.info}>
          <FaUserLarge />
          {name}
        </p>
        <p className={css.info}>
          <FaPhoneAlt />
          {number}
        </p>
      </div>
      <button
        className={css.deleteBtn}
        type="button"
        onClick={() => deleteContact(id)}
      >
        Delete
      </button>
    </li>
  );
};

export default Contact;
