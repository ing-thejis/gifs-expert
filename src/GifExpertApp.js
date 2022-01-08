import React, { useState } from 'react'

import AddCategory from './component/AddCategory'
import GifGrid from './component/GifGrid'

const GifExpertApp = () => {

	const [categories, setCategories] = useState(['Gif Funny']);

	return (
		<>
			<h2>Gif Expert App</h2>

			<p>
				Gif Expert es una app que te permite obtener gif animados mas divertidos.
				Te invito a buscar los gif más atractivos y te diviertas.
			</p>

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