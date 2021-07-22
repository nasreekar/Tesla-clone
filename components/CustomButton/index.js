import React from 'react'
import { Text, TouchableOpacity, View } from 'react-native'
import { buttonEnum } from '../../utils/buttonEnum'
import styles from './styles'

const CustomButton = (props) => {
    const { type, title, onPress } = props
    const buttonBackgroundColor = type === buttonEnum.Primary ? '#171A20CC' : '#FFFFFFA6'
    const buttonTextColor = type === buttonEnum.Primary ? '#FFFFFF' : '#171A20'

    return (
        <View style={styles.buttonContainer}>
            <TouchableOpacity
                style={[styles.buttonStyle, { backgroundColor: buttonBackgroundColor }]}
                onPress={onPress}>
                <Text style={[styles.buttonText, { color: buttonTextColor }]}>{title}</Text>
            </TouchableOpacity>
        </View>
    );
}

export default CustomButton;