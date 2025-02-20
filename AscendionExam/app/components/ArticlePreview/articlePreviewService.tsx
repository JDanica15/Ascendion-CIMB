import { useEffect, useLayoutEffect } from "react";
import { Dimensions } from "react-native";
import { useSharedValue, withTiming, useAnimatedStyle } from "react-native-reanimated";
import { useNavigation } from "@react-navigation/native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../types/navigation.types";

const SCREEN_WIDTH = Dimensions.get("window").width;

const useFadeInAnimation = () => {
    const opacity = useSharedValue(0);

    useEffect(() => {
        opacity.value = withTiming(1, { duration: 400 });
    }, []);

    return useAnimatedStyle(() => ({
        opacity: opacity.value,
    }));
};

const useSwipeBackGesture = () => {
    const navigation = useNavigation();

    return ({ nativeEvent }: any) => {
        if (nativeEvent.translationX > SCREEN_WIDTH * 0.15) {
            navigation.goBack();
        }
    };
};

const extractArticle = (route: NativeStackScreenProps<RootStackParamList, "articlePreview">["route"]) => {
    return route.params?.article ?? {};
};

const useDynamicTitle = (title?: string) => {
    const navigation = useNavigation();

    useLayoutEffect(() => {
        if (title) {
            navigation.setOptions({ title });
        }
    }, [navigation, title]);
};

// ✅ Proper combined export
export { useFadeInAnimation, useSwipeBackGesture, extractArticle, useDynamicTitle };
