import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { COLORS, SIZES } from "../theme";
import { CancelPadIcon } from "../assets/svg";

const NumberPad = ({ setTyped }: { setTyped: (prevState: any) => void }) => {
  return (
    <View style={styles.container}>
      {/* ROW 1  */}

      <View style={styles.row}>
        <TouchableOpacity
          style={styles.numSingle}
          onPress={() => setTyped((prevState: any) => [...prevState, "1"])}
        >
          <Text style={styles.text}>1</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.numSingle}
          onPress={() => setTyped((prevState: any) => [...prevState, "2"])}
        >
          <Text style={styles.text}>2</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.numSingle}
          onPress={() => setTyped((prevState: any) => [...prevState, "3"])}
        >
          <Text style={styles.text}>3</Text>
        </TouchableOpacity>
      </View>
      {/* ROW 2  */}
      <View style={styles.row}>
        <TouchableOpacity
          style={styles.numSingle}
          onPress={() => setTyped((prevState: any) => [...prevState, "4"])}
        >
          <Text style={styles.text}>4</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.numSingle}
          onPress={() => setTyped((prevState: any) => [...prevState, "5"])}
        >
          <Text style={styles.text}>5</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.numSingle}
          onPress={() => setTyped((prevState: any) => [...prevState, "6"])}
        >
          <Text style={styles.text}>6</Text>
        </TouchableOpacity>
      </View>
      {/* ROW 3  */}
      <View style={styles.row}>
        <TouchableOpacity
          style={styles.numSingle}
          onPress={() => setTyped((prevState: any) => [...prevState, "7"])}
        >
          <Text style={styles.text}>7</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.numSingle}
          onPress={() => setTyped((prevState: any) => [...prevState, "8"])}
        >
          <Text style={styles.text}>8</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.numSingle}
          onPress={() => {
            setTyped((prevState: any) => [...prevState, "9"]);
          }}
        >
          <Text style={styles.text}>9</Text>
        </TouchableOpacity>
      </View>
      {/* ROW 4  */}
      <View style={styles.row}>
        <TouchableOpacity
          style={[styles.numSingle, { backgroundColor: "transparent" }]}
          onPress={() => {}}
        >
          <Text style={styles.text}>*</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.numSingle}
          onPress={() => setTyped((prevState: any) => [...prevState, 0])}
        >
          <Text style={styles.text}>0</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.numSingle, { backgroundColor: "transparent" }]}
          onPress={() => {
            setTyped((previousArr: any) => previousArr.slice(0, -1));
          }}
        >
          <CancelPadIcon />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default NumberPad;

const styles = StyleSheet.create({
  container: {
    // borderColor: COLORS.white,
    // borderWidth: 2,
    height: 304,
    width: 302,
    padding: SIZES.sm,
    justifyContent: "space-between",
  },
  text: {
    color: COLORS.black,
    fontSize: 20,
    fontWeight: "600",
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  numSingle: {
    width: 70,
    height: 70,
    textAlign: "center",
    // backgroundColor: "#F2F4F7",
    alignItems: "center",
    justifyContent: "center",
    marginVertical: 12,
    borderRadius: 40,
  },
});
