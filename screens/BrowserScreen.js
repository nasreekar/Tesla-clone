import React from 'react'
import { StyleSheet, View } from 'react-native';
import { WebView } from 'react-native-webview';

const BrowserScreen = ({route}) => {
    const { redirectUrl } = route.params;
    return(
        <View style = {styles.container}>
            <WebView 
                style={styles.webview}
                source={{ uri: redirectUrl }}
            />
       </View>
    )
}

export default BrowserScreen

const styles = StyleSheet.create({
    container: {
        top: '5%',
        height: '100%'
    },
    webview: {
        flex: 1
    }
 })