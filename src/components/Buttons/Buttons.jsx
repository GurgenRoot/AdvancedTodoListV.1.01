import React from "react";

export const EditButton = ({task,setEditBtnVisible,inpId}) => {
    return(
        <button
            className='btn btn-primary'
            onClick={() => {
                inpId(task.id);
                setEditBtnVisible(true)
            }}>Edit
        </button>
    )
}

export const GoBackButton = ({setEditBtnVisible,editBtnVisible,setInputId}) => {
    return(
        <button className='btn btn-primary' onClick={ () => {
            setEditBtnVisible(!editBtnVisible);
            setInputId(null);
        }}>Back</button>
    )
}