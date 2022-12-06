import React, { useRef, useState } from 'react'
import {FaComment, FaHeart, FaMusic, FaShare} from 'react-icons/fa';

const VideoInfo = () => {
    return(
        <div className="flex flex-row">
          <img className='w-[50px] h-[50px] rounded-full ' style={{borderRadius:"40px" ,width:"50px"}} src='https://scontent.fsgn2-2.fna.fbcdn.net/v/t39.30808-6/298423877_2101745286663731_1625699910576863223_n.jpg?stp=cp6_dst-jpg&_nc_cat=103&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=nKz8lzoRIIIAX9LRIrK&_nc_ht=scontent.fsgn2-2.fna&oh=00_AfC_XpnKoGXJg2pZbyvRv13yHej9DnkTh1rQ1cVl17sYsA&oe=638F76DF' alt='avt'/>  
          <div className='ml-3 min-w-[80%]'>
          <div>
            <a href='#' className='text-xl font-bold hover:underline'>Nguyen Hoang Long</a>
            <a href='#' className='text-xl'>Longsupper</a>
          </div>
          <div>
            hay ghe tham Longsupper
          </div>
          <div className='flex flex-row items-center'>
            <FaMusic/> <span className='ml-3'>Bai hat dang phat</span>
          </div>
          </div>
          <div>
            <button className='p-1 pl-3 pr-3 border-2 border-red-400 text-red-400 rounded-md'>Follow</button>
          </div>
        </div>
    )
}
const VideoContent = () => {
    const videoRef = useRef();
    const [playing, setPlaying] = useState(false);
    const handleVideo = () =>{
        if(playing){
            videoRef.current.pause()
            setPlaying(false);
        }else{
            videoRef.current.play()
            setPlaying(true);
        }
    }
    return(
        <div className='flex flex-row '>
            <video
            ref={videoRef}
            onClick={handleVideo} 
            className='w-[80%] max-h-[600px] ml-[50px] rounded-md mt-4' src='https://v16-webapp.tiktok.com/8fc09307372fbb9f2bb516a25314ee5a/638d4d3e/video/tos/useast2a/tos-useast2a-pve-0037-aiso/4b2305d8005644b5baf8637045c8a5f0/?a=1988&ch=0&cr=0&dr=0&lr=tiktok&cd=0%7C0%7C0%7C0&br=520&bt=260&cs=0&ds=3&ft=4b~OyM3a8Zmo03hIH64jV.5UPpWrKsdm&mime_type=video_mp4&qs=0&rc=OzY5ZjhmO2c5Nzk2PDVpNkBpMzN4dGg6ZnJ0ZzMzZjgzM0A0Xi0zM2JfNWMxMi0tYi4tYSNsa18ycjRnXmBgLS1kL2Nzcw%3D%3D&l=202212041945190102450241580BF14A38&btag=80000' loop/>
            <div className='flex flex-col justify-end ml-7'>
                <div className='text-center mb-4'>
                    <div className='w-[40px] h-[40px] rounded-full bg-slate-200 flex items-center justify-center'><FaHeart className='text-xl'/></div>
                    <span>
                        15555
                    </span>
                </div>
                <div className='text-center mb-4'>
                    <div className='w-[40px] h-[40px] rounded-full bg-slate-200 flex items-center justify-center'><FaComment className='text-xl'/></div>
                    <span>
                        15555
                    </span>
                </div>
                <div>
                    <div className='w-[40px] h-[40px] rounded-full bg-slate-200 flex items-center justify-center'><FaShare className='text-xl'/></div>
                    <span>
                        15555
                    </span>
                </div>
            </div>
        </div>
    )
}

const Video = () => {
    return(
        <div className='snap-start max-w-[500px] border-b-2 border-gray-200 pb-10 pt-10'>
            <VideoInfo/>
            <VideoContent/>
        </div>
        
    )
}
export default Video;