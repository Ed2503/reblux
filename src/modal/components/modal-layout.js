import React from 'react'
import './Modal.css'
import { connect } from 'react-redux'

class ModalLayout extends React.Component {
	
	render() {
		return(
			<div className="Modal">
				<span id="closer" onClick={this.props.event}>X</span>
				<div className="modal-cont">
					<h1>{this.props.modalData.title}</h1>
					<img src={this.props.modalData.src}/>
				</div>
			</div>
		)
	}
}

function mapStateToProps(state, props) {
  return {
    modalData: state.app.modal.props
  }
}

export default connect(mapStateToProps)(ModalLayout)