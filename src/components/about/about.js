import React from "react";
import "./about.css";
import TicTacToe from './info_image/TicTacToe.jpg'
import Memory from './info_image/memory.png'
import Puzzle from './info_image/number_puzzle.jpg'
import Hangman from './info_image/hangman.jpg'
import Sapper from './info_image/sapper.jpg'
import Tetris from './info_image/tetris.jpg'


const About = () => {
    return (
        <div className='news'>

            <div className='info'>
                <div className="text">
                    <h2>Tic Tac Toe</h2>
                    <p>If tic-tac-toe were as simple as it seems, why has it been around for over 3,000 years? Our
                        version has evolved a bit since the original version in ancient Egypt, by letting kids play
                        against the computer. However, what it teaches kids hasn’t changed. This classic game
                        contributes to children’s developmental growth in numerous ways including their understanding of
                        predictability, problem solving, spatial reasoning, hand-eye coordination, turn taking, and
                        strategizing. Teachers trust Toy Theater to provide safe & effective educational games.
                    </p>
                </div>
                <div className='image' style={{backgroundImage: `url(${TicTacToe})`}}/>
            </div>

            <div className='info'>
                <div className='image' style={{backgroundImage: `url(${Memory})`}}/>
                <div className="text">
                    <h2>Memory Game</h2>
                    <p>The memory game, or concentration, as it is sometimes called, is a popular card game played by
                        children and adults around the world. Good memory is one of the qualities required in order to
                        succeed in it. This, however, is not enough. When it is assumed that the players have perfect
                        memory, the memory game can be seen as a game of strategy. The game is analysed under this
                        assumption and the optimal strategy is found. It is simple and perhaps unexpected.
                        In contrast to the simplicity of the optimal strategy, the analysis leading to its optimality
                        proof is rather involved. It supplies an interesting example of concrete mathematics of the sort
                        used in the analysis of algorithms. It is doubtful whether this analysis could have been carried
                        out without resort to experimentation and a substantial use of automated symbolic computations.
                    </p>
                </div>
            </div>

            <div className='info'>
                <div className="text">
                    <h2>Number puzzle</h2>
                    <p>Solving puzzles have been really helpful in developing the brain of a child. Various puzzles help
                        in enhancing the cognitive, spatial and logical abilities of the child.
                        Number puzzles have a specific set of rules; you first have to figure out the pattern being
                        followed and then answer the puzzle according to the pattern. Learn and practice Number puzzles
                        from this article.
                        Number puzzles are a part of many competitive examinations, these also help you improve your
                        logical thinking, and above all these are fun to crack!!!
                    </p>
                </div>
                <div className='image' style={{backgroundImage: `url(${Puzzle})`}}/>
            </div>

            <div className='info'>
                <div className='image' style={{backgroundImage: `url(${Hangman})`}}/>
                <div className="text">
                    <h2> Hangman </h2>
                    <p>Hangman is an old school favorite, a word game where the goal is simply to find the missing word
                        or words.
                        You will be presented with a number of blank spaces representing the missing letters you need to
                        find.
                        Use the keyboard to guess a letter (I recommend starting with vowels).
                        If your chosen letter exists in the answer, then all places in the answer where that letter
                        appear will be revealed.
                        After you&apos;ve revealed several letters, you may be able to guess what the answer is and fill
                        in
                        the remaining letters.
                        Be warned, every time you guess a letter wrong you loose a life and the hangman begins to
                        appear, piece by piece.
                        Solve the puzzle before the hangman dies.
                    </p>
                </div>
            </div>

            <div className='info'>
                <div className="text">
                    <h2>Sapper</h2>
                    <p>Sapper Classic is an online version of the classic Minesweeper game. Minesweeper is one of the
                        first games to become available on PC’s and young and old have grown to love the game over the
                        many years that it has been around. The game is simple, try to find all of the bombs that have
                        been scattered around the game map and flag them with your set of red flags.
                        To be successful in this game you need to try and create an opening in the map to which you will
                        see numbers appear indicating to you if any bombs are around that square. Segregate suspicious
                        square before placing your flags and finding all of the bombs. Good luck!
                    </p>
                </div>
                <div className='image' style={{backgroundImage: `url(${Sapper})`}}/>
            </div>

            <div className='info'>
                <div className='image' style={{backgroundImage: `url(${Tetris})`}}/>
                <div className="text">
                    <h2> Tetris </h2>
                    <p>In 1984, Tetris was born from the imagination of computer programmer Alexey Pajitnov. Inspired by
                        his favorite puzzle board game, Pentominos, Pajitnov created an electronic game that let players
                        arrange puzzle pieces in real time as they fell from the top of the playing field. The resulting
                        design was a game that used seven distinctive geometric playing pieces, each made up of four
                        squares. Pajitnov called this game “Tetris,” a combination of “tetra” (the Greek word meaning
                        “four”) and “tennis” (his favorite sport).
                        As one of the most recognizable and influential video game brands in the world, it’s no wonder
                        why there are hundreds of millions of Tetris products being played, worn, and enjoyed by fans in
                        their everyday lives. For over thirty-five years, the game and brand have truly transcended the
                        barriers of culture and language, resulting in a fun and exciting playing experience for
                        everyone, everywhere!
                    </p>
                </div>
            </div>
        </div>
    )
}

export default About;
