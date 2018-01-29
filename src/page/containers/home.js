import React, { Component } from 'react'
import HomeLayout from '../components/home-layout'
import Hero from '../../hero/containers/hero'
import Panel from '../../panel/containers/panel'

class Home extends Component {
	render() {
		return(
			<HomeLayout>
				<Hero />
				<Panel data={this.props.data}/>
			</HomeLayout>
		)
	}
}

export default Home