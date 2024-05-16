import "react-native-gesture-handler";
import { TouchableOpacity, View } from "react-native";
import { StatusBar } from "expo-status-bar";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";

import {
  SignInScreen,
  SignUpScreen,
  IdentityVerify,
  OTPVerify,
  ProfileCompleted,
  ResetPassword,
  SecurityPin,
  ProfileUpdate,
  OnBoardingScreen,
  CreateNewPassword,
  Dashboard,
} from "./screens";
import { BackIcon } from "./assets/svg";

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
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
        <Stack.Screen name="OTPVerify" component={OTPVerify} />
        <Stack.Screen name="ProfileUpdate" component={ProfileUpdate} />
        <Stack.Screen name="SecurityPin" component={SecurityPin} />
        <Stack.Screen name="ProfileCompleted" component={ProfileCompleted} />
        <Stack.Screen name="CreateNewPassword" component={CreateNewPassword} />
        <Stack.Screen name="Dashboard" component={Dashboard} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
