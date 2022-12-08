import React, {useState} from 'react';
export const Video = ({video}) => {

   const embed = video.embed;
   const [start, setStart] = useState(false);
    return (
        <section className="video">
            <div className="wrap">
                <div className="wrap-left">
                    <h1 className='video-title'>embed {embed} </h1>
                    <p className='video-text'>{video.text}</p>
                    <a href={video.link} className="video-link">{video.link}</a>
                </div>
                <div className="wrap-right">
                    <div className="block">
                        {
                            !start?
                            <>
                                <button onClick={() => {
                                    setStart(true)
                                }} className="play">
                                    <svg height="100%" version="1.1" viewBox="0 0 68 48" width="100%">
                                        <path className="ytp-large-play-button-bg"
                                              d="M66.52,7.74c-0.78-2.93-2.49-5.41-5.42-6.19C55.79,.13,34,0,34,0S12.21,.13,6.9,1.55 C3.97,2.33,2.27,4.81,1.48,7.74C0.06,13.05,0,24,0,24s0.06,10.95,1.48,16.26c0.78,2.93,2.49,5.41,5.42,6.19 C12.21,47.87,34,48,34,48s21.79-0.13,27.1-1.55c2.93-0.78,4.64-3.26,5.42-6.19C67.94,34.95,68,24,68,24S67.94,13.05,66.52,7.74z"
                                              fill="#f00"></path>
                                        <path d="M 45,24 27,14 27,34" fill="#fff"></path>
                                    </svg>
                                </button>
                                <img src={`https://i.ytimg.com/vi/${embed}/hqdefault.jpg`} alt={"youtoobe"}/>
                            </>:
                            <iframe
                            src={"https://www.youtube.com/embed/"+embed+"?autoplay=1&mute=1"}
                            title="Самые красивые цвета природы в 4K" frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen/>
                        }
                    </div>
                </div>
            </div>
        </section>
    );
};

