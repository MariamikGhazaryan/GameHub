import React from 'react'
import './cell.css'

export default function cell({details, updateFlag, revealcell}) {

    const click = () => {
        if (details.value === 'X') {
        }
        revealcell(details.x, details.y);
    }

    const rightClick = (e) => {
        updateFlag(e, details.x, details.y)
    }

    return (
        <div className='call' onClick={click} onContextMenu={rightClick} style={
            {
                backgroundColor: details.revealed && details.value !== 0 ? details.value === 'X'
                    ? 'rgb(234,8,8)' : 'rgba(11,80,232,0.99)'
                    : details.revealed && details.value === 0
                        ? 'rgb(60,252,2)'
                        : 'rgb(0,0,11)'
            }
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
