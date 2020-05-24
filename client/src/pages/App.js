import React, {useState} from 'react'
import './App.sass'

import Paper from './../icons/Paper'
import Rock from './../icons/Rock'
import Scissors from './../icons/Scissors'

export const App = () => {
   
    // Just a client js scrpit for manipulate DOM elements
    const clickHandler = (el) => {
        
        switch(el) {
            case 'gameelements':
                const el1 = document.getElementById('app__choise-modal')
                el1.classList.remove('hidden')

                const el2 = document.getElementById('black-transparent-bgc')
                el2.style.zIndex = 10
                el2.style.backgroundColor = "#000000"
                el2.style.opacity = '0.6'

                const el4 = document.getElementById('modal')
                el4.style.zIndex = 11

                break
            
            case 'playagain':
                const el3 = document.getElementById('app__choise-modal')
                el3.classList.add('hidden')

                const el5 = document.getElementById('black-transparent-bgc')
                el5.style.zIndex = 8
                el5.style.backgroundColor = 'transparent'
                el5.style.opacity = 1
                
                break
        
            default:
                break     
        }
    }

    return (
        <>
            <div className="app__black-transparent-bgc" id="black-transparent-bgc"></div>
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
            </div>
            <div className="app__choise-modal hidden" id="app__choise-modal">
                <div className="modal" id="modal">
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
        </>
    )
}