import React from 'react';

export function SortButton(props){
    return (
        <div>
            <div>
                <button onClick={() => props.sortClick(-1)}>前一步</button>
            </div>
            <br/>
            <div>
                <button onClick={() => props.sortClick(1)}>后一步</button>
            </div>
        </div>
    );
}
