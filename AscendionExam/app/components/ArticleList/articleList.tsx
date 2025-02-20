import React from "react";
import { View, Text, FlatList, TouchableOpacity } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { Ionicons } from "@expo/vector-icons";
import styles from "./articleList.style";
import { ArticleListProps, gradientColors } from "../../types/article.types";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../types/navigation.types";

const ArticleList: React.FC<ArticleListProps> = ({ articles, onSelect, selectedArticle }) => {
    const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();

    const cardSpacing = (index: number) => ({
        marginTop: index === 0 ? 0 : -20,
    });

    return (
        <View style={styles.container}>
            <FlatList
                contentContainerStyle={styles.cardPosition}
                data={articles}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({ item, index }) => {
                    const isActive = selectedArticle?.id === item.id;
                    const gradient = gradientColors[index % gradientColors.length];

                    return (
                        <TouchableOpacity
                            onPress={() => {
                                onSelect(item);
                                navigation.navigate("articlePreview", { article: item });
                            }}
                            style={[styles.cardContainer, cardSpacing(index)]}
                        >
                            <LinearGradient colors={gradient} style={isActive ? styles.activeCard : styles.card}>
                                <Text style={isActive ? styles.selectedText : styles.cardText}>{item.title}</Text>
                                {isActive && <Ionicons name="arrow-forward" size={20} color="white" />}
                            </LinearGradient>
                        </TouchableOpacity>
                    );
                }}
            />
        </View>
    );
};

export default ArticleList;
