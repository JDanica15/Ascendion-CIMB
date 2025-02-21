import { View } from "react-native";
import ArticleList from "../../components/ArticleList/articleList";
import styles from "./homeScreen.style";
import articles from "@/mockData/article.mock";
import { homeScreenService } from "./homeScreenService";

const HomeScreen: React.FC = () => {
    const { selectedArticle, setSelectedArticle } = homeScreenService();
    return (
        <View style={styles.container}>
            <View style={styles.listContainer}>
                <ArticleList articles={articles} onSelect={setSelectedArticle} selectedArticle={selectedArticle} />
            </View>
        </View>
    );
};

export default HomeScreen;
