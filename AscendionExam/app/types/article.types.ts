import { StackScreenProps } from "@react-navigation/stack";
import { RootStackParamList } from "./navigation.types";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { NativeStackScreenProps } from "@react-navigation/native-stack";

type Article = {
    id: number;
    title: string;
    summary: string;
    image: any;
    link: string;
};

type ArticleListProps = {
    articles: Article[];
    onSelect: (article: Article) => void;
    selectedArticle: Article | null;
};

const gradientColors: [string, string][] = [
    ["#1aafff", "#0885fe"],
    ["#f89020", "#e07e19"],
    ["#c1111b", "#7a0208"],
    ["#e232ac", "#df2ea7"],
    ["#966fe9", "#507dfb"],
];
type ArticlePreviewStackScreenProps = NativeStackScreenProps<RootStackParamList, "articlePreview">;
type ArticlePreviewStackNavigationProps = NativeStackNavigationProp<RootStackParamList, "articlePreview">;
type ArticleScreenProps = StackScreenProps<RootStackParamList, "article">;

export { Article, ArticleListProps, gradientColors, ArticlePreviewStackNavigationProps, ArticleScreenProps, ArticlePreviewStackScreenProps };
