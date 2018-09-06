import React from 'react'

const GalleryItem = props => {
	return (
		<div className="image_container">
			<div className="image_overlay" />
			<img className="gallery_image" src={props.image} alt="" />
		</div>
	)
}

export default GalleryItem
