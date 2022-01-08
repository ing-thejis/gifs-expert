import React, { useState } from 'react'

import AddCategory from './component/AddCategory'
import GifGrid from './component/GifGrid'

const GifExpertApp = () => {

	const [categories, setCategories] = useState(['Naruto']);

	return (
		<>
			<h2>Gif Expert App</h2>

			<AddCategory setCategories={ setCategories } />
			<hr />

			<ol>
				{categories.map( category => (
				
					<GifGrid key={category} category={ category } />
				
				))}
			</ol>
		</>
	)
}

export default GifExpertApp