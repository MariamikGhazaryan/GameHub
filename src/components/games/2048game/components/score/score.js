import './score.css';
import { useEffect } from 'react';

function useSelector(tetrisSelector) {}

function useDispatch() {
	return undefined;
}

export default function Score() {
	function tetrisSelector() {}

	const { clearedRowsCount, score } = useSelector(tetrisSelector);
	const dispatch = useDispatch();

	function scoreAction(param) {
		return undefined;
	}

	useEffect(() => {
		dispatch(
			scoreAction({
				score: clearedRowsCount,
			})
		);
	}, [clearedRowsCount]);
	return <div className='billing'>Score : {score}</div>;
}
