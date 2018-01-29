import React from 'react'
import ReactDOM, { render } from 'react-dom'
import Home from './page/containers/home'
import { createStore } from 'redux'
import data from './api.json'
// import { Provider } from 'react-redux'

// createStore(
// 	(store) => store,
// 	data,
// 	window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
// )

const $app = document.getElementById('app')

render(<Home data={data}/>, $app)