import { StyleSheet, Text, View, ActivityIndicator } from "react-native";
import React from "react";
import { COLORS } from "../theme";

export const LoaderWithOverlay = ({
  loading,
  Loadingtext = "",
}: {
  loading: boolean;
  Loadingtext?: string;
}) => {
  return (
    <React.Fragment>
      {loading && (
        <View style={styles.loading}>
          <ActivityIndicator size="small" color={COLORS.primary} />
        </View>
      )}
    </React.Fragment>
  );
};

const styles = StyleSheet.create({
  lottie: {
    width: 70,
    height: 70,
  },
  loading: {
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#F5FCFF88",
    zIndex: 5,
  },
});
