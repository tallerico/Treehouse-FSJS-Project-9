import React from 'react'
import GalleryItem from './GalleryItem'

const Gallery = props => {
	const pics = props.pictures
	console.log(pics)
	return (
		<div className="gallery_container">
			{pics.map(url => (
				<GalleryItem key={url.key} image={url} />
			))}
		</div>
	)
}

export default Gallery
