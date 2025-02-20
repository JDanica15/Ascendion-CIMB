import { useState } from "react";
import  articles  from "../../mockData/article.mock";
import  {Article}  from "../../types/article.types";

const useArticleViewModel = () => {
    const [selectedArticle, setSelectedArticle] = useState<Article | null>(null);

    const selectArticle = (article: Article) => {
        setSelectedArticle(article);
    };

    return {
        articles,
        selectedArticle,
        selectArticle,
    };
};

export default useArticleViewModel;