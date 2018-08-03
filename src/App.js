/* eslint-disable no-unused-vars,no-console */
import React, { Component } from 'react'
import './App.css'
import Box from './components/Box.js'
import SyncTextarea from './components/SyncTextarea.js'

class App extends Component {
	componentWillMount(){
		console.log('hello')

	}
	render() {
		return (
			<div className="App">
				<header className="App-header">

					<h1 className="App-title">Welcome to Here</h1>
				</header>
				<p className="App-intro">

				</p>
				<Box/>
				<SyncTextarea/>
			</div>
		)
	}
}

export default App
