import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";
import { COLORS } from "../theme";
import Button from "../components/Button";
import { useNavigation } from "@react-navigation/native";
import { UserAccount } from "../store/userStore";

const ProfileCompleted = () => {
  const navigation = useNavigation<any>();

  // GLOBAL STATE
  const {
    userInfo: {
      user: { full_name, email, country },
    },
    saveUser,
    saveUserPin,
  } = UserAccount();

  return (
    <View style={styles.container}>
      <Image
        source={require("../assets/thumbs.png")}
        width={100}
        height={100}
      />
      <Text style={styles.title}>Congratulations, {full_name}</Text>
      <Text style={styles.text}>
        You’ve completed the onboarding, you can start using
      </Text>
      <Button
        title="Get Started"
        onPress={() => navigation.navigate("Dashboard")}
      />
    </View>
  );
};

export default ProfileCompleted;

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
  },
  text: {
    paddingHorizontal: 70,
    textAlign: "center",
    marginVertical: 10,
    color: COLORS.darkGray,
  },
});
