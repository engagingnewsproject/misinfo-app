import React, { useEffect, useState } from "react";
import {
  View,
  SafeAreaView,
  ScrollView,
  TouchableHighlight,
  FlatList,
  Alert,
} from "react-native";
import { SocialIcon } from "react-native-elements";
import { useSelector } from "react-redux";
import MButton from "../../components/MButton";
import MImage from "../../components/MImage";
import MText from "../../components/MText";
import MTextInput from "../../components/MTextInput";
import {
  getResponsiveWidth,
  getWindowHeight,
  getWindowWidth,
} from "../../utils/responsiveDimensions.utils";
import MIcon from "../../components/MIcon";
import { useTranslation } from "react-i18next";
import FirebaseHelper from "../../firebase/FirebaseHelper";
import AppLoading from "../../components/AppLoading/AppLoading";

export default ({ navigation, route }) => {
  const { colorInfo } = useSelector((state) => state.Theme);
  const { t, i18n } = useTranslation();
  const selectedLanguageCode = i18n.language;

  const [selectOption, setSelectOption] = useState(null);
  const [loading, setLoading] = useState(false);
  const [sources, setSources] = useState([]);
  const [customSource, setCustomSource] = useState(null);

  useEffect(() => {
    fetchScoures();
  }, []);

  const fetchScoures = () => {
    setLoading(true);

    FirebaseHelper.fetchARecordFromCollection(
      "tags",
      route.params.topicID,
      (response) => {
        setLoading(false);
        const source = response.response._data.Source.active;
        console.log(source);
        source.push("Other/Otro");
        setSources(source);
      }
    );
  };

  const checkOtherOptionSelected = (item) => {
    if (item !== "Other/Otro") {
      setSelectOption(item);
      setCustomSource(null);
    } else {
      Alert.prompt(
        t("talkingAbout:providesource"),
        t("talkingAbout:where"),
        [
          {
            text: t("talkingAbout:cancel"),
            onPress: () => console.log("Cancel Pressed"),
            style: "cancel"
          },
          {
            text: t("talkingAbout:ok"),
            onPress: text => {setSelectOption(item); setCustomSource(text);}
          }
        ],
        "plain-text"
      );
    }
  };

  const onContinuePress = () => {
    if (!selectOption) {
      Alert.alert(t("talkingAbout:Alert"), t("talkingAbout:option"));
    } else {
      navigation.navigate(global.screens.reportCreation, {
        selectedState: route.params.selectedState,
        selectedCity: route.params.selectedCity,
        selectedTopic: route.params.selectedTopic,
        hearFrom: selectOption,
        topicID: route.params.topicID,
        agency: route.params.agency,
        customSource: customSource,
        customTopic: route.params.customTopic
      });
    }
  };

  return (
    <SafeAreaView
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: colorInfo.colors.backgroundColor,
      }}
    >
      {AppLoading.renderLoading(loading)}
      <View style={{ flex: 1, width: "90%", alignSelf: "center" }}>
        <MImage
          onPress={() => {
            navigation.goBack();
          }}
          source={require("../../assets/back.png")}
          style={{
            width: getResponsiveWidth(20, 30),
            height: getResponsiveWidth(20, 30),
            tintColor: "#37383C",
            marginBottom: 30,
          }}
        />

        <MText
          text={t("talkingAbout:where")}
          // containerStyle = {{width:'100%', paddingHorizontal:20, textAlign: 'left'}}
          style={{
            fontWeight: "bold",
            fontSize: 30,
            marginBottom: 20,
            textAlign: "left",
          }}
        />

        <FlatList
          // data={selectedLanguageCode == "en" ? options : EsOptions}
          data={sources}
          style={{ height: getWindowHeight() / 2 }}
          renderItem={({ item, index }) => {
            return (
              <MButton
                buttonStyle={{
                  width: getWindowWidth() - 100,
                  backgroundColor:
                    item === selectOption ? colorInfo.colors.primary : "gray",
                  marginVertical: 10,
                }}
                buttonTextStyle={{ fontSize: 14 }}
                title={item}
                onPress={() => checkOtherOptionSelected(item)}
              />
            );
          }}
        />

<MText
          text={t("talkingAbout:sourcefrom") + (customSource === null ? selectOption === null ? t("talkingAbout:notselected") : selectOption : customSource)}
          // containerStyle = {{width:'100%', paddingHorizontal:30}}
          style={{
            // fontWeight: "bold",
            fontSize: 15,
            // marginBottom: 20,
            textAlign: "center",
          }}
        />

        {/*{options.map(option => {*/}
        {/*    return <MButton*/}
        {/*        buttonStyle={{width: getWindowWidth() - 100, backgroundColor : option === selectOption ?*/}
        {/*                colorInfo.colors.primary : 'gray', marginVertical:10}}*/}
        {/*        buttonTextStyle={{fontSize: 14}}*/}
        {/*        title={option}*/}
        {/*        onPress={()=>setSelectOption(option)}*/}
        {/*    />*/}
        {/*})*/}
        {/*}*/}
        <View style={{ flex: 1, justifyContent: "flex-end", marginBottom: 10 }}>
          <TouchableHighlight
            underlayColor={colorInfo.colors.transparent}
            onPress={() => {
              onContinuePress();
            }}
          >
            <View
              style={{
                width: 40,
                height: 40,
                borderRadius: 40,
                alignSelf: "flex-end",
                backgroundColor: colorInfo.colors.primary,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <MImage
                source={require("../../assets/arrowBack.png")}
                style={{
                  width: getResponsiveWidth(20, 30),
                  height: getResponsiveWidth(20, 30),
                  transform: [{ rotate: "180deg" }],
                }}
                imageStyle={{
                  tintColor: "white",
                }}
              />
            </View>
          </TouchableHighlight>
        </View>
      </View>
    </SafeAreaView>
  );
};
