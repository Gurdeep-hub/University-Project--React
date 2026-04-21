import './about.css';
import about_img from '../../edusity_assets/about.png';
import play_icon from '../../edusity_assets/play-icon.png';
export function About({setPlaystate}) {
    return(
        <div className='about'>
            <div className="about-left">
                <img src={about_img} className='about-img' />
                <img src={play_icon} className='play-icon' onClick={()=>{
                    setPlaystate(true);
                }}/>
            </div>
            <div className="about-right">
                <h3>ABOUT UNIVERSITY</h3>
                <h2>Nurturing Tommorow's Leaders Today</h2>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laboriosam, laborum, delectus, quo possimus doloribus reprehenderit fugiat quisquam molestiae exercitationem ea perspiciatis! Quaerat qui, atque doloremque quia id beatae quod necessitatibus!
                Suscipit impedit tempora aliquam perferendis natus. Delectus dolor iure officiis excepturi exercitationem culpa, quidem aut tenetur provident blanditiis id vel doloremque non impedit, cupiditate obcaecati quo. Molestias in suscipit aspernatur?</p>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laboriosam, laborum, delectus, quo possimus doloribus reprehenderit fugiat quisquam molestiae exercitationem ea perspiciatis! Quaerat qui, atque doloremque quia id beatae quod necessitatibus!
                Suscipit impedit tempora aliquam perferendis natus. Delectus dolor iure officiis excepturi exercitationem culpa, quidem aut tenetur provident blanditiis id vel doloremque non impedit, cupiditate obcaecati quo. Molestias in suscipit aspernatur?</p>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laboriosam, laborum, delectus, quo possimus doloribus reprehenderit fugiat quisquam molestiae exercitationem ea perspiciatis! Quaerat qui, atque doloremque quia id beatae quod necessitatibus!
                Suscipit impedit tempora aliquam perferendis natus. Delectus dolor iure officiis excepturi exercitationem culpa, quidem aut tenetur provident blanditiis id vel doloremque non impedit, cupiditate obcaecati quo. Molestias in suscipit aspernatur?</p>
              
            </div>
        </div>
    );
}