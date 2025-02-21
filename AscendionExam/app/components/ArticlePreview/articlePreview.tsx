import React from "react";
import { Text, Image, TouchableOpacity } from "react-native";
import Animated from "react-native-reanimated";
import { PanGestureHandler } from "react-native-gesture-handler";
import * as Linking from "expo-linking";
import styles from "./articlePreview.style";
import { extractArticle, useDynamicTitle, useFadeInAnimation, useSwipeBackGesture } from "./articlePreviewService";
import { ArticlePreviewStackScreenProps } from "@/app/types/article.types";

const ArticlePreview: React.FC<ArticlePreviewStackScreenProps> = ({ route, navigation }) => {
    const article = extractArticle(route);
    useDynamicTitle(article?.title);

    const animatedStyle = useFadeInAnimation();
    const handleSwipeBack = useSwipeBackGesture();

    return (
        <PanGestureHandler onGestureEvent={handleSwipeBack}>
            <Animated.View style={[styles.container, animatedStyle]}>
                {article.image && (
                    <Image
                        source={typeof article.image === "string" ? { uri: article.image } : article.image}
                        style={styles.image}
                        resizeMode="cover"
                    />
                )}
                {article.summary && (
                    <Text style={styles.summary} numberOfLines={4} ellipsizeMode="tail">
                        {article.summary}
                    </Text>
                )}

                <TouchableOpacity
                    style={styles.button}
                    onPress={() => navigation.navigate("article", { link: article.link })}
                >
                    <Text style={styles.buttonText}>Read more</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={[styles.button, { marginTop: 10 }]}
                    onPress={() => Linking.openURL(article.link)}
                >
                    <Text style={styles.buttonText}>Open in Browser</Text>
                </TouchableOpacity>
            </Animated.View>
        </PanGestureHandler>
    );
};

export default ArticlePreview;
