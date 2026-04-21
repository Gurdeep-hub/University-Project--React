import './title.css';
export function Title({subTitle,title}) {
    return(
        <div className='title'>
            <p>{subTitle}</p>
            <h2>{title}</h2>
        </div>
    );
}