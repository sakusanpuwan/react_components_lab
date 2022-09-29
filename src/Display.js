import React from "react"

const Display = () => {

    const cakes = [
        {
            cakeName: "Lemon Drizzle",
            ingredients: ["eggs", "butter", "lemon  zest", "sugar", "self-raising flour"],
            rating: 5
        },
        {
            cakeName: "Tea Loaf",
            ingredients: ["eggs", "oil", "dried fruit", "sugar", "self-raising flour", "strong tea"],
            rating: 3
        },
        {
            cakeName: "Brownie",
            ingredients: ["chocolate", "eggs", "flour", "butter", "walnuts"],
            rating: 4
        },
        {
            cakeName: "Carrot Cake",
            ingredients: ["carrots", "walnuts", "oil", "cream cheese", "flour", "sugar"],
            rating: 5
        }
    ];

    

    const cakesList = cakes.map((cake) => {
        const cakeName = cake.cakeName;
        const cakeIngredient = cake.ingredients;
        return <li>{cakeName + ": "+ cakeIngredient}</li>
        // console.log(cake.cakeName);
    });

    const cakeRatings = cakes.map((cake) => {
        const ratings = cake.rating; 
        return ratings;
    });


    const getAverageRating = () => {
        const totalRatings = cakeRatings.reduce((reducer,rating) => reducer + rating,0);
        const averageRating = totalRatings / (cakeRatings.length)
        return averageRating;

    }


    

    return (
    
        <div>
            <h2>Welcome to the Bakery!</h2>
            <img src="https://livforcake.com/wp-content/uploads/2019/12/chocolate-cake-thumb-1-500x500.jpg" height={100} width={100} ></img>
            <ul>{cakesList}</ul>
            <h3>The average rating of our cakes is {getAverageRating()} </h3>
        </div>
    );
}

export default Display;