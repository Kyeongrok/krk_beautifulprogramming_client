import React from 'react'

class Box extends React.Component {
	constructor(props) {
		super(props)
		this.handleOnClick = this.handleOnClick
	}
	handleOnClick(){
		alert('hello')
	}
	render() {
		return (
			<div>
        지갑주소:<input type="text" />
				<button onClick={()=>this.handleOnClick()}>받기</button>
				<br/>

			</div>
		)
	}
}

export default Box