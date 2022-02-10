import './ticTacToe.css';


const Square = ({value, clickBtn }) => {
    return (
        <button className='square' onClick={clickBtn}>{value}</button>
    )
    }

export default Square