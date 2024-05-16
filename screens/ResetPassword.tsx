import { StyleSheet, Text, View, TextInput } from "react-native";
import React, { useState } from "react";
import { Feather } from "@expo/vector-icons";
import { COLORS } from "../theme";
import { useNavigation } from "@react-navigation/native";
import Button from "../components/Button";
import { ResetIcon } from "../assets/svg";

const ResetPassword = () => {
  const navigation = useNavigation<any>();

  return (
    <View style={styles.container}>
      <View style={styles.align}>
        <ResetIcon />
        <Text style={{ fontWeight: "bold", marginTop: 30, fontSize: 25 }}>
          Passsword Recovery
        </Text>
        <Text style={styles.greetings}>
          Enter your registered email below to receive password instructions
        </Text>
      </View>

      <View style={{ alignItems: "center" }}>
        <View style={styles.inputContainer}>
          <TextInput
            autoCapitalize={"none"}
            autoCorrect={false}
            placeholder="Email"
            style={styles.input}
          />
        </View>
      </View>

      <View style={{ alignItems: "center", marginTop: 75 }}>
        <Button
          onPress={() => {
            navigation.navigate("IdentifyVerify");
          }}
          title={"Send me email"}
        />
      </View>
    </View>
  );
};

export default ResetPassword;

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
