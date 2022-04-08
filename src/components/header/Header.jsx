import Title from '../title/Title'
import Subtitle from '../subtitle/Subtitle'
import styles from './Header.module.css'
import Icon from "../icon/Icon"




function Header (){

    return(
        <div className={styles.header}>
            <Title>Tic Tac Toe Game</Title>
            <Subtitle>Made using ReactJS</Subtitle>
            <Subtitle>By @guilhermemm-dev</Subtitle>
            <div className={styles.iconContent}>
                <a><Icon 
                iconName="github"
                link="https://github.com/guilhermemm-dev"
                /></a>
            </div>
        </div>





    )

}

export default Header