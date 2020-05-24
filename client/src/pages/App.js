import React, {useState, useEffect} from 'react'
import './App.sass'

import Paper from './../icons/Paper'
import Rock from './../icons/Rock'
import Scissors from './../icons/Scissors'

export const App = () => {

    const gameelems = [
        {id: 1, elem: <Rock />},
        {id: 2, elem: <Paper />},
        {id: 3, elem: <Scissors />}
    ]

    const [counterWins, setCounterWins] = useState(0)
    const [counterLosses, setCounterLosses] = useState(0)
    
    const [win, setWin] = useState('')
    const [computer, setComputer] = useState({
        loading: true,
        elem: null
    })
    const [user, setUser] = useState({
        loading: true,
        elem: null
    })
    const [ready, setReady] = useState(false)


    useEffect(() => {
        const rnd = Math.floor( Math.random() * 3 + 1 )
        const elem = gameelems.find(e => e.id === rnd)
        setComputer({loading: false, elem: elem})
    }, [ready])

    useEffect(() => {
        if (win === 'Draw!') {
            document.getElementById('modal').style.backgroundColor = '#000000'
        }
        if (win === 'You are win!') {
            document.getElementById('modal').style.backgroundColor = '#82BB48'
        }
        if (win === 'You are loss') {
            document.getElementById('modal').style.backgroundColor = '#D64764'
        }
    }, [win])

    const userHasChoosen = (id) => {
        const elem = gameelems.find(e => e.id === id)
        setUser({loading: false, elem: elem})
    }

    useEffect(() => {
        if (computer.elem && user.elem) {

            //Draw cases
            if (user.elem.id === 1 && computer.elem.id === 1) setWin('Draw!')
            if (user.elem.id === 2 && computer.elem.id === 2) setWin('Draw!')
            if (user.elem.id === 3 && computer.elem.id === 3) setWin('Draw!')

            // Win cases
            if (user.elem.id === 1 && computer.elem.id === 3) {setWin('You are win!'); setCounterWins((state) => state + 1) }
            if (user.elem.id === 2 && computer.elem.id === 1) {setWin('You are win!'); setCounterWins((state) => state + 1) }
            if (user.elem.id === 3 && computer.elem.id === 2) {setWin('You are win!'); setCounterWins((state) => state + 1) }

            // Loss cases
            if (user.elem.id === 1 && computer.elem.id === 2) {setWin('You are loss'); setCounterLosses((state) => state + 1) }
            if (user.elem.id === 2 && computer.elem.id === 3) {setWin('You are loss'); setCounterLosses((state) => state + 1) }
            if (user.elem.id === 3 && computer.elem.id === 1) {setWin('You are loss'); setCounterLosses((state) => state + 1) }
        }
    }, [user]) 

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

                setReady(true)
                break
            
            case 'playagain':
                const el3 = document.getElementById('app__choise-modal')
                el3.classList.add('hidden')

                const el5 = document.getElementById('black-transparent-bgc')
                el5.style.zIndex = 8
                el5.style.backgroundColor = 'transparent'
                el5.style.opacity = 1

                setReady(false)
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
                        <div className="app__stats wins"><span className="statisticNumber span-wins">{counterWins}</span> Wins </div>
                        <div className="app__stats losses"><span className="statisticNumber span-losses">{counterLosses}</span> Loss</div>
                    </div>
                </div>
                <div className="app__game">
                    <div className="app__you-section">
                        <div className="app__you-title sections-title">You</div>
                        <div className="app__rockcircle circle" onClick={() => {clickHandler('gameelements'); userHasChoosen(1)}}>
                            <div className="app__rockicon icon">
                                <Rock />
                            </div>
                        </div>
                        <div className="app__papercircle circle" onClick={() => { clickHandler('gameelements'); userHasChoosen(2);}}>
                            <div className="app__papericon icon">
                                <Paper />
                            </div>
                        </div>
                        <div className="app__scissorscircle circle" onClick={() => {clickHandler('gameelements'); userHasChoosen(3)}}>
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
                            {!user.loading && user.elem.elem}
                        </div>
                        <div className="modal__status">
                            {win}
                        </div>
                        <div className="modal__computer ic">
                            {!computer.loading && computer.elem.elem}
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