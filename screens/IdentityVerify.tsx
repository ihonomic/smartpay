import { StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import { AntDesign } from "@expo/vector-icons";
import { COLORS } from "../theme";
import { useNavigation } from "@react-navigation/native";
import Button from "../components/Button";
import { CheckBoxIcon, VerifyIdIcon } from "../assets/svg";

const IdentifyVerify = () => {
  const navigation = useNavigation<any>();
  const [isSelected, setSelection] = useState(false);

  return (
    <View style={styles.container}>
      <View style={styles.align}>
        <VerifyIdIcon />
        <Text style={{ fontWeight: "bold", marginTop: 30, fontSize: 25 }}>
          Verify your identity
        </Text>
        <Text style={styles.greetings}>
          Where would you like{" "}
          <Text style={{ color: COLORS.primary }}>Smartpay</Text> to send your
          security code?
        </Text>
      </View>

      <View style={{ alignItems: "center" }}>
        <View style={styles.inputContainer}>
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <CheckBoxIcon />
            <Text style={{ fontWeight: "bold", marginLeft: 12 }}>
              Email {"\n"}{" "}
              <Text style={{ fontWeight: "100" }}>onosetale****@gmail.com</Text>{" "}
            </Text>
          </View>
          <AntDesign name="mail" size={25} color={COLORS.darkGray} />
        </View>
      </View>

      <View style={{ alignItems: "center", marginTop: 75 }}>
        <Button
          onPress={() => {
            navigation.navigate("CreateNewPassword");
          }}
          title={"Continue"}
        />
      </View>
    </View>
  );
};

export default IdentifyVerify;

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
