import { StyleSheet } from "react-native"

const styles = StyleSheet.create({
    container: {
        position: "absolute", // to always display above the components
        top: '5%',
        zIndex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
        paddingHorizontal: 16
    },
    logo: {
        width: 100,
        height: 25,
        resizeMode: 'contain'
    },
    menu: {
        width: 25,
        height: 25
    }
})

export default styles