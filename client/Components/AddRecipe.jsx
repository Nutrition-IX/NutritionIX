import { FormControl, InputLabel, Input, TextField, FormHelperText, FormLabel, Typography, Button, Card } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'

const AddRecipe = () => {
	return (
		<Card variant='outlined' sx={{ p: 2 }}>

		<FormControl style={{ width: '100%'}}>
			<Typography variant='h4'>Add Recipe:</Typography>
			<TextField fullWidth required label="Recipe Name" id="fullWidth" sx={{my: 2}}/>
			<TextField fullWidth required label="Ingredients" id="fullWidth" sx={{mb: 2}}/>
			<Button type='submit' variant='outlined'>Add</Button>
		</FormControl>
		</Card>
	)
}

export default AddRecipe