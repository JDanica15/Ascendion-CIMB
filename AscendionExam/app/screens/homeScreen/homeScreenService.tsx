import { Article } from "@/types/article.types";
import { useState } from "react";

const homeScreenService = () => {
    const [selectedArticle, setSelectedArticle] = useState<Article | null>(null);
    return { selectedArticle, setSelectedArticle };
};

export {homeScreenService};
