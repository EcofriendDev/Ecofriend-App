import axios from "axios";
import moment from "moment";
import useSWR from "swr";

import { envService } from "@/services/envService";
import { parseMDY } from "@/services/jstore";

/**
 * @param {string}  - Your NewsAPI key.
 * @returns {NewsApiResponse} - The response from the NewsAPI.
 */
const fetcher = (url) => axios.get(url).then((res) => res.data);

const useClimateNews = () => {
  const params = new URLSearchParams({
    apiKey: envService.EXPO_PUBLIC_NEWS_API,
    qInTitle: "climate",
    from: parseMDY(moment().subtract(3, "days")),
  });

  const { data, error } = useSWR(`https://newsapi.org/v2/everything?${params}`, fetcher);

  return {
    news: data ? data.articles : [],
    isLoading: !error && !data,
    isError: error,
  };
};

export default useClimateNews;

/**
 * @typedef {Object} Article
 * @property {string} author - The name of the author of the article.
 * @property {string} title - The title of the article.
 * @property {string} description - A brief description of the article.
 * @property {string} url - The URL to the article.
 * @property {string} urlToImage - The URL to an image associated with the article.
 * @property {string} publishedAt - The date and time the article was published.
 * @property {string} content - The full content of the article.
 */

/**
 * @typedef {Object} NewsApiResponse
 * @property {string} status - The status of the response (e.g., "ok").
 * @property {number} totalResults - The total number of results returned by the query.
 * @property {Article[]} articles - An array of article objects.
 */
