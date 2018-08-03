/* eslint-disable no-console */
import React from 'react'
import CsvTable from './CsvTable'

class SyncTextarea extends React.Component {
	constructor(props) {
		super(props)

		this.state = { text: '' }
		this.handleChangeText = this.handleChangeText.bind(this)
	}

	handleChangeText(event) {
		console.log(event.target.value)
		this.setState({text:event.target.value})
	}

	render() {
		return(
			<div>
				<p>
					hello,nello,dello<br/>
					1,2,3<br/>
					4,5,6<br/>
				</p>


				<textarea value={this.state.text} onChange={this.handleChangeText}/>
				<CsvTable csvData={this.state.text}/>
			</div>

		)

	}
}

export default SyncTextarea