import React, { useState, useEffect, useRef } from "react";
import styles from "./index.module.css";
import Section from "../../components/Section/Section";
import RecipeTags from "../../components/RecipeTags/RecipeTags";
import RecipeMain from "../../components/RecipeMain.jsx/RecipeMain";
import RecipeOptions from "../../components/RecipeOptions.jsx/RecipeOptions";

export default function Home() {
  const [slideIndex, setSlideIndex] = useState(0);

  const carouselRef = useRef();

  useEffect(() => {
    const carousel = carouselRef.current;
    if (carousel) {
      carousel.style.transform = `translateX(-${slideIndex * 20}%)`;
    }
  }, [slideIndex]);

  function nextSlide() {
    if (slideIndex === 4) {
      setSlideIndex(0);
    } else {
      setSlideIndex(slideIndex + 1);
    }
  }

  function prevSlide() {
    if (slideIndex === 0) {
      setSlideIndex(4);
    } else {
      setSlideIndex(slideIndex - 1);
    }
  }

  return (
    <div className={styles.home}>
      <Section heading="Popular Recipes" />
      <div className={styles.showcase}>
        <div className={styles["carousel-container"]}>
          <div className={styles["carousel-slide"]} ref={carouselRef}>
            <div className={styles["showcase-image"]}>
              <img
                src="https://images.unsplash.com/photo-1555939594-58d7cb561ad1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
              ></img>
              <div className={styles["recipe-info"]}>
                <RecipeTags tags={["Tag 1", "Tag 2", "Tag 3"]} />
                <RecipeMain
                  title="This is the title"
                  date="Date created"
                  comments="Comments"
                  likes="5"
                  desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt velit voluptate illum vel corporis blanditiis excepturi, mollitia dolor enim amet impedit unde, nam repudiandae aliquam eveniet natus asperiores! Ut, ratione!"
                  publisher="admin"
                />
                <RecipeOptions />
              </div>
            </div>
          </div>
        </div>
        <a className={styles.prev} onClick={prevSlide}>
          &#10094;
        </a>
        <a className={styles.next} onClick={nextSlide}>
          &#10095;
        </a>
      </div>
      <Section heading="Categories" />
      <div className={styles.categories}>

      </div>
    </div>
  );
}
