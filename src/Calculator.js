import React, { useState } from 'react'

const Calculator = props => {
    let [inputNumber, setInputNumber] = useState('')
    let [operator, setOperator] = useState('')
    let [displayOperator, setDisplayOperator] = useState('')
    let [firstValue, setFirstValue] = useState('')
    let [solution, setSolution] = useState('0')
    let [displayError, setDisplayError] = useState("")
    // Declare state variables
    const calcAction = (e) => {
        console.log("action press")
        console.log(e.target.value)
        if(setDisplayOperator) {
            setDisplayOperator("")
        }
        setInputNumber(inputNumber + e.target.value)
    }

    const operatorAction = (e) => {
        if(operator) {
            console.log("ERROR PRESS CLEAR DOUBLE OPERATORS NOT ALLOWED")
            setDisplayError(`Error Double Selections of ${e.target.value} Not allowed Press Clear`)
        }
        console.log(e.target.value)
        console.log(inputNumber)
        setFirstValue(inputNumber)
        setOperator(e.target.value)
        setDisplayOperator(e.target.value)
        setInputNumber('')
        
    }

    const clearAction = (e) => {
        setOperator('')
        setInputNumber('')
        setFirstValue('')
        setSolution('0')
        setDisplayOperator('')
        setDisplayError('')
    }
    const equalAction = (e) => {
        console.log("CALCULATE")
        console.log(inputNumber)
        console.log(firstValue)
        console.log(operator)
        let output = ''
        if(operator === "+") {
            output = Number(firstValue) + Number(inputNumber)
        }
        if(operator === "-") {
            output = Number(firstValue) - Number(inputNumber)
        }
        if(operator === "*") {
            output = Number(firstValue) * Number(inputNumber)
        }
        if(operator === "/") {
            output = Number(firstValue) / Number(inputNumber)
        }
        setSolution(output)
    
        console.log(output)
    }

    return (
        <div className="container">
            <h1>React Calculator</h1>
            <div className="calc-container">
                <p>Values: {inputNumber} {displayOperator} </p>
                <div className="answer-box">{solution}</div>
                <div className="calc-row">
                    <button className="calc-button calc-button-top" onClick={clearAction}>AC</button>
                    <button className="calc-button calc-button-top" >+/-</button>
                    <button className="calc-button calc-button-top" >%</button>
                    <button className="calc-button calc-button-op" onClick={operatorAction} value="/">/</button>
                </div>
                <div className="calc-row">
                    <button className="calc-button" onClick={calcAction} value="7">7</button>
                    <button className="calc-button" onClick={calcAction} value="8">8</button>
                    <button className="calc-button" onClick={calcAction} value="9">9</button>
                    <button className="calc-button calc-button-op" onClick={operatorAction} value="*">x</button>
                </div>
                <div className="calc-row">
                    <button className="calc-button" onClick={calcAction} value="4">4</button>
                    <button className="calc-button" onClick={calcAction} value="5">5</button>
                    <button className="calc-button" onClick={calcAction} value="6">6</button>
                    <button className="calc-button calc-button-op" onClick={operatorAction} value="-">-</button>
                </div>
                <div className="calc-row">
                    <button className="calc-button" onClick={calcAction} value="1">1</button>
                    <button className="calc-button" onClick={calcAction} value="2">2</button>
                    <button className="calc-button" onClick={calcAction} value="3">3</button>
                    <button className="calc-button calc-button-op" onClick={operatorAction} value="+">+</button>
                </div>
                <div className="calc-row">
                    <button className="calc-button width-2" onClick={calcAction}>0</button>
                    <button className="calc-button">.</button>
                    <button className="calc-button calc-button-op" onClick={equalAction}>=</button>
                </div>
            </div>
        <div class="error">
        <h3>{displayError}</h3>
        </div>
        </div>
    )
}

export default Calculator