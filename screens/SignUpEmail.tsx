import { StyleSheet, Text, View, TextInput } from "react-native";
import React, { useState } from "react";
import { COLORS } from "../theme";
import { useNavigation } from "@react-navigation/native";
import Button from "../components/Button";
import { TouchableOpacity } from "react-native-gesture-handler";
import { AppleIcon, GoogleIcon } from "../assets/svg";
import { notificationToaster } from "../components/Toast";
import { LoaderWithOverlay } from "../components/Loader";
import RNAnimated from "react-native-animated-component";
import { sendEmailCodeAPI } from "../api/auth";

const SignUpScreen = () => {
  const navigation = useNavigation<any>();
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState<any>(null);

  const onSubmit = async () => {
    setLoading(true);
    const { status, message, data } = await sendEmailCodeAPI(email);
    console.log(status, message, data);
    setLoading(false);
    if (status === "success") {
      navigation.navigate("SignUpEmailVerify", {
        token_email: data.token,
        email: email,
      });
    } else {
      setErrors(data);
      notificationToaster("error", {
        text1: "Error",
        text2: message,
      });
    }
  };

  const disableBtn = true ? !email : false;

  return (
    <View style={styles.container}>
      {/* COMPONENTS */}
      <LoaderWithOverlay loading={loading} />

      <View style={styles.align}>
        <RNAnimated animationDuration={700} appearFrom="right">
          <Text style={{ fontWeight: "bold", fontSize: 25, marginTop: 30 }}>
            Create a <Text style={{ color: COLORS.primary }}>Smartpay</Text>{" "}
            {" \n"} account
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
                setEmail(text);
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

      <View style={{ alignItems: "center", margin: 12 }}>
        <Button onPress={onSubmit} title={"Sign Up"} disabled={disableBtn} />
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
        Already have an account?{" "}
        <Text
          style={{ color: COLORS.primary }}
          onPress={() => navigation.navigate("SignIn")}
        >
          Sign In
        </Text>
      </Text>
    </View>
  );
};

export default SignUpScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
    padding: 12,
  },
  inputContainer: {
    marginTop: 50,
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
    textAlign: "center",
    marginTop: 50,
  },
  greetings: {
    color: COLORS.darkGray,
    fontSize: 15,
    marginTop: 10,
    marginBottom: 15,
  },
});
