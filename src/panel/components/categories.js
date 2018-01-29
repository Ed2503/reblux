import React from 'React'

function Categories(props) {
	return(
		<div className="categoria">
			<h1>{props.title}</h1>
			<h4 className="sub-info">{props.info}</h4>
			<div className="contenido">{props.children}</div>
		</div>
	)
}

export default Categories