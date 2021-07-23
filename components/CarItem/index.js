import React from 'react'
import { Alert, Text, View, ImageBackground } from 'react-native'
import { buttonEnum } from '../../utils/buttonEnum'
import CustomButton from '../CustomButton'
import styles from './styles'
import { useNavigation } from '@react-navigation/native';

const CarItem = (props) => {
    const { name, tagline, taglineCTA, image, primaryCTA } = props.car
    const buttonTitle = name.includes("Solar") ? 'Order Now' : 'Custom Order'
    const buttonSubtitle = name.includes("Solar") ? 'Learn More' : 'Existing Inventory'
    const navigation = useNavigation();
    const touchlessDeliveryUrl = 'https://www.tesla.com/support/taking-delivery?redirect=no'

    return (
        < View style={styles.carContainer} >
            <ImageBackground source={image} style={styles.backgroundImage} />

            <View style={styles.infoContainer}>
                <Text style={styles.title}>{name}</Text>
                <Text style={styles.subtitle}>
                    {tagline}{' '}
                    <Text
                        style={styles.subtitleCta}
                        onPress={() => navigation.navigate('Browser', {redirectUrl: touchlessDeliveryUrl} )}
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
                        navigation.navigate('Browser', {redirectUrl: primaryCTA} )
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