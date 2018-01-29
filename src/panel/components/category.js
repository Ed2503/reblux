import React from 'react'

function Category(props) {
	return(
		<div className="category">
			<img className="img-cate" src={props.src} />
			<div className="infi">
				<h2 className="title-cate">{props.titulo}</h2>
				<p className="info-cate">{props.informacion}</p>
			</div>
		</div>
	)
}

export default Category