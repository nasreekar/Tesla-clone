import React from 'react'
import { Text, View, ImageBackground } from 'react-native'
import styles from './styles'

const CarItem = () => {
    return (
        < View style={styles.carContainer} >
            <ImageBackground source={require('../../assets/images/ModelX.jpeg')} style={styles.backgroundImage} />
            <View style={styles.infoContainer}>
                <Text style={styles.title}>Model S</Text>
                <Text style={styles.subtitle}>Starting at $100000</Text>
            </View>
        </View >
    )
}

export default CarItem;