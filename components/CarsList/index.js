import React from 'react'
import { FlatList, SafeAreaView, Dimensions } from 'react-native'
import CarItem from '../CarItem'
import cars from './cars'
import styles from './styles'

const CarsList = () => {
    return (
        <SafeAreaView style={styles.container}>
            <FlatList
                data={cars}
                renderItem={({ item }) => <CarItem car={item} />} //item is the item currently being rendered
                keyExtractor={(item, index) => index.toString()}
                showsVerticalScrollIndicator={false}
                snapToAlignment={'start'}
                decelerationRate={'fast'}  // the speed of animation when the items are moved up and down
                snapToInterval={Dimensions.get('window').height}
            />
        </SafeAreaView>
    );
}

export default CarsList;