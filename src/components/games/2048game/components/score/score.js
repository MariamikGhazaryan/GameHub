import './score.css';
import { useEffect } from 'react';

// eslint-disable-next-line no-unused-vars
function useSelector(tetrisSelector) {}

function useDispatch() {
	return undefined;
}

export default function Score() {
	function tetrisSelector() {}

	const { clearedRowsCount, score } = useSelector(tetrisSelector);
	const dispatch = useDispatch();

	function scoreAction() {
		return undefined;
	}

	useEffect(() => {
		dispatch(
			scoreAction()
		);
	}, [clearedRowsCount]);
	// eslint-disable-next-line react/react-in-jsx-scope
	return <div className='billing'>Score : {score}</div>;
}
