import { Provider as StateProvider } from 'react-redux';

import RootRoute from './src/routes/root.routes';
import store from './src/redux/store';

import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <StateProvider store={store}>
      <RootRoute />
      <View style={styles.container}>
        <Text>YO Open up App.js to start working on your app!</Text>
        <StatusBar style="auto" />
      </View>
    </StateProvider>
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
