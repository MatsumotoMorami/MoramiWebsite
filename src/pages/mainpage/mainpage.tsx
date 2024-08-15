import { useState } from "react";

export default function MainPage() {
    const [isMute, setIsMute] = useState(true);
    
    return (
        <div className="flex w-full">
            <div className="fixed top-0 left-0 w-full">
                <Main setIsMute={setIsMute} isMute={isMute} />
                <BackgroundVideo isMute={isMute} />
            </div>
        </div>
    );
}

function BackgroundVideo({ isMute }) {
    return (
        <div className="relative w-full h-screen overflow-hidden">
            <video
                className="absolute top-1/2 left-1/2 w-auto min-w-full min-h-full max-w-none transform -translate-x-1/2 -translate-y-1/2"
                autoPlay
                loop
                playsInline
                muted={isMute}
            >
                <source src="/bg-videos/pepe_1.mp4" type="video/mp4" />
                您的浏览器不支持视频标签。
            </video>
            <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50" />
            <div className="absolute top-0 left-0 w-full h-full bg-white opacity-60" />
            <div className="absolute top-0 left-0 w-full h-full" style={{
                backgroundImage: 'linear-gradient(135deg, rgba(255, 255, 255, 0.2) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, 0.2) 50%, rgba(255, 255, 255, 0.2) 75%, transparent 75%, transparent)',
                backgroundSize: '10px 10px',
                opacity: 0.5
            }} />
        </div>
    );
}

function NavigatorText({ text, onClick }) {
    return (
        <header className="flex flex-row h-16 bg-gray-800 text-gray-400 items-center lg:p-2 p-0 w-full">
            <div className="font-bold cursor-pointer lg:text-[1rem] md:text-sm text-[0.6rem]" onClick={onClick}>{text}</div>
        </header>
    );
}

function NavigatorIcon({ svg, onClick }) {
    return (
        <div className="cursor-pointer " onClick={onClick}>
            {svg}
        </div>
    );
}

function Avatar() {
    return (
        <img src=''></img>
    )
}

function Main({ setIsMute, isMute }) {
    return (
        <div>
            <header className="flex flex-row h-16 bg-gray-800 text-gray-400 items-center md:p-4 p-3 w-full">
                <div className="flex items-center md:p-3 sm:p-2 p-1">
                    <div className="sm:visible invisible font-bold lg:p-3 sm:p-1.5 p-0 font-kawaii lg:text-2xl md:text-lg sm:text-sm text-[0rem]" onClick={nameOnClick}>Morami</div>
                </div>
                <div className="ml-auto flex space-x-4 place-items-center">
                    <NavigatorText text="首页" onClick={mainPageOnClick} />
                    <NavigatorText text="简介" onClick={introOnClick} />
                    <NavigatorText text="博客" onClick={blogOnClick} />
                    <NavigatorText text="项目" onClick={projOnClick} />
                    <NavigatorText text="仓库" onClick={repoOnClick} />
                    <NavigatorText text="赞助" onClick={donateOnClick} />
                    <NavigatorText text="关于" onClick={aboutOnClick} />
                    <NavigatorIcon onClick={linkOnClick} svg={<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.0" stroke="currentColor" className="lg:size-5 size-3">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M13.19 8.688a4.5 4.5 0 0 1 1.242 7.244l-4.5 4.5a4.5 4.5 0 0 1-6.364-6.364l1.757-1.757m13.35-.622 1.757-1.757a4.5 4.5 0 0 0-6.364-6.364l-4.5 4.5a4.5 4.5 0 0 0 1.242 7.244" />
                    </svg>} />
                    <NavigatorIcon onClick={() => muteOnClick(setIsMute)} svg={!isMute?<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.0" stroke="currentColor" className="lg:size-5 size-3">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19.114 5.636a9 9 0 0 1 0 12.728M16.463 8.288a5.25 5.25 0 0 1 0 7.424M6.75 8.25l4.72-4.72a.75.75 0 0 1 1.28.53v15.88a.75.75 0 0 1-1.28.53l-4.72-4.72H4.51c-.88 0-1.704-.507-1.938-1.354A9.009 9.009 0 0 1 2.25 12c0-.83.112-1.633.322-2.396C2.806 8.756 3.63 8.25 4.51 8.25H6.75Z" />
                    </svg>:<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.0" stroke="currentColor" class="lg:size-5 size-3">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M17.25 9.75 19.5 12m0 0 2.25 2.25M19.5 12l2.25-2.25M19.5 12l-2.25 2.25m-10.5-6 4.72-4.72a.75.75 0 0 1 1.28.53v15.88a.75.75 0 0 1-1.28.53l-4.72-4.72H4.51c-.88 0-1.704-.507-1.938-1.354A9.009 9.009 0 0 1 2.25 12c0-.83.112-1.633.322-2.396C2.806 8.756 3.63 8.25 4.51 8.25H6.75Z" />
                    </svg>
                    } />
                    {<NavigatorIcon onClick={dockerOnClick} svg={<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.0" stroke="currentColor" className="lg:size-5 size-3">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M13.19 8.688a4.5 4.5 0 0 1 1.242 7.244l-4.5 4.5a4.5 4.5 0 0 1-6.364-6.364l1.757-1.757m13.35-.622 1.757-1.757a4.5 4.5 0 0 0-6.364-6.364l-4.5 4.5a4.5 4.5 0 0 0 1.242 7.244" />
                    </svg>} />}
                </div>
            </header>
            <Avatar></Avatar>
        </div>
    );
}

function nameOnClick() {
    // 处理点击事件
}

function mainPageOnClick() {
    // 处理点击事件
}

function introOnClick() {
    // 处理点击事件
}

function blogOnClick() {
    // 处理点击事件
}

function projOnClick() {
    // 处理点击事件
}

function repoOnClick() {
    // 处理点击事件
}

function donateOnClick() {
    // 处理点击事件
}

function aboutOnClick() {
    // 处理点击事件
}

function linkOnClick() {
    // 处理点击事件
}

function muteOnClick(setIsMute) {
    setIsMute(prevIsMute => {
        const newMuteState = !prevIsMute;
        console.log("新的静音状态:", newMuteState);
        return newMuteState;
    });
}

function dockerOnClick() {
    // 处理点击事件
}