import React from 'react';
import './Toast.css'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Toast = () => {
    const showToastMessage = () =>{
        toast("CONGRATULATION!!! You are done", {position:"top-center", theme:"dark"})
    }
    return (
        <div>
        <div>
            <button onClick={showToastMessage} className='btn-final'><p>Activity completed</p></button>
        </div>
        <ToastContainer></ToastContainer>
        </div>
    );
};

export default Toast;