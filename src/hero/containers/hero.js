import React, { Component } from 'react'
import HeroLayout from '../components/hero-layout'
import Logo from '../components/logo'

class Hero extends Component {
	render() {
		return(
			<HeroLayout>
				<Logo />
			</HeroLayout>
		)
	}
}

export default Hero