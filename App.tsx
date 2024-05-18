import "react-native-gesture-handler";
import { TouchableOpacity, View } from "react-native";
import { StatusBar } from "expo-status-bar";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import { useEffect, useState } from "react";

import {
  SignInScreen,
  SignUpScreen,
  IdentityVerify,
  SignUpProfile,
  ProfileCompleted,
  ResetPassword,
  SecurityPin,
  SignUpEmailVerify,
  OnBoardingScreen,
  CreateNewPassword,
  Dashboard,
  AuthenticateWithPin,
} from "./screens";
import { BackIcon } from "./assets/svg";
import Toast from "react-native-toast-message";
import { UserAccount } from "./store/userStore";

const Stack = createStackNavigator();

export default function App() {
  // GLOBAL STATE
  const { isAuthenticated } = UserAccount();

  const initialRoute = isAuthenticated ? "AuthenticateWithPin" : "OnBoarding";

  // console.log(initialRoute, isAuthenticated);

  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName={initialRoute}
        screenOptions={{
          headerLeft: (props) => (
            <TouchableOpacity style={{ margin: 12, marginBottom: 13 }}>
              <BackIcon {...props} />
            </TouchableOpacity>
          ),
          title: " ",
        }}
      >
        <Stack.Screen
          name="OnBoarding"
          component={OnBoardingScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen name="SignIn" component={SignInScreen} />
        <Stack.Screen name="SignUp" component={SignUpScreen} />
        <Stack.Screen name="IdentifyVerify" component={IdentityVerify} />
        <Stack.Screen name="ResetPassword" component={ResetPassword} />
        <Stack.Screen name="SignUpProfile" component={SignUpProfile} />
        <Stack.Screen name="SignUpEmailVerify" component={SignUpEmailVerify} />
        <Stack.Screen name="SecurityPin" component={SecurityPin} />
        <Stack.Screen name="ProfileCompleted" component={ProfileCompleted} />
        <Stack.Screen name="CreateNewPassword" component={CreateNewPassword} />
        <Stack.Screen name="Dashboard" component={Dashboard} />
        <Stack.Screen
          name="AuthenticateWithPin"
          component={AuthenticateWithPin}
        />
      </Stack.Navigator>
      <Toast />
    </NavigationContainer>
  );
}
