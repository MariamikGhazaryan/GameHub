import Square from './square';
import './ticTacToe.css';


const Board = ({squares, click}) => {
    return (
    <div className='board'> 
    {
        squares.map((square,i)=>(
            <Square key={i} value={square} clickBtn = {()=>click(i)}/>
        ))
    } 
    </div>
    )
}


export default Board