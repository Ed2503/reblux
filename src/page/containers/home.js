import React, { Component } from 'react'
import HomeLayout from '../components/home-layout'
import Hero from '../../hero/containers/hero'
import Panel from '../../panel/containers/panel'
import { connect } from 'react-redux'
import Modal from '../../modal/containers/modal'
import ModalLayout from '../../modal/components/modal-layout'

class Home extends Component {
	state = {
		modal: true
	}
	handleCloseModal = (event) => {
		this.props.dispatch({
			type: 'CLOSER_MODAL'
		})
	}
	render() {
		return(
			<HomeLayout>
				<Hero />
				<Panel data={this.props.data}/>
				{
					this.props.modal &&
					<Modal>
						<ModalLayout event={this.handleCloseModal} />
					</Modal>
				}
			</HomeLayout>
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

export default connect(mapStateToProps)(Home)