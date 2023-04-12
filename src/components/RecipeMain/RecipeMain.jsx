import React from "react";
import styles from "../../pages/Home/index.module.css"

export default function RecipeMain({ title, date, comments, likes, desc, publisher}) {
  return (
    <>
      <h1 className={styles["recipe-title"]}>{title}</h1>
      <div className={styles["recipe-stats"]}>
        <span>{date}</span>
        <span>{comments}</span>
        <span>{likes}</span>
      </div>
      <p className={styles["recipe-description"]}>
        {desc}
      </p>
      <p className={styles["recipe-publisher"]}>Published by: {publisher}</p>
    </>
  );
}
