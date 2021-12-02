import { createSlice } from "@reduxjs/toolkit";
import { CATEGORIES, MEALS } from "../data";

const initialState = {
	categories: CATEGORIES,
	meals: MEALS,
	filtered: MEALS,
	favorite: [],
};

export const mealsReducer = createSlice({
	name: "meals",
	initialState,
	reducers: {
		favoriteMeals: (state, action) => {
			const existingIndex = state.favorite?.findIndex((meal) => meal.id === action.payload);
			if (existingIndex >= 0) {
				const fav = state.favorite;
				fav.splice(existingIndex, 1);
				state.favorite = fav;
			} else {
				const meal = state.meals.find((meal) => meal.id === action.payload);
				state.favorite = state.favorite.concat(meal);
			}
		},
		filteredMeals: (state, action) => {
			const updatedMeals = state.meals.filter((meal) => {
				if (action.payload.glutenFree && !meal.isGlutenFree) {
					return false;
				}
				if (action.payload.lactoseFree && !meal.isLactoseFree) {
					return false;
				}
				if (action.payload.vegan && !meal.isVegan) {
					return false;
				}
				if (action.payload.vegetarian && !meal.isVegetarian) {
					return false;
				}
				return true;
			});
			state.filtered = updatedMeals;
		},
	},
});

export const { favoriteMeals, filteredMeals } = mealsReducer.actions;

export default mealsReducer.reducer;
