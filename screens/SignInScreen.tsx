import { StyleSheet, Text, View, TextInput } from "react-native";
import React, { useState } from "react";
import { Feather } from "@expo/vector-icons";
import { COLORS } from "../theme";
import { useNavigation } from "@react-navigation/native";
import Button from "../components/Button";
import { TouchableOpacity } from "react-native-gesture-handler";
import { AppleIcon, GoogleIcon } from "../assets/svg";
import RNAnimated from "react-native-animated-component";
import { LoaderWithOverlay } from "../components/Loader";
import { UserAccount } from "../store/userStore";
import { notificationToaster } from "../components/Toast";
import { loginUserAPI } from "../api/auth";

const SignInScreen = () => {
  const navigation = useNavigation<any>();
  const [showPassword, setShowPassword] = useState(true);
  const [loading, setLoading] = useState(false);

  const [errors, setErrors] = useState<any>(null);

  // GLOBAL STATE
  const {
    userInfo: { token },
    saveUser,
  } = UserAccount();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
    device_name: "web",
  });

  const { email, password } = formData;

  const disableBtn = false ? !email || !password : false;

  const onSubmit = async () => {
    setLoading(true);
    const { status, message, data } = await loginUserAPI(formData);
    setLoading(false);
    if (status === "success") {
      setFormData({
        email: "",
        password: "",
        device_name: "web",
      });
      saveUser(data);
      navigation.navigate("Dashboard");
    } else {
      setErrors(data);
      notificationToaster("error", {
        text1: "",
        text2: message,
      });
    }
  };

  return (
    <View style={styles.container}>
      {/* COMPONENT USED  */}
      <LoaderWithOverlay loading={loading} />

      <View style={styles.align}>
        <RNAnimated animationDuration={700} appearFrom="right">
          <Text style={{ fontWeight: "bold", fontSize: 25, marginTop: 30 }}>
            Hi There! 👋
          </Text>
          <Text style={styles.greetings}>
            Welcome back, Sign in to your account
          </Text>
        </RNAnimated>
      </View>

      <>
        <View style={{ alignItems: "center" }}>
          <View style={styles.inputContainer}>
            <TextInput
              autoCapitalize={"none"}
              autoCorrect={false}
              placeholder="Email"
              style={styles.input}
              value={email}
              onChangeText={(text) => {
                setErrors(null);
                setFormData({ ...formData, email: text });
              }}
            />
          </View>
        </View>
        <View style={styles.align}>
          {errors?.email && (
            <>
              {errors?.email.map((item: any, index: number) => (
                <Text style={{ color: COLORS.red }} key={index}>
                  {item}
                </Text>
              ))}
            </>
          )}
        </View>
      </>

      <>
        <View style={{ alignItems: "center" }}>
          <View style={styles.inputContainer}>
            <TextInput
              secureTextEntry={showPassword}
              autoCapitalize={"none"}
              autoCorrect={false}
              placeholder="Password"
              style={styles.input}
              value={password}
              onChangeText={(text) => {
                setErrors(null);
                setFormData({ ...formData, password: text });
              }}
            />
            <Feather
              name={showPassword ? "eye" : "eye-off"}
              onPress={() => {
                setShowPassword(!showPassword);
              }}
              size={25}
              color={COLORS.darkGray}
            />
          </View>
        </View>
        <View style={styles.align}>
          {errors?.password && (
            <>
              {errors?.password.map((item: any, index: number) => (
                <Text style={{ color: COLORS.red }} key={index}>
                  {item}
                </Text>
              ))}
            </>
          )}
        </View>
      </>

      <View style={styles.align}>
        <Text
          style={styles.forgotText}
          onPress={() => navigation.navigate("ResetPassword")}
        >
          Forgot Password?
        </Text>
      </View>

      <View style={{ alignItems: "center", margin: 12 }}>
        <Button onPress={onSubmit} title={"Sign In"} />
      </View>

      <View style={styles.break}>
        <View style={styles.hr} />
        <Text style={{ marginHorizontal: 12, color: COLORS.darkGray }}>OR</Text>
        <View style={styles.hr} />
      </View>

      <View style={styles.oauthContainer}>
        <TouchableOpacity style={styles.oauth}>
          <GoogleIcon />
        </TouchableOpacity>
        <TouchableOpacity style={styles.oauth}>
          <AppleIcon />
        </TouchableOpacity>
      </View>

      <Text style={styles.bottomText}>
        Don’t have an account?{" "}
        <Text
          style={{ color: COLORS.primary }}
          onPress={() => navigation.navigate("SignUp")}
        >
          Sign Up
        </Text>
      </Text>
    </View>
  );
};

export default SignInScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
    padding: 12,
  },
  inputContainer: {
    borderWidth: 1,
    width: "90%",
    borderColor: COLORS.primary,
    marginVertical: 12,
    borderRadius: 15,
    height: 60,
    flexDirection: "row",
    alignItems: "center",
    // padding: 30,
    backgroundColor: "#F9FAFB",
    alignSelf: "center",
  },
  input: {
    width: "90%",
    height: "100%",
    // borderWidth: 1,
    // borderColor: "red",
    borderRadius: 15,
    paddingHorizontal: 15,
    backgroundColor: "#F9FAFB",
  },
  break: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 35,
  },
  hr: {
    width: "35%",
    height: 2,
    backgroundColor: COLORS.lightGray,
  },
  oauthContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 30,
  },
  oauth: {
    width: 155,
    height: 60,
    borderWidth: 1,
    borderColor: COLORS.darkGray,
    borderRadius: 10,
    marginHorizontal: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  align: {
    paddingHorizontal: 12,
  },
  forgotText: {
    color: COLORS.primary,
    fontWeight: "bold",
    marginVertical: 15,
  },
  bottomText: {
    position: "absolute",
    bottom: 40,
    textAlign: "center",
    width: "100%",
  },
  greetings: {
    color: COLORS.darkGray,
    fontSize: 15,
    marginTop: 10,
    marginBottom: 15,
  },
});
