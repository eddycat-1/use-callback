import { useCallback } from "react";
import styles from "./Card.module.css";

const Card = ({ children, handleClick }) => {
  const badCallback = useCallback(
    (e) => {
      e.preventDefault();
      const newDetails = { name: "card3", value: "value3" };
      handleClick(newDetails);
    },
    [children]
  );

  return (
    <div className={styles.card}>
      {children}
      <button onClick={(e) => badCallback(e)}>Add Card</button>
    </div>
  );
};

export default Card;
