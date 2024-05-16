import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { COLORS } from "../theme";
import NumberPad from "./NumberPad";
import Button from "./Button";
import { useNavigation } from "@react-navigation/native";
import { Octicons } from "@expo/vector-icons";

const PinCodeInput = ({
  value,
  setValue,
}: {
  value: number[];
  setValue: any;
}) => {
  const navigation = useNavigation<any>();

  const valueLength = value.length;
  return (
    <>
      <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
        <View
          style={[
            styles.cell,
            valueLength === 0 && { borderColor: COLORS.black },
          ]}
        >
          {valueLength > 0 && (
            <Text style={styles.asteriks}>
              <Octicons name="dot-fill" size={30} />
            </Text>
          )}
        </View>
        <View
          style={[
            styles.cell,
            valueLength === 1 && { borderColor: COLORS.black },
          ]}
        >
          {valueLength > 1 && (
            <Text style={styles.asteriks}>
              {" "}
              <Octicons name="dot-fill" size={30} />
            </Text>
          )}
        </View>
        <View
          style={[
            styles.cell,
            valueLength === 2 && { borderColor: COLORS.black },
          ]}
        >
          {valueLength > 2 && (
            <Text style={styles.asteriks}>
              {" "}
              <Octicons name="dot-fill" size={30} />
            </Text>
          )}
        </View>
        <View
          style={[
            styles.cell,
            valueLength === 3 && { borderColor: COLORS.black },
          ]}
        >
          {valueLength > 3 && (
            <Text style={styles.asteriks}>
              {" "}
              <Octicons name="dot-fill" size={30} />
            </Text>
          )}
        </View>
        <View
          style={[
            styles.cell,
            valueLength === 4 && { borderColor: COLORS.black },
          ]}
        >
          {valueLength > 4 && (
            <Text style={styles.asteriks}>
              {" "}
              <Octicons name="dot-fill" size={30} />
            </Text>
          )}
        </View>
      </View>

      <View style={{ alignItems: "center", marginTop: 30 }}>
        <Button
          onPress={() => {
            navigation.navigate("ProfileCompleted");
          }}
          title={"Create Pin"}
        />
      </View>

      {/* NUMBER PAD  */}
      <View
        style={{
          justifyContent: "center",
          alignItems: "center",
          marginTop: 20,
        }}
      >
        <NumberPad setTyped={setValue} />
      </View>
    </>
  );
};

export default PinCodeInput;

const styles = StyleSheet.create({
  // CODE INPUT STYLE

  cell: {
    justifyContent: "center",
    alignItems: "center",
    width: 56,
    height: 56,
    lineHeight: 55,
    fontSize: 30,
    fontWeight: "bold",
    borderBottomWidth: 1,
    borderColor: COLORS.primary,
    textAlign: "center",
    backgroundColor: "#F9FAFB",
    marginHorizontal: 3,
    borderRadius: 8,
  },
  focusCell: {
    borderColor: COLORS.black,
  },
  asteriks: {
    fontSize: 35,
    alignSelf: "center",
    fontWeight: "bold",
  },
});
