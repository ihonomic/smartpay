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

const ProfileUpdate = () => {
  const navigation = useNavigation<any>();
  // LOCAL STATE
  const [showModal, setShowModal] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  return (
    <View style={styles.container}>
      {/* COMPONENT USED  */}
      <CountriesModal
        isOpened={showModal}
        closeModal={() => setShowModal(false)}
      />

      <View style={styles.align}>
        <Text style={{ fontWeight: "bold", marginTop: 30, fontSize: 25 }}>
          Tell us a bit about {"\n"}
          <Text style={{ color: COLORS.primary }}>yourself</Text>
        </Text>
      </View>

      <View style={{ alignItems: "center" }}>
        <View style={styles.inputContainer}>
          <TextInput
            autoCapitalize={"none"}
            autoCorrect={false}
            placeholder="Full name"
            style={styles.input}
          />
        </View>
      </View>
      <View style={{ alignItems: "center" }}>
        <View style={styles.inputContainer}>
          <TextInput
            autoCapitalize={"none"}
            autoCorrect={false}
            placeholder="Username"
            style={styles.input}
          />
        </View>
      </View>
      <View style={{ alignItems: "center" }}>
        <View style={styles.inputContainer}>
          <TouchableOpacity
            style={[styles.input, { justifyContent: "center" }]}
            onPress={() => setShowModal(true)}
          >
            <Text style={{ color: COLORS.darkGray }}>Select country</Text>
          </TouchableOpacity>
          <AntDesign name={"down"} size={25} color={COLORS.darkGray} />
        </View>
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

      <View style={{ alignItems: "center", marginTop: 75 }}>
        <Button
          onPress={() => {
            navigation.navigate("SecurityPin");
          }}
          title={"Continue"}
        />
      </View>
    </View>
  );
};

export default ProfileUpdate;

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
});
