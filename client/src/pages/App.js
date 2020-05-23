import React from 'react'
import './App.sass'

import Paper from './../icons/Paper'
import Rock from './../icons/Rock'
import Scissors from './../icons/Scissors'

export const App = () => {
    return (
        <div className="app">
            <div className="app__infobar">
                <div className="app__gamename">
                    Rock. Paper. Scissors.
                </div>
                <div className="app__statswrap">
                    <div className="app__stats wins"><span className="statisticNumber span-wins">2</span> Wins </div>
                    <div className="app__stats losses"><span className="statisticNumber span-losses"> 1</span> Loss</div>
                </div>
            </div>
            <div className="app__game">
                <div className="app__you-section">
                    <div className="app__you-title sections-title">You</div>
                    <div className="app__rockcircle circle">
                        <div className="app__rockicon icon">
                            <Rock />
                        </div>
                    </div>
                    <div className="app__papercircle circle">
                        <div className="app__rockicon icon">
                            <Paper />
                        </div>
                    </div>
                    <div className="app__scissorscircle circle">
                        <div className="app__rockicon icon">
                            <Scissors />
                        </div>
                    </div>
                </div>
                <div className="app__computer-section">
                    <div className="app__computer-title sections-title">Computer</div>
                    <div className="app__computercircle circle">
                        <div className="app__computercircle-inner">?</div>
                    </div>
                </div>
            </div>
        </div>
    )
}