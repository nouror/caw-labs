import React, { useState } from 'react';

export function DivCreator() {
    const [height, setHeight] = useState("");
    const [width, setWidth] = useState("");
    const [backgroundColor, setBackgroundColor] = useState("");
    const [divs, setDivs] = useState([]);
    
    const handleSubmit = (e) => {
        e.preventDefault();
        if (height && width && backgroundColor) {
            const newDiv = { 
                height: height.includes('px') ? height : height + 'px',
                width: width.includes('px') ? width : width + 'px',
                backgroundColor, 
                id: Date.now() 
            };
            setDivs([...divs, newDiv]);
            setHeight("");
            setWidth("");
            setBackgroundColor("");
        }
    };
    
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input 
                    type="text" 
                    placeholder="Height (ex: 100px)" 
                    value={height}
                    onChange={(e) => setHeight(e.target.value)}
                />
                <input 
                    type="text" 
                    placeholder="Width (ex: 200px)" 
                    value={width}
                    onChange={(e) => setWidth(e.target.value)}
                />
                <input 
                    type="text" 
                    placeholder="Background Color (ex: red, #ff0000)" 
                    value={backgroundColor}
                    onChange={(e) => setBackgroundColor(e.target.value)}
                />
                <button type="submit">Add Div</button>
            </form>
            
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px', padding: '20px' }}>
                {divs.map(div => (
                    <div 
                        key={div.id}
                        style={{
                            height: div.height,
                            width: div.width,
                            backgroundColor: div.backgroundColor,
                        }}
                    ></div>
                ))}
            </div>
        </div>
    );
}