import { StyleSheet, Animated, useWindowDimensions, View } from 'react-native'
import React from 'react'
import { COLORS } from '../../theme'

const Paginator = ({ data, scrollX }) => {
    const { width } = useWindowDimensions()
    return (
        <View style={{ flexDirection: "row", height: 64, flex: 0.3 }}>
            {data.map((_, i) => {
                const inputRange = [(i - 1) * width, i * width, (i + 1) * width]
                const dotWidth = scrollX.interpolate({
                    inputRange,
                    outputRange: [10, 30, 10],
                    extrapolate: "clamp",
                })
                const opacity = scrollX.interpolate({
                    inputRange,
                    outputRange: [0.3, 1, 0.3],
                    extrapolate: "clamp",
                })
                return <Animated.View key={i.toString()} style={[styles.dot, { width: dotWidth, opacity }]} />
                return <Animated.View key={i.toString()} style={[styles.dot, { width: 28, opacity }]} />
            })
            }
        </View>

    )
}

export default Paginator

const styles = StyleSheet.create({
    dot: {
        height: 5,
        borderRadius: 5,
        backgroundColor: COLORS.secondary,
        marginHorizontal: 8
    }
})