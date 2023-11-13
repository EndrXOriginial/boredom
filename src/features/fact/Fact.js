import React from "react";

export default function factSlice() {

    return (
        <div className="fact">
            <div className="fact-div">
                <p id="fact-text" className="fact-text">Press the button</p>
            </div>
            <div className="fact-buttons">
                <Button>Add to favorites</Button>
                <Button>Give me another one</Button>
            </div>
        </div>
    )
}