import React from "react";
import InfoBox from "../InfoBox/InfoBox";
import "./Section.css";

export default function Section({ heading }) {
  return (
    <div className="section">
      <h1 className="heading">{heading}</h1>
      <div className="boxes">
        <InfoBox
          title="Cooking Tips"
          message={
            "Our team of experienced chefs has curated a collection of cooking tips and tricks to help you become a better cook. From knife skills to cooking techniques, we've got you covered. Plus, our tips are designed to be easy to follow, even if you're a beginner in the kitchen."
          }
          img="https://images.unsplash.com/photo-1505576399279-565b52d4ac71?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
        />
        <InfoBox
          title="Dietary Information"
          message={
            "At Recipe Resource, we believe that everyone should have access to delicious food, no matter their dietary restrictions. That's why we've made it a priority to include recipes for every diet, including vegetarian, vegan, gluten-free, and more. Plus, our recipes are labeled with easy-to-read icons, so you can quickly identify which ones meet your dietary needs."
          }
          img="https://images.unsplash.com/photo-1498491480129-04f6d95c90be?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
        />
        <InfoBox
          title="Community"
          message={
            "Cooking is more fun when you do it with others! That's why we've created a community around Recipe Resource. Share your favorite recipes, and get inspiration for your next meal."
          }
          img="https://images.unsplash.com/photo-1528605248644-14dd04022da1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
        />
      </div>
    </div>
  );
}
