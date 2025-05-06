import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "ブログ一覧",
  description: "ブログ記事が表示されます。",
};

// ダミーデータ
const articles = [
  { id: "1", title: "タイトル１" },
  { id: "2", title: "タイトル２" },
  { id: "3", title: "タイトル３" },
];
const fetchArticles = async () => {
  await new Promise((resolve) => setTimeout(resolve, 3000));
  // throw new Error('error')
  return articles;
};

export default async function BlogPage() {
  const articles = await fetchArticles();
  return (
    <div>
      <ul>
        {articles.map((article) => (
          <li key={article.id}>title: {article.title}</li>
        ))}
      </ul>
    </div>
  );
}
