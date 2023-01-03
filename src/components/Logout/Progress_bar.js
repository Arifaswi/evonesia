import React from 'react'

const Progress_bar = ({bgcolor,bgcolor1,progress,progress1}) => {
	
	const Parentdiv = {
		height: '44px',
		width: '500%',
		backgroundColor: 'whitesmoke',
		borderRadius: 40,
		margin: 50,
		display:'flex',
		position: 'relative',
		left:'-1080px',
		top:'450px'
	}
	
	const Childdiv = {
		height: '32px',
		width: `${progress}%`,
		backgroundColor: bgcolor,
	borderRadius:40,
		textAlign: 'right',
		paddingTop:'13px'
	}
	const Childdiv1 = {position: 'relative',
	left:'0%',
		height: '32px',
		width: `${progress1}%`,
		backgroundColor: bgcolor1,
	borderRadius:40,
		textAlign: 'left',
		paddingTop:'13px',
	}
	
	const progresstext = {
		padding: 10,
		color: 'black',
		fontWeight: 900
	}
		
	return (
	<div style={Parentdiv}>
	<div style={Childdiv}>
		<span style={progresstext}>{`${progress}%`}</span>
		
	</div>
	<div style={Childdiv1}>
		<span style={progresstext}>{`${progress1}%`}</span>
	</div>
	</div>
	)
}

export default Progress_bar;
