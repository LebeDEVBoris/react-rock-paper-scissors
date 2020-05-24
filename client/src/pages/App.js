import React from 'react'
import './App.sass'

import Paper from './../icons/Paper'
import Rock from './../icons/Rock'
import Scissors from './../icons/Scissors'

export const App = () => {
    
    const clickHandler = (el) => {
        
        switch(el) {
            case 'gameelements':
                const el1 = document.getElementById('app__choise-modal')
                el1.classList.remove('hidden')
                break
            
            case 'playagain':
                const el3 = document.getElementById('app__choise-modal')
                el3.classList.add('hidden')
                break
        
            default:
                break     
        }
    }

    return (
        <div className="app">
            <div className="app__black-transparent-bgc">
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
                        <div className="app__rockcircle circle" onClick={() => clickHandler('gameelements')}>
                            <div className="app__rockicon icon">
                                <Rock />
                            </div>
                        </div>
                        <div className="app__papercircle circle" onClick={() => clickHandler('gameelements')}>
                            <div className="app__papericon icon">
                                <Paper />
                            </div>
                        </div>
                        <div className="app__scissorscircle circle" onClick={() => clickHandler('gameelements')}>
                            <div className="app__scissorsicon icon">
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
                <div className="app__choise-modal hidden" id="app__choise-modal">
                    <div className="modal">
                        <div className="modal__results">
                            <div className="modal__you ic">
                                <Rock />
                            </div>
                            <div className="modal__status">
                                Draw!
                            </div>
                            <div className="modal__computer ic">
                                <Rock />
                            </div>
                        </div>
                        <div className="modal__playagain">
                            <div className="modal__playagain-content" onClick={() => clickHandler('playagain')}>
                                Play Again
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}