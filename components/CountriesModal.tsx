import React, { useState } from "react";

import {
  Modal,
  Image,
  ScrollView,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { StyleSheet, View, Text } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import {
  ChinaIcon,
  IndonesiaIcon,
  NetherlandIcon,
  SingaporeIcon,
  UKIcon,
  USIcon,
} from "../assets/svg";
import { COLORS } from "../theme";

type IProps = {
  isOpened: any;
  closeModal: any;
};

export const CountriesModal = ({ isOpened, closeModal }: IProps) => {
  const [data] = useState([
    {
      id: 1,
      slug: "US",
      name: "United States",
      flag: <USIcon />,
    },
    {
      id: 2,
      slug: "GB",
      name: "United Kingdom",
      flag: <UKIcon />,
    },
    {
      id: 3,
      slug: "SG",
      name: "Singapore",
      flag: <SingaporeIcon />,
    },
    {
      id: 4,
      slug: "CN",
      name: "China",
      flag: <ChinaIcon />,
    },
    {
      id: 5,
      slug: "NL",
      name: "Netherland",
      flag: <NetherlandIcon />,
    },
    {
      id: 6,
      slug: "ID",
      name: "Indonesia",
      flag: <IndonesiaIcon />,
    },
  ]);
  return (
    <Modal
      visible={isOpened}
      animationType="slide"
      transparent={true}
      onRequestClose={closeModal}
    >
      <View style={styles.container}>
        <View style={styles.wrapper}>
          <View style={styles.close}>
            <TextInput
              autoCapitalize={"none"}
              autoCorrect={false}
              placeholder="Search"
              style={styles.input}
            />
            <Text
              onPress={closeModal}
              style={{ fontWeight: "bold", padding: 20 }}
            >
              Cancel
            </Text>
          </View>
          <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
            {data.map((item: any, index: number) => (
              <TouchableOpacity key={index} style={styles.row}>
                <View style={styles.inner}>
                  {item.flag}
                  <Text style={{ marginLeft: 10, color: COLORS.darkGray }}>
                    {item.slug}
                  </Text>
                  <Text
                    style={{
                      marginLeft: 10,
                      textAlign: "left",
                      fontWeight: "bold",
                    }}
                  >
                    {item.name}
                  </Text>
                </View>
                {/* <AntDesign name="check" color={COLORS.green} size={25} /> */}
              </TouchableOpacity>
            ))}
          </ScrollView>
        </View>
      </View>
    </Modal>
  );
};

export default CountriesModal;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  wrapper: {
    backgroundColor: "white",
    padding: 20,
    borderRadius: 50,
    width: "100%",
    height: 600,
  },
  close: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  input: {
    width: "80%",
    height: "100%",
    // borderWidth: 1,
    // borderColor: "red",
    borderRadius: 15,
    paddingHorizontal: 15,
    backgroundColor: "#F9FAFB",
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    height: 80,
  },
  inner: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
});
