import React from 'react'
import ReactDOM, { hydrate } from 'react-dom'
import Home from './page/containers/home'
import { createStore } from 'redux'
import data from './api.json'
import { Provider } from 'react-redux'
import reducer from './reducer'

const initialState = {
	data: {
		...data
	},
	app: {
		modal: {
			state: false,
			props: {
				src: '',
				title: ''
			}
		}
	}
}

const store = createStore(
	reducer,
	initialState,
	window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

const $app = document.getElementById('app')

ReactDOM.render(
	<Provider store={store}>
		<Home />
	</Provider>,
	$app
)
