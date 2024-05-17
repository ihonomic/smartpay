import { StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import { COLORS } from "../theme";

import PinInput from "../components/PinInput";
import RNAnimated from "react-native-animated-component";
import { verifyEmailCodeAPI } from "../api/auth";
import { notificationToaster } from "../components/Toast";
import { LoaderWithOverlay } from "../components/Loader";

const OTPVerify = ({ navigation, route }: any) => {
  // LOCAL STATE
  const { email, token_email } = route.params;
  const [value, setValue] = useState([]);
  const [loading, setLoading] = useState(false);

  const onSubmit = async () => {
    if (value.length < 5) return;

    const form = { ...route.params, token: value.join("") };
    console.log(form);
    setLoading(true);
    const { status, message, data } = await verifyEmailCodeAPI(form);
    setLoading(false);
    if (status === "success") {
      navigation.navigate("SignUpProfile", data);
    } else {
      setValue([]);
      notificationToaster("error", {
        text1: "",
        text2: message,
      });
    }
  };

  return (
    <View style={styles.container}>
      {/* COMPONENTS */}
      <LoaderWithOverlay loading={loading} />
      <View style={styles.align}>
        <RNAnimated animationDuration={700} appearFrom="right">
          <Text style={{ fontWeight: "bold", marginTop: 30, fontSize: 25 }}>
            Verify it’s you
          </Text>
          <Text style={styles.greetings}>
            We sent this code:{" "}
            <Text style={{ fontWeight: "bold", color: COLORS.black }}>
              "{token_email}"
            </Text>{" "}
            to ( <Text style={{ color: COLORS.primary }}>{email}</Text>
            ). Enter it here to verify your identity{" "}
          </Text>
        </RNAnimated>
      </View>

      <View style={{ alignItems: "center", marginTop: 10 }}>
        <PinInput value={value} setValue={setValue} onSubmit={onSubmit} />
      </View>
    </View>
  );
};

export default OTPVerify;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
    padding: 12,
  },
  inputContainer: {
    // borderWidth: 1,
    // borderColor: COLORS.primary,
    padding: 2,
    justifyContent: "space-between",
    width: "90%",
    marginVertical: 12,
    borderRadius: 15,
    height: 60,
    flexDirection: "row",
    alignItems: "center",
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
  align: {
    paddingHorizontal: 12,
  },
  greetings: {
    color: COLORS.darkGray,
    fontSize: 15,
    marginTop: 10,
    marginBottom: 15,
  },
});
