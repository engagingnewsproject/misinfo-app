import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { useSelector } from "react-redux";
import { Icon } from "react-native-elements";
import { useTranslation } from "react-i18next";

import HomeScreen from "../screens/tab.screens/HomeScreen";
import SettingScreen from "../screens/tab.screens/SettingScreen";

const Tab = createBottomTabNavigator();

function BottomTabRoute() {
  const { colorInfo } = useSelector((state) => state.Theme);
  const { t, i18n } = useTranslation();

  return (
    <Tab.Navigator
      tabBarOptions={{
        activeTintColor: colorInfo.colors.primary,
        labelStyle: {
          fontSize: 12,
          fontWeight: "600",
          paddingVertical: 2,
        },
      }}
    >
      <Tab.Screen
        name={global.screens.home}
        component={HomeScreen}
        options={{
          tabBarLabel: t("navigate:home"),
          tabBarIcon: ({ color, size }) => (
            <Icon name="home" type="ionicons" color={color} size={1.2 * size} />
          ),
        }}
      />
      <Tab.Screen
        name={global.screens.setting}
        component={SettingScreen}
        options={{
          tabBarLabel: t("navigate:setting"),
          tabBarIcon: ({ color, size }) => (
            <Icon
              name="settings"
              type="ionicons"
              color={color}
              size={1.2 * size}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

export default BottomTabRoute;
