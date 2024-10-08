import './Sidebar.css'
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
            <div><img src={homeIcon} alt='home icon'/>home</div>
            <div><img src={shortsIcon} alt='shorts icon'/>Shorts</div>
            <div><img src={subscriptionsIcon} alt='subscriptions icon'/>Subscriptions</div>
            <hr />
            <div>You</div>
            <div><img src={yourChannelIcon} alt='your channel icon'/>Your channel</div>
            <div><img src={historyIcon} alt='history icon'/>History</div>
            <div><img src={playlistsIcon} alt='playlists icon'/>Playlists</div>
            <div><img src={yourVideosIcon} alt='your videos icon'/>Your videos</div>
            <div><img src={watchLaterIcon} alt='watch later icon'/>Watch later</div>
            <div><img src={likedVideosIcon} alt='liked videos icon'/>Liked videos</div>
            <hr />
            <div>Subscriptions</div>
            <div><img src={pewdiepieIcon} className='pewdiepie-pfp' alt='pewdiepie pfp'/>pewdiepie</div>
        </div>
    )
}

export default Sidebar