import { StyleSheet, Text, TouchableOpacity, View, FlatList, Animated } from "react-native";
import React, { useState, useRef } from "react";
import OnboardingItem from "./OnboardingItem";
import Paginator from "./Paginator";
import NextButton from "./NextButton";
import { useNavigation } from "@react-navigation/native";
import { COLORS } from "../../theme";


const slides = [
  {
    id: "1",
    description: "Finance app the safest and most trusted",
    subtext: "Your finance work starts here. Our here to help you track and deal with speeding up your transactions.",
    image: require("../../assets/device.png"),
    logo: <></>,
  },
  {
    id: "2",
    description: "The fastest transaction process only here",
    subtext: "Get easy to pay all your bills with just a few steps. Paying your bills become fast and efficient.",
    image: require("../../assets/device2.png"),
    logo: <></>,
  },
];

const OnBoardingScreen = () => {
  const navigation = useNavigation();

  const [currentIndex, setCurrentIndex] = useState(0);
  const scrollX = useRef(new Animated.Value(0)).current;
  const slidesRef = useRef(null);

  const viewableItemsChanged = useRef(({ viewableItems }) => {
    setCurrentIndex(viewableItems[0].index); // This line keeps throwing up an error when the phone is rotated
  }).current;

  // next slide need to be 50% on screen before it will change
  const viewConfig = useRef({ viewAreaCoveragePercentThreshold: 50 }).current;

  //
  const scrollTo = () => {
    if (currentIndex < slides.length - 1) {
      slidesRef.current.scrollToIndex({ index: currentIndex + 1 });
    } else {
      navigation.navigate("SignIn");
    }
  };

  return (
    <View style={{ flex: 1, backgroundColor: COLORS.white, }}>
      <FlatList
        data={slides}
        renderItem={({ item }) => <OnboardingItem item={item} />}
        horizontal
        showsHorizontalScrollIndicator={false}
        pagingEnabled
        keyExtractor={(item) => item.id}
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { x: scrollX } } }],
          {
            useNativeDriver: false,
          }
        )}
        scrollEventThrottle={32}
        onViewableItemsChanged={viewableItemsChanged}
        viewabilityConfig={viewConfig}
        ref={slidesRef}
      />


      {/* <View style={{ alignItems: "center", borderColor: "red", borderWidth: 1, height: 1 }}>
        <Paginator data={slides} scrollX={scrollX} />
      </View> */}

      <NextButton
        slides={slides}
        scrollX={scrollX}
        scrollTo={scrollTo}
        percentage={(currentIndex + 1) * (100 / slides.length)}
        currentIndex={currentIndex}
      />

    </View>
  );
};

export default OnBoardingScreen;