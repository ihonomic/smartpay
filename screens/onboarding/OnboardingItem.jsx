import {
    StyleSheet, Text, View,
    useWindowDimensions, Platform, Image
} from 'react-native'
import React from 'react'
import { COLORS, SIZES, TYPOGRAPHY } from '../../theme'
import { useNavigation } from '@react-navigation/native'
import { StatusBar } from "expo-status-bar";


const OnboardingItem = ({ item }) => {
    const navigation = useNavigation()
    const { width } = useWindowDimensions()

    return (
        <View style={[styles.container]}>
            <View style={styles.logo}>
                {item.logo}
            </View>
            <Text onPress={() => { navigation.navigate("SignIn") }} style={styles.skip}>Skip</Text>

            <View style={{
                alignItems: "center",
                margin: 12,
                marginTop: 20,
                paddingTop: 20,
                // borderWidth: 1, borderColor: 'red',
            }}>
                <Image
                    source={item.image}
                    width={100}
                    height={100}
                />
            </View>

            <View style={[styles.container, { width }]}>
                <View style={{ flex: 0.5, justifyContent: 'flex-end', alignItems: "center", marginHorizontal: 20 }}>
                    <Text style={styles.description} >{item.description}</Text>
                    <Text style={styles.subtext} >{item.subtext}</Text>
                </View>
            </View>
        </View>
    )
}

export default OnboardingItem

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    image: {
        flex: 0.5,
        justifyContent: 'center',
    },
    title: {
        ...TYPOGRAPHY.h1,
        fontSize: SIZES.xl - 2,
        marginBottom: SIZES.xs,
        textAlign: 'center',
    },
    description: {
        ...TYPOGRAPHY.h2,
        color: COLORS.secondary,
        fontSize: 24,
        fontWeight: "bold",
        textAlign: 'center',
        paddingHorizontal: 30
    },
    subtext: {
        ...TYPOGRAPHY.h2,
        color: COLORS.black,
        fontSize: 14,
        marginTop: 12,
        textAlign: 'center',
        opacity: 0.7,
        paddingHorizontal: 30
    },
    skip: {
        textAlign: "right",
        ...TYPOGRAPHY.h2,
        color: COLORS.primary,
        fontSize: 15,
        marginRight: 25,
        fontWeight: "bold"
    },
    logo: {
        marginTop: Platform.OS === 'android' ? StatusBar.currentHeight : 70,
        marginLeft: 12
    },
    getStartedBtn: {
        width: 312,
        height: 48,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: COLORS.white,
        borderRadius: 8
    }
})