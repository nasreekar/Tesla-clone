import React from 'react'
import { Alert, Text, View, ImageBackground } from 'react-native'
import { buttonEnum } from '../../utils/buttonEnum'
import CustomButton from '../CustomButton'
import styles from './styles'

const CarItem = (props) => {
    const { name, tagline, taglineCTA, image } = props.car
    const buttonTitle = name.includes("Solar") ? 'Order Now' : 'Custom Order'
    const buttonSubtitle = name.includes("Solar") ? 'Learn More' : 'Existing Inventory'

    return (
        < View style={styles.carContainer} >
            <ImageBackground source={image} style={styles.backgroundImage} />

            <View style={styles.infoContainer}>
                <Text style={styles.title}>{name}</Text>
                <Text style={styles.subtitle}>
                    {tagline}{' '}
                    <Text
                        style={styles.subtitleCta}
                        onPress={() => Alert.alert(`Touchless pressed`)}
                    >
                        {taglineCTA}
                    </Text>
                </Text>
            </View>

            <View style={styles.buttonsContainer}>
                < CustomButton
                    type={buttonEnum.Primary}
                    title={buttonTitle}
                    onPress={() =>
                        Alert.alert(`Custom Order is pressed`)
                    } />
                <CustomButton
                    type={buttonEnum.Secondary}
                    title={buttonSubtitle}
                    onPress={() =>
                        Alert.alert(`Existing Inventory is pressed`)
                    } />
            </View>
        </View >
    )
}

export default CarItem;