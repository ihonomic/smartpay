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

import Button from "../components/Button";
import CountriesModal from "../components/CountriesModal";
import RNAnimated from "react-native-animated-component";
import { notificationToaster } from "../components/Toast";
import { UserAccount } from "../store/userStore";
import { registerUserAPI } from "../api/auth";
import { LoaderWithOverlay } from "../components/Loader";

const ProfileUpdate = ({ navigation, route }: any) => {
  // LOCAL STATE
  const [showModal, setShowModal] = useState(false);
  const [showPassword, setShowPassword] = useState(true);
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState<any>(null);

  // GLOBAL STATE
  const {
    userInfo: { token },
    saveUser,
  } = UserAccount();

  const [formData, setFormData] = useState({
    ...route.params,
    full_name: "",
    username: "",
    country: "",
    country_full_name: "",
    password: "",
    device_name: "web",
  });

  const { full_name, email, username, password, country, country_full_name } =
    formData;

  const disableBtn = false
    ? !full_name || !email || !username || !password || !country
    : false;

  const onSubmit = async () => {
    setLoading(true);
    const { status, message, data } = await registerUserAPI(formData);
    setLoading(false);
    if (status === "success") {
      saveUser(data);
      navigation.navigate("SecurityPin");
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
      <CountriesModal
        isOpened={showModal}
        closeModal={() => setShowModal(false)}
        formData={formData}
        setFormData={setFormData}
        setErrors={setErrors}
      />
      <LoaderWithOverlay loading={loading} />

      <View style={styles.align}>
        <RNAnimated animationDuration={700} appearFrom="right">
          <Text style={{ fontWeight: "bold", marginTop: 30, fontSize: 25 }}>
            Tell us a bit about {"\n"}
            <Text style={{ color: COLORS.primary }}>yourself</Text>
          </Text>
        </RNAnimated>
      </View>

      <>
        <View style={{ alignItems: "center" }}>
          <View style={styles.inputContainer}>
            <TextInput
              autoCapitalize={"none"}
              autoCorrect={false}
              placeholder="Full name"
              style={styles.input}
              value={full_name}
              onChangeText={(text) => {
                setErrors(null);
                setFormData({ ...formData, full_name: text });
              }}
            />
          </View>
        </View>
        <View style={styles.align}>
          {errors?.full_name && (
            <>
              {errors?.full_name.map((item: any, index: number) => (
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
              autoCapitalize={"none"}
              autoCorrect={false}
              placeholder="Username"
              style={styles.input}
              value={username}
              onChangeText={(text) => {
                setErrors(null);
                setFormData({ ...formData, username: text });
              }}
            />
          </View>
        </View>
        <View style={styles.align}>
          {errors?.username && (
            <>
              {errors?.username.map((item: any, index: number) => (
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
            <TouchableOpacity
              style={[styles.input, { justifyContent: "center" }]}
              onPress={() => setShowModal(true)}
            >
              {country ? (
                <Text>{country_full_name}</Text>
              ) : (
                <Text style={{ color: COLORS.darkGray }}>Select country</Text>
              )}
            </TouchableOpacity>
            <AntDesign name={"down"} size={25} color={COLORS.darkGray} />
          </View>
        </View>
        <View style={styles.align}>
          {errors?.country && (
            <>
              {errors?.country.map((item: any, index: number) => (
                <Text style={{ color: COLORS.red }} key={index}>
                  {item}
                </Text>
              ))}
            </>
          )}
        </View>
      </>

      <>
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

      <View style={{ alignItems: "center", marginTop: 75 }}>
        <Button disabled={disableBtn} onPress={onSubmit} title={"Continue"} />
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
