import React from 'react'

const GalleryItem = props => {
	return (
		<div className="image_container">
			<img className="gallery_image" src={props.image} alt="" />
		</div>
	)
}

export default GalleryItem
