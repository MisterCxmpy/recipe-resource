import React from "react";
import styles from "../../pages/Home/index.module.css"

export default function RecipeOptions() {
  return (
    <div className={styles["recipe-options"]}>
      <button>Save Recipe</button>
      <button>View Recipe</button>
    </div>
  );
}
