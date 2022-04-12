
import Icon from '../icon/Icon'

import styles from './GameInfo.module.css'

import Button from '../button/Button'

function GameInfo ({ currentPlayer, winner, handleReset, onReset, isDraw }){

    // const shouldEnableButton = () => {

    //     if(winner !== 0) return true
    //     if(isDraw) return true
    // }

    const shouldEnableButton = () => winner !== 0 || isDraw  //versao mais optimizada/enchuta da funcao acima

    return(

        
        <div className={styles.gameInfo}>

        {

            !isDraw && winner === 0 &&
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
            !isDraw && winner !== 0 &&
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
        {
            isDraw && <h4>Draw! </h4>
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