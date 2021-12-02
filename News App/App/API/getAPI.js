import { article_url, country_code, api_key } from "./rest_api";

export default async function getAPI(category = "general") {
	const url = `${article_url}?country=${country_code}&category=${category}&apiKey=${api_key}`;

	try {
		const article = await fetch(url);
		const data = await article.json();
		return data.articles;
	} catch (error) {
		throw error;
	}
}
