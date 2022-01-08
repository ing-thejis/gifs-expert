import React from 'react'
import GifGridItem from './GifGridItem'
import useFetchGifs from '../hooks/useFetchGifs'

const GifGrid = ({ category }) => {

	const { data: images, loading } = useFetchGifs(category)


	return (
		<>
		<h3> { category } </h3>
		{ loading && <p className='animate__animated animate__bounce animate__slow'>Cargando...</p>}

		<div className='card d-flex flex-row flex-wrap'>
			
				{images.map( img => (
					<GifGridItem key={img.id} {...img}/>
				))}

		</div>
		</>
	)
}

export default GifGrid