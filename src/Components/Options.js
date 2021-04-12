import React, { useContext, useState } from 'react'
import {SocketContext} from "../SocketContext"
import {CopyToClipboard} from 'react-copy-to-clipboard'
import "./styles.css"



const Options = ({children}) => {
    const {me, callAccepted, name, setName, callEnded, leaveCall,callUser} = useContext(SocketContext);
    const [idToCall, setIdToCall] = useState('');
    const [copied, setCopied] = useState(false);
    const [showTab, setShowTab] = useState(false);

    const InfoTab=()=>{
        setShowTab(false);
    }
    const CallTab=()=>{
        setShowTab(true);
    }

    return (
        <>
         {
        copied && 
        <div class="alert alert-warning alert-dismissible fade show" role="alert">
        <strong>Heyy {name} !!</strong> Your unique ID has been copied to clipboard. Share with friends to receive a call.
        <button type="button" class="close" onClick={()=>setCopied(false)} >
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
    }
        <div className="row-fluid my-3">
            <div className="col-lg-4 col-md-4 col-sm-12 mx-auto">
            <div className="tab_container row-fluid">
            <div className={ showTab ? "d-none" : "col-lg-10 col-md-10 col-sm-12 mx-auto tabs"}>
                <h4>Account Info: </h4>
                <input className="my-2" value={name} placeholder="Enter Name" onChange={e=>setName(e.target.value)} />
                <CopyToClipboard text={me} >
                    <button className="btn btn-info btn-md btn-block my-2" onClick={()=>setCopied(true)}>
                        Click To Get Unique ID
                    </button>
                </CopyToClipboard>
            </div>
           
            <div className={ showTab ?   "col-lg-10 col-md-10 col-sm-12 mx-auto tabs" : "d-none"}>
                <h4>Make a Call: </h4>
                <input className="my-2" placeholder="Enter Friends ID" value={idToCall} onChange={e=>setIdToCall(e.target.value)} />
                {
                    callAccepted && !callEnded ?
                    (
                        <button className="btn btn-danger btn-md btn-block my-2" onClick={leaveCall}>Hang Up <i class="fas fa-video-slash"></i> </button>
                    ):
                    (
                        <button className="btn btn-success btn-md btn-block my-2" onClick={()=> callUser(idToCall)}>  Call <i class="fas fa-video"></i> </button>
                    )
                }
          
            </div>
            <div className="tab_footer bg-info">
                <button className="btn btn-info info_btn " onClick={InfoTab} > <i class="fas fa-receipt"></i> Info </button>
                <button className="btn btn-info call_btn " onClick={CallTab} > <i class="fas fa-mobile-alt"></i> Place a call  </button>
            </div>
            </div>
           
            </div>
        </div>
      
        
            

            {children}
       

        </>
    )
}

export default Options
