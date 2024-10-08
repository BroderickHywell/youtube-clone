import './Videos.css'
import pewdiepieVideo from './video thumbnails/pewdiepie-video.png'
import pewdiepieVideo2 from './video thumbnails/pewdiepie-video2.png'
import pewdiepieIcon from './icons/pewdiepie.jpg'

function Videos(){
    return (
        <div className='Videos'>
            <div className='video'>
                <img src={pewdiepieVideo} alt='video thumbnail' className='thumbnail'/>
                <div className='video-data'>
                    <img src={pewdiepieIcon} alt='pfp icon' className='video-pfp-icon'/>
                    <div className='video-desc'>
                        <span className='title-span'>Making Cake</span>
                        <span>pewdiepie</span>
                        <span>10t views - 5 days ago</span>
                    </div>
                </div>
            </div>
            <div className='video'>
                <img src={pewdiepieVideo2} alt='video thumbnail' className='thumbnail'/>
                <div className='video-data'>
                    <img src={pewdiepieIcon} alt='pfp icon' className='video-pfp-icon'/>
                    <div className='video-desc'>
                        <span className='title-span'>CraftMine</span>
                        <span>pewdiepie</span>
                        <span>49t views - 600 decades ago</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Videos