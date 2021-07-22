import React from 'react'
import { Alert, Text, View, ImageBackground } from 'react-native'
import { buttonEnum } from '../../utils/buttonEnum'
import CustomButton from '../CustomButton'
import styles from './styles'

const CarItem = (props) => {
    const { title, subtitle, subtitleCta, imageSource } = props
    return (
        < View style={styles.carContainer} >
            <ImageBackground source={imageSource} style={styles.backgroundImage} />

            <View style={styles.infoContainer}>
                <Text style={styles.title}>{title}</Text>
                <Text style={styles.subtitle}>
                    {subtitle}{' '}
                    <Text
                        style={styles.subtitleCta}
                        onPress={() => Alert.alert(`Touchless pressed`)}
                    >
                        {subtitleCta}
                    </Text>
                </Text>
            </View>

            <View style={styles.buttonsContainer}>
                < CustomButton
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
            </View>
        </View >
    )
}

export default CarItem;