import React from 'react'
import './hero.css'

function HeroLayout(props) {
	return(
		<div className="hero">
			{props.children}
		</div>
	)
}

export default HeroLayout