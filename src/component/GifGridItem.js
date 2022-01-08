import React from 'react'

const GifGridItem = ({ id, title, url }) => {

	return (
		<div className='card m-3 rounded-2 overflow-hidden align-content-center animate__animated animate__flash'>
			<p className='p-2 w-100'>{ title }</p>
			<img className='mh-100' style={{'height': '100px', 'width': '200px'}} src={ url } alt={ title } />
		</div>
	)
}

export default GifGridItem