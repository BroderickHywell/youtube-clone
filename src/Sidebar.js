import './Sidebar.css'
import tempicon from './icons/pfp-icon.svg'

function Sidebar(){
    return (
        <div className="sidebar">
            <div><img src={tempicon}/>home</div>
            <div><img src={tempicon}/>Shorts</div>
            <div><img src={tempicon}/>Subscriptions</div>
            <hr />
            <div>You</div>
            <div><img src={tempicon}/>Your channel</div>
            <div><img src={tempicon}/>History</div>
            <div><img src={tempicon}/>Playlists</div>
            <div><img src={tempicon}/>Your videos</div>
            <div><img src={tempicon}/>Watch later</div>
            <div><img src={tempicon}/>Liked videos</div>
            <hr />
            <div>Subscriptions</div>
            <div><img src={tempicon}/>channel</div>
            <div><img src={tempicon}/>channel</div>
            <div><img src={tempicon}/>channel</div>
        </div>
    )
}

export default Sidebar