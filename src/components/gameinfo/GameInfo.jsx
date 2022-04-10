
import Icon from '../icon/Icon'

import styles from './GameInfo.module.css'

import Button from '../button/Button'

function GameInfo ({ currentPlayer, winner, handleReset, onReset }){

    const shouldEnableButton = () => {

        if(winner !== 0) return true
    }

    return(

        
        <div className={styles.gameInfo}>

        {

            winner === 0 &&
                <>
                    
                    <h4>Next player: </h4>
                    {
                        currentPlayer === 1 && <Icon iconName="circle" />

                    }
                                            {
                        currentPlayer === -1 && <Icon iconName="x" />
                        
                    }
                    
                </>

        }
        {
            winner !== 0 &&
            <>   
            <h4>Finish! Winner: </h4>
            {
                winner === 1 && <Icon iconName="circle" />

            }
                                        
            {
                winner === -1 && <Icon iconName="x" />
                    
            }
            </>
        }
        <Button 
        onClick = {onReset}
        disabled={!shouldEnableButton()}
        >
            Play again
        </Button>
    </div>

    )

}


export default GameInfo