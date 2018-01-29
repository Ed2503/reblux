import React from 'react'
import './main.css'

function HomeLayout(props) {
	return(
		<div className="main">
			{props.children}
		</div>
	)
}

export default HomeLayout