import React, { useState } from 'react';

//1.Display table as unordered list
export function DisplayTabQ1() {
    const tab = ["hello", "world", "from", "react"];
    
    return (
        <ul>
            {tab.map((item, index) => (
                <li key={index}>{item}</li>
            ))}
        </ul>
    );
}

//2.Rewrite the previous component
export function DisplayTabQ2() {
    const tab = ["hello", "world", "from", "react"];
    
    return (
        <ul>
            {tab.map((item, index) => (
                <li key={index}>Element {index + 1} is: {item}</li>
            ))}
        </ul>
    );
}

//3.Add click to remove element
export function DisplayTabQ3() {
    const [items, setItems] = useState(["hello", "world", "from", "react"]);
    
    const removeItem = (index) => {
        const newItems = items.filter((_, i) => i !== index);
        setItems(newItems);
    };
    
    return (
        <ul>
            {items.map((item, index) => (
                <li key={index} onClick={() => removeItem(index)}>
                    Element {index + 1} is: {item}
                </li>
            ))}
        </ul>
    );
}

//4.Parameterize the DisplayTab
export function DisplayTabQ4({ tab }) {    
  
     return (
        <ul>
            {tab.map((item, index) => (
                <li key={index}>{item}</li>
            ))}
        </ul>
    );

}


