import { StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import { AntDesign } from "@expo/vector-icons";
import { COLORS } from "../theme";
import { useNavigation } from "@react-navigation/native";
import Button from "../components/Button";

import PinInput from "../components/PinInput";

const OTPVerify = () => {
  const navigation = useNavigation<any>();
  // LOCAL STATE
  const [value, setValue] = useState([]);

  return (
    <View style={styles.container}>
      <View style={styles.align}>
        <Text style={{ fontWeight: "bold", marginTop: 30, fontSize: 25 }}>
          Verify it’s you
        </Text>
        <Text style={styles.greetings}>
          We send a code to ({" "}
          <Text style={{ color: COLORS.primary }}>*****@mail.com</Text>
          ). Enter it here to verify your identity Where would you like{" "}
        </Text>
      </View>

      <View style={{ alignItems: "center", marginTop: 10 }}>
        <PinInput value={value} setValue={setValue} />
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
