import React, { useState } from 'react';

//1.ClickMe Button
export function ClickMe() {
    const [clicked, setClicked] = useState(false);
    
    return (
        <div>
            <button onClick={() => setClicked(true)}>ClickMe</button>
            {clicked && <p>Clicked</p>}
        </div>
    );
}

//2.Toggle Button
export function ToggleButton() {
    const [isClicked, setIsClicked] = useState(false);
    
    return (
        <div>
            <button onClick={() => setIsClicked(!isClicked)}>Toggle</button>
            <p>{isClicked ? "Clicked" : "Not Clicked"}</p>
        </div>
    );
}

//3.Three Buttons
export function ThreeButtons() {
    const [clickedButton, setClickedButton] = useState(null);
    
    return (
        <div>
            <button onClick={() => setClickedButton(1)}>Button 01</button>
            <button onClick={() => setClickedButton(2)}>Button 02</button>
            <button onClick={() => setClickedButton(3)}>Button 03</button>
            {clickedButton && <p>button #{clickedButton} was clicked</p>}
        </div>
    );
}

//4.Counter
export function Counter() {
    const [count, setCount] = useState(0);
    
    return (
        <div>
            <h1>{count}</h1>
            <button onClick={() => setCount(count + 1)}>Inc</button>
            <button onClick={() => setCount(count - 1)}>Dec</button>
        </div>
    );
}