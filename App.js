import { Provider as StateProvider } from 'react-redux';

import RootRoute from './src/routes/root.routes';
import store from './src/redux/store';
import './src/constants/IMLocalize';

import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  global.screens = {
    login: 'LoginScreen'
  }
  
  global.routes = {
    authRoute: 'AuthRoute',
    appRoute: 'AppRoute',
    bottomTabRoute: 'BottomTabRoute',
  }
  console.log('dude!');
  return (
    <StateProvider store={store}>
      <RootRoute />
      <View style={styles.container}>
        <Text>YO dude Open up App.js to start working on your app!</Text>
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
