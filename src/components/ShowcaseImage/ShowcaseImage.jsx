import React from "react";
import RecipeTags from "../RecipeTags/RecipeTags"
import RecipeMain from "../RecipeMain/RecipeMain"
import RecipeOptions from "../RecipeOptions/RecipeOptions"
import styles from "../../pages/Home/index.module.css";

export default function ShowcaseImage({ image, tags, title, date, comments, likes, desc, publisher}) {
  return (
    <div className={styles["showcase-image"]}>
      <img src={image} />
      <div className={styles["recipe-info"]}>
        <RecipeTags tags={tags} />
        <RecipeMain
          title={title}
          date={date}
          comments={comments}
          likes={likes}
          desc={desc}
          publisher={publisher}
        />
        <RecipeOptions />
      </div>
    </div>
  );
}
