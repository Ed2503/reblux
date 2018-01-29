import React from 'react'
import './panel.css'

function PanelLayout(props) {
	return(
		<div className="panel">
			{props.children}
		</div>
	)
}

export default PanelLayout