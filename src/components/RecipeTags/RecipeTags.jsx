import React from 'react'
import styles from "../../pages/Home/index.module.css"

export default function RecipeTags({ tags}) {
  return (
    <div className={styles["recipe-tags"]}>
      {tags.map((tag) => (
        <span key={tag} className={styles["tag"]}>
          {tag}
        </span>
      ))}
    </div>
  );
}
