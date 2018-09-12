import React from 'react'
import GalleryItem from './GalleryItem'

const Gallery = props => {
	const pics = props.pictures
	{
		/*if no search results displaying a message*/
	}
	if (props.validSearch === false) {
		return (
			<div className="not_found_container">
				<div className="color_block">
					<h1>Sorry. No results found.</h1>
				</div>
			</div>
		)
	} else {
		{
			/*Rendering images*/
		}
		return (
			<div className="gallery_container">
				{pics.map((url, index) => (
					<GalleryItem key={index.toString()} image={url} />
				))}
			</div>
		)
	}
}

export default Gallery
