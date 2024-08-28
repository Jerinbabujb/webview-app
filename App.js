import React, { useState } from 'react';
import { View, StyleSheet, Image } from 'react-native';
import { WebView } from 'react-native-webview';

export default function App() {
  const [loading, setLoading] = useState(true);

  const handleLoadStart = () => {
    setLoading(true);
  };

  const handleLoadEnd = () => {
    setLoading(false);
  };

  return (
    <View style={styles.container}>
      {loading && (
        <View style={styles.loadingContainer}>
          <Image
            source={require('./assets/favicon.png')}
            style={styles.loadingIcon}
          />
        </View>
      )}
      <WebView
        source={{ uri: 'https://tragobook.com' }}
        style={styles.webview}
        onLoadStart={handleLoadStart}
        onLoadEnd={handleLoadEnd}
        startInLoadingState={true}
        backgroundColor="white"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white', 
  },
  webview: {
    flex: 1,
  },
  loadingContainer: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(255, 255, 255, 0.8)', 
  },
  loadingIcon: {
    width: 100, 
    height: 100, 
  },
});
