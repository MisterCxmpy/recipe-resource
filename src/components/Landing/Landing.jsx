import React from "react";
import Section from "../Section/Section";
import { NavLink } from "react-router-dom";
import "./Landing.css";

export default function Landing() {
  return (
    <div className="landing">
      <div className="container">
        <div className="info">
          <h1>
            Welcome to Recipe Resource! Discover delicious recipes from around
            the world and unleash your inner chef.
          </h1>
          <p>Join us in the kitchen. Let's cook up something amazing!</p>
          <NavLink className="btn" to="/signup">Get Started!</NavLink>
        </div>
        <div class="img background-img"></div>
      </div>
      <div className="sections">
        <Section
          heading={"Discover More About Recipe Resource"}
          title={["Cooking Tips", "Dietary Information", "Community"]}
          message={[
            "Our team of experienced chefs has curated a collection of cooking tips and tricks to help you become a better cook. From knife skills to cooking techniques, we've got you covered. Plus, our tips are designed to be easy to follow, even if you're a beginner in the kitchen.",
            "At Recipe Resource, we believe that everyone should have access to delicious food, no matter their dietary restrictions. That's why we've made it a priority to include recipes for every diet, including vegetarian, vegan, gluten-free, and more. Plus, our recipes are labeled with easy-to-read icons, so you can quickly identify which ones meet your dietary needs.",
            "Cooking is more fun when you do it with others! That's why we've created a community around Recipe Resource. Join our Facebook group to connect with other home cooks, share your favorite recipes, and get inspiration for your next meal. Plus, our team of chefs is active in the group, so you can get expert advice and feedback on your cooking.",
          ]}
          img={[
            "https://images.unsplash.com/photo-1505576399279-565b52d4ac71?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
            "https://images.unsplash.com/photo-1498491480129-04f6d95c90be?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80",
            "https://images.unsplash.com/photo-1528605248644-14dd04022da1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
          ]}
        />
        <Section
          heading={"Get Inspired with Our Featured Recipes"}
          title={["Seasonal Recipes", "Global Cuisine", "Top-Rated Recipes"]}
          message={[
            "Our team of chefs is always updating our collection of featured recipes to reflect the seasons. From comforting soups and stews in the winter to fresh salads and grilled dishes in the summer, you'll always find something that fits the time of year.",
            "Are you craving something new and exciting? Our featured recipes highlight dishes from around the world, so you can travel the culinary globe without leaving your kitchen. From Italian pasta dishes to spicy Thai curries, there's something for every palate.",
            "Our community of home cooks is always rating and reviewing our recipes, so you can trust that our featured recipes are the best of the best. Plus, we include tips and tricks for each recipe, so you can be sure that you're cooking it perfectly every time.",
          ]}
          img={[
            "https://images.unsplash.com/photo-1607919966670-90622ba53a0b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
            "https://images.unsplash.com/photo-1511688878353-3a2f5be94cd7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
            "https://images.unsplash.com/photo-1542010589005-d1eacc3918f2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1192&q=80",
          ]}
        />
      </div>
    </div>
  );
}
