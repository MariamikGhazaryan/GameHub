import './leaderboard.css';
import {useEffect, useState} from 'react';
import {getData} from "../../../helpers/api";
import {GAME_FILTER_OPTIONS} from "../../../helpers/constants";

export default function LeaderBoard() {
    const [leaderBoardItems, setLeaderBoardItems] = useState([]);
    const [filterSelectValue, setFilterSelectValue] = useState(GAME_FILTER_OPTIONS[0].value);
    const [filteredLeaderBoardItems, setFilteredLeaderBoardItems] = useState([]);

    useEffect(() => {
        getData(`scores`)
            .then(scores => {
                return getData(`users`)
                    .then(users => {
                        const temp = [];
                        scores.data.forEach(score => {
                            const user = users.data.find(item => item.id === score.userId);
                            const obj = {
                                name: user.firstName + ' ' + user.lastName,
                                game: score.game,
                                score: score.score,
                                id: score.id
                            }
                            temp.push(obj);
                        });
                        return temp;
                    }).then(leaderBoard => {
                        setLeaderBoardItems(leaderBoard);
                        setFilteredLeaderBoardItems(leaderBoard);
                    });
            })

    }, []);


    const sortLeaderBoardByScore = (filteredData) => filteredData.sort((b1, b2) => b2.score - b1.score);

    useEffect(() => {
        filterLeaderBoard();
    }, [leaderBoardItems, filterSelectValue]);

    const filterLeaderBoard = () => {
        const filteredData = (filterSelectValue) ? leaderBoardItems
            .filter(item => item.game === filterSelectValue) : leaderBoardItems;
        setFilteredLeaderBoardItems(sortLeaderBoardByScore(filteredData));
    }

    const handleSelectValue = e => {
        setFilterSelectValue(e.target.value);
    }

    return (<div className="leaderboard-container">
        <h2 className='leaderboard-title'>Leader Board</h2>
        <select
            value={filterSelectValue}
            onChange={handleSelectValue}
            name="leaderBoardFilter">
            {
                GAME_FILTER_OPTIONS.map(item => (
                    <option value={item.value} key={item.value}>{item.label}</option>
                ))
            }
        </select>
        <table>
            <thead>
            <tr>
                <th>Name</th>
                <th>Game</th>
                <th>Score</th>
            </tr>
            </thead>
            <tbody>
            {filteredLeaderBoardItems.map(item =>
                <tr key={item.id}>
                    <td>{item.name}</td>
                    <td>{item.game}</td>
                    <td>{item.score}</td>
                </tr>
            )}
            </tbody>
        </table>
    </div>);
}
