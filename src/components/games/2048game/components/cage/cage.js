import {memo} from 'react';
import './cage.css';

const Cell = memo(() => {
	// shouldComponentUpdate() {
	// 	return false;
	// }
	return <span className='cage'/>
})

export default Cell;
