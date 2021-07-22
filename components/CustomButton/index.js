import React from 'react'
import { Text, TouchableOpacity, View } from 'react-native'
import { appColors } from '../../utils/appColors'
import { buttonEnum } from '../../utils/buttonEnum'

import styles from './styles'

const CustomButton = (props) => {
    const { type, title, onPress } = props
    const buttonBackgroundColor = type === buttonEnum.Primary ? appColors.primaryButtonColor : appColors.secondaryButtonColor
    const buttonTextColor = type === buttonEnum.Primary ? appColors.primaryButtonTextColor : appColors.secondaryButtonTextColor

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