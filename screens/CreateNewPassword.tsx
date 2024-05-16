import { StyleSheet, Text, View, TextInput } from "react-native";
import React, { useState } from "react";
import { Feather } from "@expo/vector-icons";
import { COLORS } from "../theme";
import { useNavigation } from "@react-navigation/native";
import Button from "../components/Button";

const CreateNewPassword = () => {
  const navigation = useNavigation<any>();
  const [showPassword, setShowPassword] = useState(false);
  const [showPassword2, setShowPassword2] = useState(false);
  return (
    <View style={styles.container}>
      <View style={styles.align}>
        <Text style={{ fontWeight: "bold", marginTop: 30, fontSize: 25 }}>
          Create New Password
        </Text>
        <Text style={styles.greetings}>
          Please, enter a new password below different from the previous
          password
        </Text>
      </View>

      <View style={styles.inputContainer}>
        <TextInput
          secureTextEntry={showPassword}
          autoCapitalize={"none"}
          autoCorrect={false}
          placeholder="Password"
          style={styles.input}
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
      <View style={styles.inputContainer}>
        <TextInput
          secureTextEntry={showPassword2}
          autoCapitalize={"none"}
          autoCorrect={false}
          placeholder="Confirm Password"
          style={styles.input}
        />
        <Feather
          name={showPassword2 ? "eye" : "eye-off"}
          onPress={() => {
            setShowPassword2(!showPassword2);
          }}
          size={25}
          color={COLORS.darkGray}
        />
      </View>

      <View style={styles.btnContainer}>
        <Button
          onPress={() => {
            navigation.navigate("");
          }}
          title={"Create new password"}
        />
      </View>
    </View>
  );
};

export default CreateNewPassword;

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

  btnContainer: {
    position: "absolute",
    width: "100%",
    bottom: 35,
    alignItems: "center",
  },
});
