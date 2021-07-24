import React from 'react'
import styles from './styles'
import { View, Image } from 'react-native'

const Header = (props) => {
    return (
        <View style={styles.container}>
            <Image testID="Tesla logo" style={styles.logo} source={require('../../assets/images/logo.png')}></Image>
            <Image testID="Menu Icon" style={styles.menu} source={require('../../assets/images/menu.png')}></Image>
        </View>
    )

}

export default Header