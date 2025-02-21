import React, { useState } from "react";
import { Text, View } from "react-native";
import ArticleList from "../components/ArticleList/articleList";
import styles  from "./homeScreen.style";
import  articles  from "../mockData/article.mock";
import  {Article}  from "../types/article.types";

const HomeScreen: React.FC = () => {
    const [selectedArticle, setSelectedArticle] = useState<Article | null>(null);
    return (
        <View style={styles.container}>
            <View style={styles.listContainer}>
                <ArticleList articles={articles} onSelect={setSelectedArticle} selectedArticle={selectedArticle} />
            </View>
        </View>
    );
};

export default HomeScreen;
