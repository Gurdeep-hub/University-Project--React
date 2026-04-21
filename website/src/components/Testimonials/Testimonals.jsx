import './testimonials.css';
import next_icon from '../../edusity_assets/next-icon.png';
import back_icon from '../../edusity_assets/back-icon.png';
import user_1 from '../../edusity_assets/user-1.png';
import user_2 from '../../edusity_assets/user-2.png';
import user_3 from '../../edusity_assets/user-3.png';
import user_4 from '../../edusity_assets/user-4.png';
import { useRef } from 'react';
export function Testimonials() {
    const slider = useRef();
    let tx = 0;
    const slideForward = ()=>{
        if( tx > -50){
            tx -= 25;
        }
        slider.current.style.transform = `translateX(${tx}%)`;
    }
    const slideBackward = ()=>{
         if( tx < 0){
            tx += 25;
        }
        slider.current.style.transform = `translateX(${tx}%)`;
    }

    return(
        <div className='testimonials'>
            <img src={next_icon} alt="" onClick={slideForward} className='next-btn' />
            <img src={back_icon} alt="" onClick={slideBackward} className='back-btn' />
            <div className="slider">
                <ul ref={slider}>
                    <li>
                        <div className="slide">
                            <div className="user-info">
                                <img src={user_1} alt="" />
                                <div>
                                    <h3>Willian Jackson</h3>
                                    <span>Edusity, USA</span>
                                </div>
                            </div>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur et porro natus non. Eveniet laborum libero recusandae dolor vitae. Rerum dolore nulla quos unde perferendis culpa magni illum adipisci delectus!</p>
                        </div>
                    </li>
                    <li>
                        <div className="slide">
                            <div className="user-info">
                                <img src={user_2} alt="" />
                                <div>
                                    <h3>Willian Jackson</h3>
                                    <span>Edusity, USA</span>
                                </div>
                            </div>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur et porro natus non. Eveniet laborum libero recusandae dolor vitae. Rerum dolore nulla quos unde perferendis culpa magni illum adipisci delectus!</p>
                        </div>
                    </li>
                    <li>
                        <div className="slide">
                            <div className="user-info">
                                <img src={user_3} alt="" />
                                <div>
                                    <h3>Willian Jackson</h3>
                                    <span>Edusity, USA</span>
                                </div>
                            </div>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur et porro natus non. Eveniet laborum libero recusandae dolor vitae. Rerum dolore nulla quos unde perferendis culpa magni illum adipisci delectus!</p>
                        </div>
                    </li>
                    <li>
                        <div className="slide">
                            <div className="user-info">
                                <img src={user_4} alt="" />
                                <div>
                                    <h3>Willian Jackson</h3>
                                    <span>Edusity, USA</span>
                                </div>
                            </div>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur et porro natus non. Eveniet laborum libero recusandae dolor vitae. Rerum dolore nulla quos unde perferendis culpa magni illum adipisci delectus!</p>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    );
}