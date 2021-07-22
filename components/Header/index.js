import React from 'react'
import styles from './styles'
import { View, Image } from 'react-native'

const Header = (props) => {
    return (
        <View style={styles.container}>
            <Image style={styles.logo} source={require('../../assets/images/logo.png')}></Image>
            <Image style={styles.menu} source={require('../../assets/images/menu.png')}></Image>
        </View>
    )

}

export default Header