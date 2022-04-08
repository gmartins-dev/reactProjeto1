import Title from '../title/Title'
import Subtitle from '../subtitle/Subtitle'
import styles from './Header.module.css'

function Header (){

    return(
        <div className={styles.header}>
        <Title>Tic Tac Toe Game</Title>
        <Subtitle>Made using ReactJS</Subtitle>
        <Subtitle>By @guilhermemm-dev</Subtitle>
        </div>
    )

}

export default Header