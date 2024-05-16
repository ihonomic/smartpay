import {
  StyleSheet,
  Animated,
  View,
  TouchableOpacity,
  Text,
} from "react-native";
import React, { useEffect, useRef } from "react";
import { COLORS } from "../../theme";
import Paginator from "./Paginator";
import { useNavigation } from "@react-navigation/native";

const NextButton = ({ slides, scrollX, scrollTo, percentage, currentIndex }) => {
  const navigation = useNavigation()

  const size = 100;
  const strokeWidth = 2;
  const center = size / 2;
  const radius = size / 2 - strokeWidth / 2;
  const circumference = 2 * Math.PI * radius;

  const progressAnimation = useRef(new Animated.Value(0)).current;
  const progressRef = useRef(null);

  const animation = (toValue) => {
    return Animated.timing(progressAnimation, {
      toValue,
      duration: 250,
      useNativeDriver: true,
    }).start();
  };

  useEffect(() => {
    animation(percentage);
  }, [percentage]);

  useEffect(() => {
    progressAnimation.addListener(
      (value) => {
        const strokeDashoffset =
          circumference - (circumference * value.value) / 100;

        if (progressRef?.current) {
          progressRef.current.setNativeProps({
            strokeDashoffset,
          });
        }
      },
      [percentage]
    );
    return () => {
      progressAnimation.removeAllListeners();
    };
  }, []);

  return (
    <View style={styles.container}>
      <View style={{ alignItems: "center", height: 20 }}>
        <Paginator data={slides} scrollX={scrollX} />
      </View>
      {currentIndex !== 1 ?
        <TouchableOpacity style={styles.button} onPress={scrollTo}>
          <Text style={{ color: COLORS.white, fontWeight: 'bold' }}>Next</Text>
        </TouchableOpacity> :
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate("SignIn")}>
          <Text style={{ color: COLORS.white, fontWeight: "bold" }}>Get Started</Text>
        </TouchableOpacity>
      }
    </View>
  );
};

export default NextButton;

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    bottom: 80
  },
  button: {
    width: 312,
    height: 48,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: COLORS.secondary,
    borderRadius: 12
  },
});
