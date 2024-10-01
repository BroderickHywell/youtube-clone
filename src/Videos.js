import './Videos.css'
import thumbnail from './video thumbnails/Screenshot 2022-03-09 165859.png'
import thumbnail2 from './video thumbnails/Screenshot 2022-03-08 143750.png'
import pfpIcon from './icons/pfp-icon.svg'

function Videos(){
    return (
        <div className='Videos'>
            <div className='video'>
                <img src={thumbnail} alt='video thumbnail' className='thumbnail'/>
                <div className='video-data'>
                    <img src={pfpIcon} alt='pfp icon' className='video-pfp-icon'/>
                    <div className='video-desc'>
                        <span>video title</span>
                        <span>creator</span>
                        <span>views-age</span>
                    </div>
                </div>
            </div>
            <div className='video'>
                <img src={thumbnail2} alt='video thumbnail' className='thumbnail'/>
                <div className='video-data'>
                    <img src={pfpIcon} alt='pfp icon' className='video-pfp-icon'/>
                    <div className='video-desc'>
                        <span>video title</span>
                        <span>creator</span>
                        <span>views-age</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Videos