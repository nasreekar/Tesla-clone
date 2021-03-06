import { StyleSheet, Dimensions } from "react-native"
import { appColors } from "../../utils/appColors";

const styles = StyleSheet.create({
    carContainer: {
        width: '100%',
        height: Dimensions.get('window').height
    },
    backgroundImage: {
        width: '100%',
        height: '100%',
        resizeMode: 'cover',
        position: 'absolute'
    },
    infoContainer: {
        marginTop: '25%', // passing a relative margin at the moment
        width: '100%',
        alignItems: 'center'
    },
    title: {
        fontSize: 32,
        fontWeight: 'bold',
        color: appColors.title
    },
    subtitle: {
        fontSize: 16,
        color: appColors.subtitle
    },
    buttonsContainer: {
        width: '100%',
        position: 'absolute',
        bottom: 48
    },
    subtitleCta: {
        textDecorationLine: "underline"
    }
});

export default styles;