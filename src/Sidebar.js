import './Sidebar.css'
import tempicon from './icons/pfp-icon.svg'
import homeIcon from './icons/home-icon.png'
import shortsIcon from './icons/shorts-icon.png'
import subscriptionsIcon from './icons/subscriptions-icon.png'
import yourChannelIcon from './icons/your-channel-icon.png'
import historyIcon from './icons/history-icon.png'
import playlistsIcon from './icons/playlists-icon.png'
import yourVideosIcon from './icons/your-videos-icon.png'
import watchLaterIcon from './icons/watch-later-icon.png'
import likedVideosIcon from './icons/liked-videos-icon.png'
import pewdiepieIcon from './icons/pewdiepie.jpg'

function Sidebar(){
    return (
        <div className="sidebar">
            <div><img src={homeIcon}/>home</div>
            <div><img src={shortsIcon}/>Shorts</div>
            <div><img src={subscriptionsIcon}/>Subscriptions</div>
            <hr />
            <div>You</div>
            <div><img src={yourChannelIcon}/>Your channel</div>
            <div><img src={historyIcon}/>History</div>
            <div><img src={playlistsIcon}/>Playlists</div>
            <div><img src={yourVideosIcon}/>Your videos</div>
            <div><img src={watchLaterIcon}/>Watch later</div>
            <div><img src={likedVideosIcon}/>Liked videos</div>
            <hr />
            <div>Subscriptions</div>
            <div><img src={pewdiepieIcon} className='pewdiepie-pfp'/>pewdiepie</div>
        </div>
    )
}

export default Sidebar