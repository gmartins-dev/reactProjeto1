
import styles from './Score.module.css'
import Icon from '../icon/Icon'


export default function Score (){
    return(

        <>
            <h4>Score:</h4>
            <div className={styles.score}>

                <div className={styles.scoreContent}>
                    <Icon iconName="circle" />
                    <h2>0</h2>
                </div>

                <div className={styles.scoreContent}>
                    <Icon iconName="x" />
                    <h2>0</h2>
                </div>

            </div>
        </>
    )

}