import { StyleSheet, Text, View, Image } from "react-native";
import React, { useState, useEffect } from "react";
import { COLORS } from "../theme";
import Button from "../components/Button";
import { useNavigation } from "@react-navigation/native";
import RNAnimated from "react-native-animated-component";
import { UserAccount } from "../store/userStore";
import { LoaderWithOverlay } from "../components/Loader";
import { notificationToaster } from "../components/Toast";
import { userDashboardAPI } from "../api/auth";

const Dashboard = () => {
  const navigation = useNavigation<any>();
  // GLOBAL STATE
  const {
    userInfo: {
      user: { full_name, email, country },
      token,
    },
    logoutUser,
  } = UserAccount();

  const [loading, setLoading] = useState(false);
  const [secretMessage, setSecretMessage] = useState("");

  const onLogout = () => {
    logoutUser();
    navigation.navigate("SignIn");
  };

  const fetchSecretMessage = async () => {
    setLoading(true);
    const { status, message, data } = await userDashboardAPI(token);
    setLoading(false);
    if (status === "success") {
      setSecretMessage(data.secret);
    } else {
      notificationToaster("error", {
        text1: "",
        text2: message,
      });
    }
  };

  useEffect(() => {
    fetchSecretMessage();
  }, []);

  return (
    <View style={styles.container}>
      <LoaderWithOverlay loading={loading} />

      <RNAnimated animationDuration={700} appearFrom="right">
        <Text style={styles.title}>Hi, {full_name}</Text>
        <Text style={styles.title}>Here's a secret message for you</Text>
        <Text style={styles.text}>{secretMessage}</Text>
      </RNAnimated>

      <View style={styles.btn}>
        <Button title="Logout" onPress={onLogout} />
      </View>
    </View>
  );
};

export default Dashboard;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontWeight: "bold",
    fontSize: 20,
    textAlign: "center",
  },
  text: {
    paddingHorizontal: 70,
    textAlign: "center",
    marginVertical: 10,
    color: COLORS.darkGray,
  },
  btn: {
    position: "absolute",
    bottom: 70,
    alignItems: "center",
    width: "100%",
  },
});
