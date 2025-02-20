import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import  {Article}  from "./article.types";

export type RootStackParamList = {
    Home: undefined;
    article: { link: string };
    articlePreview: { article: Article };
};


export type NavigationProps = NativeStackNavigationProp<RootStackParamList>;
