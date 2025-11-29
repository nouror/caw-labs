import React, { useState } from 'react';
const ClickableButton = () => {
    const [isClicked, setIsClicked] = useState(false);

    const handleClick = () => {
        setIsClicked(true);
    };

    return (
        <div>
            <button onClick={handleClick}>Click Me!</button>
            {isClicked && <p>Clicked!</p>}
        </div>
    );
};

export default ClickableButton;