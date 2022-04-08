import style from './Subtitle.module.css'

function Subtitle ({children}){

    return(

        <h6 className={style.subtitle}>
            {children}
        </h6>

    )


}

export default Subtitle