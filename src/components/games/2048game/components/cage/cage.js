import React, {memo} from 'react';
import './cage.css';

// eslint-disable-next-line react/display-name
const Cell = memo(() => {
	// shouldComponentUpdate() {
	// 	return false;
	// }
	return <span className='cage'/>
})

export default Cell;
