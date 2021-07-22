import React from 'react'
import { Text, View, StyleSheet, ImageBackground } from 'react-native'

const CarItem = () => {
    return (
        < View style={styles.carContainer} >
            <ImageBackground source={require('../assets/ModelX.jpeg')} style={styles.backgroundImage} />
            <View style={styles.infoContainer}>
                <Text style={styles.title}>Model S</Text>
                <Text style={styles.subtitle}>Starting at $100000</Text>
            </View>
        </View >
    )
}

const styles = StyleSheet.create({
    carContainer: {
        width: '100%',
        height: '100%' // to take the whole space it is contained in
    },
    backgroundImage: {
        width: '100%',
        height: '100%',
        resizeMode: 'cover',
        position: 'absolute'
    },
    infoContainer: {
        marginTop: '25%', // passing a relative height at the moment
        width: '100%',
        alignItems: 'center'
    },
    title: {
        fontSize: 32,
        fontWeight: '700'
    },
    subtitle: {
        fontSize: 16,
        color: '#5c5e62'
    }
})

export default CarItem;