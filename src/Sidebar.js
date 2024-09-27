import './Sidebar.css'
import tempicon from './icons/pfp-icon.svg'

function Sidebar(){
    return (
        <div className="sidebar">
            <div><img src={tempicon}/>home</div>
            <div>Shorts</div>
            <div>Subscriptions</div>
            <hr />
            <div>You</div>
            <div>Your channel</div>
            <div>History</div>
            <div>Playlists</div>
            <div>Your videos</div>
            <div>Watch later</div>
            <div>Liked videos</div>
            <hr />
            <div>Subscriptions</div>
        </div>
    )
}

export default Sidebar