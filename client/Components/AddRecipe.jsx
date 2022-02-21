import { FormControl, InputLabel, Input, TextField, FormHelperText, FormLabel, Typography, Button, Card } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { recipeActions } from '../store/recipes-slice';

const AddRecipe = () => {

	const dispatch = useDispatch();
	const newRecipeName = useSelector((state) => state.recipes.newRecipeName);
	const newIngredientsList = useSelector((state) => state.recipes.newIngredientsList)

	const recipeNameHandler = (value) => {
		dispatch(recipeActions.setRecipeName(value))
	};
	const ingredientsListHandler = (value) => {
		dispatch(recipeActions.setIngredientList(value))
	};

	const submitHandler = () => {
		fetch('/recipes', {
			method: 'POST',
			headers: {
				'Content-Type': 'Application/JSON'
			},
			body: JSON.stringify({ name: newRecipeName, query: newIngredientsList })
		})
			.then(() => {
				console.log('MADE THE POST REQUEST!');
				clearFields()
			})
	};

	const clearFields = () => {
		dispatch(recipeActions.setRecipeName(''))
		dispatch(recipeActions.setIngredientList(''))
	}


	return (
		<Card variant='outlined' sx={{ p: 2 }}>

			<FormControl style={{ width: '100%' }}>
				<Typography variant='h4'>Add Recipe:</Typography>
				<TextField
					fullWidth required
					label="Recipe Name"
					id="fullWidth"
					sx={{ my: 2 }}
					value={newRecipeName}
					onChange={(e) => recipeNameHandler(e.target.value)}
				/>
				<TextField
					fullWidth required
					label="Ingredients"
					id="fullWidth" sx={{ mb: 2 }}
					value={newIngredientsList}
					onChange={(e) => ingredientsListHandler(e.target.value)}
				/>
				<Button type='submit' variant='outlined' onClick={submitHandler}>Add</Button>
			</FormControl>
		</Card>
	)
}

export default AddRecipe