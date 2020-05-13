import React from "react";
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
import {CheckIcon} from "../CheckIcons";

const MySwal = withReactContent(Swal);

export const DeleteAlertComponent = ({deleteTaskThunk,task}) => {
    return(
        <button type="button"
                className="btn btn-danger"
                onClick={() => {
                    MySwal.fire({
                        title: 'Are you sure?',
                        text: "You won't be able to revert this!",
                        icon: 'warning',
                        showCancelButton: true,
                        confirmButtonColor: '#3085d6',
                        cancelButtonColor: '#d33',
                        confirmButtonText: 'Yes, delete it!'
                    }).then((result) => {
                        if (result.value) {
                            Swal.fire(
                                'Deleted!',
                                'Your task has been deleted.',
                                'success'
                            )
                            deleteTaskThunk(task.id)
                        }
                    })
                }}
        >
            Remove
        </button>
    )
}

export const CompletedTaskAlert = ({completeTaskThunk,task}) => {
    return(
        <div onClick={ () => {
            MySwal.fire({
                title:  "! HEY did you complete this tasks?",
                text: 'Check it',
                icon: 'question',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: `Yes, I've done!`
            }).then((result) => {
                if (result.value) {
                    Swal.fire(
                        'Congratulations!',
                        'OK You can move on to other task.',
                        'success'
                    )
                    completeTaskThunk(task.id)
                }
            })
        }}
        >
            <CheckIcon color={'grey'}/>
        </div>
    )
}

export const TaskCreatedAlert = () => {
    return(
        Swal.fire({
            position: 'center',
            icon: 'success',
            title: 'Your task has been created',
            showConfirmButton: false,
            timer: 1500
        })
    )
}
