import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React from "react";
import { COLORS } from "../theme";
type IProps = {
  onPress: any;
  title: string;
  disabled?: boolean;
};
const Button = ({ onPress, title, disabled = false }: IProps) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[styles.button, disabled && { opacity: 0.8 }]}
      disabled={disabled}
    >
      <Text style={styles.btnText}>{title}</Text>
    </TouchableOpacity>
  );
};

export default Button;

const styles = StyleSheet.create({
  btnText: {
    color: COLORS.white,
    fontWeight: "bold",
  },
  button: {
    width: 312,
    height: 48,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: COLORS.secondary,
    borderRadius: 12,
  },
});
