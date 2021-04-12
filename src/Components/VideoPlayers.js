import React, { useContext } from 'react'
import { SocketContext } from '../SocketContext'
import "./styles.css"

const VideoPlayers = () => {
    const {name, callAccepted, myVideo,userVideo,callEnded,stream,call, leaveCall} = useContext(SocketContext);
    return (
        <>
            <div className="row-fluid">
                <div className="col-md-10 col-sm-12 mx-auto">
                    <center>
                        <h2 className="my-3 head_title"><u>aFaceTimes</u></h2>
                        <h4><u>( A Video Calling App )</u></h4>
                        {/* <small>Powered By webRTC</small> */}
                    </center>
                    <div className="row-fluid">
                        <div className="col-lg-5 col-md-5 col-sm-12 mx-auto video_frame">
                            {/* my own video */}         
                                {
                                    stream && (
                                        <>
                                        <div className="video_tv mx-md-2 ">
                                            <h3 className="text-center text-capitalize" >{name || "Name"}</h3>                                           
                                            <video playsInline ref={myVideo} autoPlay  />
                                        </div>    
                                        </>
                                    )
                                }

                            {/* user's video */}
                                {
                                    callAccepted && !callEnded && (
                                        <>
                                        <div className="video_tv mx-md-2 ">
                                        <div className="">
                                            <h3 className="text-center text-capitalize">{call.name || "Name"}</h3>
                                            <video playsInline ref={userVideo} autoPlay />                                         
                                        </div>
                                            <center><button className="btn btn-danger btn-md btn-block w-75" onClick={leaveCall}>Hang Up <i class="fas fa-video-slash"></i> </button>
                                            </center>
                                        </div>

                                        </>
                                    )
                                }
                        
                        </div>
                    </div>

                </div>
            </div>

        </>
    )
}

export default VideoPlayers
