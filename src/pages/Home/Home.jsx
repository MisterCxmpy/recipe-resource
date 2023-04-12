import React, { useState, useEffect, useRef } from "react";
import styles from "./index.module.css";
import Section from "../../components/Section/Section";
import ShowcaseImage from "../../components/ShowcaseImage/ShowcaseImage";

export default function Home() {
  const [slideIndex, setSlideIndex] = useState(0);
  const [recipes, setRecipes] = useState([]);

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

  async function getData() {
    const response = await fetch("https://localhost:8080/recipe/popular");

    const data = await response.json();

    setRecipes(data);
  }

  useEffect(() => {
    getData();
  });

  return (
    <div className={styles.home}>
      <Section heading="Popular Recipes" />
      <div className={styles.showcase}>
        <div className={styles["carousel-container"]}>
          <div className={styles["carousel-slide"]} ref={carouselRef}>
            {recipes.map((recipe) => {
              return (
                <ShowcaseImage
                  image={recipe.recipe_image}
                  tags={[...recipe.tags]}
                  title={recipe.recipe_name}
                  date={recipe.date}
                  comments={`Comments: ${recipe.comments}`}
                  likes={`Likes: ${recipe.likes}`}
                  desc={recipe.description}
                  publisher={recipe.author}
                />
              );
            })}
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
      <div className={styles.categories}></div>
    </div>
  );
}
