import { StyleSheet } from "react-native"
import { appColors } from "../../utils/appColors";

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
        marginTop: '25%', // passing a relative margin at the moment
        width: '100%',
        alignItems: 'center'
    },
    title: {
        fontSize: 32,
        fontWeight: '700',
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