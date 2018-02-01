import React from 'react'
import { connect } from 'react-redux'

class Category extends React.Component {
	state = {}
	handleOpenModal = (event) => {
		this.props.dispatch({
			type: 'OPEN_MODAL',
			title: this.props.titulo,
			src: this.props.src
		})
	}
	render() {
		return(
			<div className="category" onClick={this.handleOpenModal}>
				<img className="img-cate" src={this.props.src} />
				<div className="infi">
					<h2 className="title-cate">{this.props.titulo}</h2>
					<p className="info-cate">{this.props.informacion}</p>
				</div>
			</div>
		)
	}
}

function mapStateToProps(state, props) {
  return {
    data: state.data,
    modal: state.app.modal.state,
    modalData: state.app.modal.props
  }
}

export default connect(mapStateToProps)(Category)