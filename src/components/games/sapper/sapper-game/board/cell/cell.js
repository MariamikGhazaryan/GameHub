import React from 'react'
import './cell.css'
export default function cell({ details, updateFlag, revealcell }) {

	const click=()=>{
		if(details.value === 'X'){
		}
		revealcell(details.x,details.y);
	}


	const rightClick = (e) => {
		updateFlag(e, details.x, details.y)
	}

	return (
		<div className = 'call' onClick = {click} onContextMenu = {rightClick} style={
			{ backgroundColor: details.revealed && details.value!==0 ? details.value === 'X'
					? 'rgb(183,7,7)' : 'rgba(7,62,190,0.99)'
					: details.revealed&&details.value === 0
						? 'rgb(45,176,8)'
						: '#009879' }
		}>
			{!details.revealed && details.flagged ? (
				"🚩"
			) : details.revealed && details.value !== 0 ? (
				details.value === "X" ? (
					"💣"
				) : (
					details.value
				)
			) : (
				""
			)}
		</div>
	)
}