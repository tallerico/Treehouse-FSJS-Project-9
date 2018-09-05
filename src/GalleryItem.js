import React from 'react'

const GalleryItem = props => {
	return (
		<div className="image_container">
			<div className="image_overlay" />
			<img
				className="gallery_image"
				src="https://farm2.staticflickr.com/1887/44458510561_cf04cde9e5_q.jpg"
				alt=""
			/>
		</div>
	)
}

export default GalleryItem
