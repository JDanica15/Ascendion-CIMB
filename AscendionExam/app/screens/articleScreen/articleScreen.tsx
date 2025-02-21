import React from "react";
import { WebView } from "react-native-webview";
import { ArticleScreenProps } from "@/types/article.types";

const ArticleScreen: React.FC<ArticleScreenProps> = ({ route }) => {
    return <WebView source={{ uri: route.params.link }} />;
};

export default ArticleScreen;
