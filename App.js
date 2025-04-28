import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import * as SplashScreen from 'expo-splash-screen';
import { useEffect, useState } from 'react';

export default function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const prepararAplicacion = async () => {
      await SplashScreen.preventAutoHideAsync();
      try {
        await new Promise(resolve => setTimeout(resolve, 5000));
      } catch (e) {
        console.warn(e);
      } finally {
        setIsLoading(false);
        await SplashScreen.hideAsync();
      }
    };

    prepararAplicacion();
  }, []);

  if (isLoading) {
    return null;
  }

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Text>¡Bienvenido a Eventutti brother</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
