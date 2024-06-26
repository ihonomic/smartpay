import { StyleSheet, Text, View } from "react-native";
import React, { useState, useEffect } from "react";
import { COLORS } from "../theme";
import { useNavigation } from "@react-navigation/native";
import PinCodeInput from "../components/PinCodeInput";
import RNAnimated from "react-native-animated-component";
import { LoaderWithOverlay } from "../components/Loader";
import { UserAccount } from "../store/userStore";

const SecurityPin = () => {
  const navigation = useNavigation<any>();

  // GLOBAL STATE
  const {
    userInfo: { token },
    saveUser,
    saveUserPin,
  } = UserAccount();

  // LOCAL STATE
  const [value, setValue] = useState([]);
  const [loading, setLoading] = useState(false);

  const onSubmit = () => {
    saveUserPin(value.join(""));

    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      navigation.navigate("ProfileCompleted");
    }, 1500);
  };

  useEffect(() => {
    if (value.length === 5) {
      onSubmit();
    }
  }, [value, setValue]);

  return (
    <View style={styles.container}>
      {/* COMPONENT USED  */}
      <LoaderWithOverlay loading={loading} />

      <View style={styles.align}>
        <RNAnimated animationDuration={700} appearFrom="right">
          <Text style={{ fontWeight: "bold", marginTop: 30, fontSize: 25 }}>
            Set your PIN code
          </Text>
          <Text style={styles.greetings}>
            We use state-of-the-art security measures to protect your
            information at all times
          </Text>
        </RNAnimated>
      </View>

      <View style={{ alignItems: "center", marginTop: 10 }}>
        <PinCodeInput value={value} setValue={setValue} onSubmit={onSubmit} />
      </View>
    </View>
  );
};

export default SecurityPin;

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
    paddingHorizontal: 12,
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
