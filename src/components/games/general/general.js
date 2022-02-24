import React from "react";
import Carousel from "../carousel/carousel";
import LeaderBoard from "../leaderboard/leaderboard";
import './general.css';
import GamesGrid from './gamesgrid'

const General = () => {
    return (
        <>
            <Carousel/>
            <GamesGrid/>
            <LeaderBoard/>
        </>
    )
}
export default General;
