import React, { useContext, useState } from 'react'
import {SocketContext} from "../SocketContext"
import "./styles.css"

const Notifications = () => {
    const { answerCall, callAccepted, call} = useContext(SocketContext);
    const [modal, setModal] = useState(false)
    console.log(call);

    const HideModal =()=>{
        setModal(true)
    }

    return (
        <>
            {call.isReceivingcall && !callAccepted && (
                <>
 
                <div className={modal ? "d-none":"card"}>
                    <div className="card-header cross_btn" >
                        <h5 class="head_title">aFaceTimes</h5>
                        <button type="button" class="close" onClick={HideModal}>
                        <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    
                    <div class="card-body">
                        <center>
                            <h5 class="card-title">{call.name} is calling...</h5>
                            <button className="btn btn-success mx-2" onClick={answerCall}> Answer <i class="fas fa-phone"></i> </button>
                            <button className="btn btn-danger mx-2" onClick={HideModal}> Decline <i class="fas fa-phone-slash"></i> </button>
                        </center>
                    </div>
                </div>
                </>
            )}

        </>
    )
}

export default Notifications
