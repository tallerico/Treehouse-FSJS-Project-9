import React from 'react'
import GalleryItem from './GalleryItem'

const Gallery = props => {
	const pics = props.pictures

	return (
		<div className="gallery_container">
			{pics.map(url => (
				<GalleryItem key={url} image={url} />
			))}
		</div>
	)
}

export default Gallery
