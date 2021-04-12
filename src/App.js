import React from 'react'
import Notifications from './Components/Notifications'
import Options from './Components/Options'
import VideoPlayers from './Components/VideoPlayers'

const App = () => {
    return (
        <div>
            <VideoPlayers/>
            <Options>
                <Notifications/>
            </Options>
        </div>
    )
}

export default App
