import React, { useEffect } from 'react';
import { Text, SafeAreaView, StyleSheet, View, Animated } from 'react-native';

export default function App() {
  const opacity = new Animated.Value(0.1);

  useEffect(() => {
    Animated.timing(opacity, {
      toValue: 1,
      duration: 1000, 
    }).start();
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Animated.Text style={[styles.text, { opacity }]}>Opacidade</Animated.Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ecf0f1',
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
  },
});
