import React from "react";
import { WebView } from "react-native-webview";
import { StackScreenProps } from "@react-navigation/stack";
import { RootStackParamList } from "./types/navigation.types";

type ArticleScreenProps = StackScreenProps<RootStackParamList, "article">;

const ArticleScreen: React.FC<ArticleScreenProps> = ({ route }) => {
    return <WebView source={{ uri: route.params.link }} />;
};

export default ArticleScreen;
