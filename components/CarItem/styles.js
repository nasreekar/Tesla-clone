import { StyleSheet } from "react-native"

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
        marginTop: '25%', // passing a relative height at the moment
        width: '100%',
        alignItems: 'center'
    },
    title: {
        fontSize: 32,
        fontWeight: '700',
        color: '#393c41'
    },
    subtitle: {
        fontSize: 16,
        color: '#898f9a',
    }
});

export default styles;