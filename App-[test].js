import { Provider as StateProvider } from 'react-redux';


import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView, ScrollView, Button } from 'react-native';
import './config/firebase';
import { db } from './config/firebase';
import { doc, getDoc } from 'firebase/firestore';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import ErrorBoundary from 'react-native-error-boundary'
import * as Sentry from 'sentry-expo';

Sentry.init({
  dsn: 'https://620658dfa8ef758cf990508f30a864a0@o204741.ingest.sentry.io/4505988566941696',
  enableInExpoDevelopment: true,
  debug: true, // If `true`, Sentry will try to print out useful debugging information if something goes wrong with sending the event. Set it to `false` in production
});

export default function App() {
  const { colorInfo } = useSelector((state) => state.Theme);
  const auth = getAuth();
  onAuthStateChanged(auth, (user) => {
    if (user) {
      // User is signed in, see docs for a list of available properties
      // https://firebase.google.com/docs/reference/js/auth.user
      const uid = user.uid;
      // ...
    } else {
      // User is signed out
      // ...
    }
  });
  const handleThis = async () => {
    try {
      const docRef = doc(db, "agency", '1b4ytoJanW7joDoKr5yU')
      const docSnap = await getDoc(docRef);
      console.log(docSnap);
      if (docSnap.exists()) {
        console.log("Document data:", docSnap.data());
      } else {
        // docSnap.data() will be undefined in this case
        console.log("No such document!");
      }
    } catch (error) {
      Sentry.Native.captureException(error);
    }
  }
  handleThis()
  
const errorHandler = (error: Error, stackTrace: string) => {
  /* Log the error to an error reporting service */
  console.log(error);
}
  return (
    <ErrorBoundary onError={errorHandler}>
      <Button title='Try!' onPress={ () => { Sentry.captureException(new Error('First error')) }}/>
    <View style={styles.container}>
    <Text>Open up App.js to start working on your app!</Text>
    <StatusBar style="auto" />
    <SafeAreaView
    style={{
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: colorInfo.colors.backgroundColor,
    }}
    >
    {AppLoading.renderLoading(loading)}
    
    <ScrollView
    contentContainerStyle={{
      paddingTop: 30,
      justifyContent: "center",
      alignItems: "center",
    }}
    >
    <MImage
    source={require("./assets/Logo.png")}
    style={{
      width: getResponsiveWidth(80, 120),
      height: getResponsiveWidth(80, 120),
      justifyContent: "center",
      alignItems: "center",
    }}
    />
    <MText
    text={t("welcome:welcome")}
    style={{ fontWeight: "bold", fontSize: 22, paddingTop: 10 }}
    />
    
    <MTextInput
    keyboardType={"email-address"}
    onChangeText={(email) => setEmail(email)}
    value={email}
    containerStyle={{ paddingTop: 20 }}
    inputContainerStyle={{ width: getWindowWidth() - 100 }}
    placeholder={t("welcome:email")}
    />
    <MTextInput
    // containerStyle={{ paddingTop: -20 }}
    secureTextEntry
    onChangeText={(password) => setPassword(password)}
    value={password}
    inputContainerStyle={{ width: getWindowWidth() - 100 }}
    placeholder={t("welcome:password")}
    />
    <MButton
    buttonStyle={{ width: getWindowWidth() - 100 }}
    buttonTextStyle={{ fontSize: 14 }}
    title={t("welcome:login")}
    onPress={() => {
      onLoginPress();
    }}
    />
    <View
    style={{
      width: getWindowWidth() - 100,
      alignItems: "flex-end",
      paddingVertical: 10,
    }}
    >
    <MText
    onPress={() => {
      onForgetPasswordPress();
    }}
    text={t("welcome:forgot")}
    style={{ fontWeight: "bold", fontSize: 12 }}
    />
    </View>
    <View
    style={{
      width: getWindowWidth() - 100,
      alignItems: "center",
      paddingVertical: 10,
    }}
    >
    <MText text={t("welcome:orloginwith")} style={{ fontSize: 15 }} />
    </View>
    <View
    style={{
      flexDirection: "row",
      width: getWindowWidth() - 100,
      justifyContent: "space-around",
      paddingVertical: 5,
    }}
    >
    <SocialIcon
    type={"google"}
    button
    style={{ width: 80, borderRadius: 10 }}
    light
    onPress={() => {
      onPressGoogle();
    }}
    />
    {/* <SocialIcon
    type={"facebook"}
    button
    style={{ width: 80, borderRadius: 10 }}
    light
    />
    <SocialIcon
    type={"twitter"}
    button
    style={{ width: 80, borderRadius: 10 }}
    light
  /> */}
  </View>
  <View
  style={{
    flexDirection: "row",
    width: getWindowWidth() - 100,
    justifyContent: "center",
    paddingVertical: 20,
    paddingBottom: 50
  }}
  >
  <MText text={t("welcome:noaccount")} style={{ fontSize: 14 }} />
  <MText
  text={t("welcome:signup")}
  onPress={onSignUpPress}
  style={{
    color: colorInfo.colors.primary,
    fontWeight: "bold",
    fontSize: 15,
  }}
  />
  </View>
  {/* <View> */}
  <SwitchSelector
  options={LANGUAGES}
  initial={i18n.language == "en" ? 0 : 1}
  onPress={value => setLanguage(value)}
  // textColor={Color.black} //'#7a44cf'
  // selectedColor={'#2167D4'}
  buttonColor={'#2167D4'}
  // borderColor={'#EDE8E4'}
  backgroundColor={'#EDE8E4'}
  bold={true}
  />
  {/* </View> */}
  </ScrollView>
  </SafeAreaView>
    </View>
    </ErrorBoundary>
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
