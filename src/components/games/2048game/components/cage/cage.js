import {memo} from 'react';
import './cage.css';

const Cell = (() => {
	// eslint-disable-next-line react/react-in-jsx-scope
	return <span className='cage'/>
})

export default memo(Cell);
