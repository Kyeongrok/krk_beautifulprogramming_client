/* eslint-disable no-console */
import React from 'react'
import { CsvToHtmlTable } from 'react-csv-to-table';


class CsvTable extends React.Component {


	render(){
		console.log(this.props.csvData)
		return(

			<CsvToHtmlTable
				data={this.props.csvData}
				csvDelimiter=","
			/>
		)
	}

}

export default CsvTable