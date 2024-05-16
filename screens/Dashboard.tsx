import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";
import { COLORS } from "../theme";
import Button from "../components/Button";
import { useNavigation } from "@react-navigation/native";

const Dashboard = () => {
  const navigation = useNavigation<any>();
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome, James</Text>
      <Button title="Logout" onPress={() => navigation.navigate("SignIn")} />
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
  },
  text: {
    paddingHorizontal: 70,
    textAlign: "center",
    marginVertical: 10,
    color: COLORS.darkGray,
  },
});
