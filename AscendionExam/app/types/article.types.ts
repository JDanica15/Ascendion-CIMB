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
    ["#00c6ff", "#0072ff"],
    ["#f7971e", "#ffd200"],
    ["#FF512F", "#DD2476"],
    ["#e232ac", "#df2ea7"],
    ["#966fe9", "#507dfb"],
];

export { Article, ArticleListProps, gradientColors };
