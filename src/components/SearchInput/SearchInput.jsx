import React from "react";
import './SearchInput.scss';

export const SearchInput = ({setTargetValue}) => {
    return(
        <div className="input-group input-group-sm mb-3">
            <input type="text" className="form-control search-input"
                   aria-label="Sizing example input"
                   aria-describedby="inputGroup-sizing-sm"
                   onChange={ e => setTargetValue(e.target.value)}
                   placeholder='Search task'
            />
        </div>
    )
}