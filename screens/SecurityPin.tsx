import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
import { Feather, AntDesign } from "@expo/vector-icons";
import { COLORS } from "../theme";
import { useNavigation } from "@react-navigation/native";
import Button from "../components/Button";
import CountriesModal from "../components/CountriesModal";
import PinCodeInput from "../components/PinCodeInput";

const SecurityPin = () => {
  const navigation = useNavigation<any>();
  // LOCAL STATE
  const [showModal, setShowModal] = useState(false);
  const [value, setValue] = useState([]);

  return (
    <View style={styles.container}>
      {/* COMPONENT USED  */}
      <CountriesModal
        isOpened={showModal}
        closeModal={() => setShowModal(false)}
      />

      <View style={styles.align}>
        <Text style={{ fontWeight: "bold", marginTop: 30, fontSize: 25 }}>
          Set your PIN code
        </Text>

        <Text style={styles.greetings}>
          We use state-of-the-art security measures to protect your information
          at all times
        </Text>
      </View>

      <View style={{ alignItems: "center", marginTop: 10 }}>
        <PinCodeInput value={value} setValue={setValue} />
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
