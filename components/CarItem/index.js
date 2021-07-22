import React from 'react'
import { Alert, Text, View, ImageBackground } from 'react-native'
import { buttonEnum } from '../../utils/buttonEnum'
import CustomButton from '../CustomButton'
import styles from './styles'

const CarItem = () => {
    return (
        < View style={styles.carContainer} >
            <ImageBackground source={require('../../assets/images/ModelX.jpeg')} style={styles.backgroundImage} />

            <View style={styles.infoContainer}>
                <Text style={styles.title}>Model S</Text>
                <Text style={styles.subtitle}>Starting at $100000</Text>
            </View>

            <CustomButton
                type={buttonEnum.Primary}
                title="Custom Order"
                onPress={() =>
                    Alert.alert(`Custom Order is pressed`)
                } />

            <CustomButton
                type={buttonEnum.Secondary}
                title="Existing Inventory"
                onPress={() =>
                    Alert.alert(`Existing Inventory is pressed`)
                } />
        </View >
    )
}

export default CarItem;