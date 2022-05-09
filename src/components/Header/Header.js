import React from "react";
import './Header.scss'
import twitterIcon from '../../assets/img/twitter-logo.png';

export default function Header() {
    return (
        <div className="header">
            <img src={twitterIcon} alt="Icon Twitter"></img>
            <h1>Tweets Simulator</h1>
        </div>
    )
}