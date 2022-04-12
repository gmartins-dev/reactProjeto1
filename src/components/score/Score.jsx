
import styles from './Score.module.css'
import Icon from '../icon/Icon'


export default function Score ( {circleWinnerScore, xWinnerScore} ){
    return(

        <>
            <h4>Score:</h4>
            <div className={styles.score}>

                <div className={styles.scoreContent}>
                    <Icon iconName="circle" />
                    <h2>{circleWinnerScore}</h2>
                </div>

                <div className={styles.scoreContent}>
                    <Icon iconName="x" />
                    <h2>{xWinnerScore}</h2>
                </div>

            </div>
        </>
    )

}