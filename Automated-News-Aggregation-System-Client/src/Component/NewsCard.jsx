// NewsCard.jsx
import React from "react";
import { Link } from "react-router";

const NewsCard = ({ singleNews }) => {
  const article = singleNews;

  return (
    <div className="card bg-white shadow-md hover:shadow-lg transition-shadow duration-300 p-4 rounded-lg flex flex-col justify-between">
      {/* Title */}
      <a
        href={article.link}
        target="_blank"
        rel="noopener noreferrer"
        className="text-lg font-bold text-gray-800 hover:text-blue-600"
      >
        {article.title}
      </a>

      {/* Author, Date, Source */}
      <p className="text-sm text-gray-500 mt-1 mb-2">
        {article.creator ? article.creator.join(", ") : "Unknown Author"} |{" "}
        {new Date(article.pubDate).toLocaleDateString()} |{" "}
        {article.source_name || "Unknown Source"}
      </p>

      {/* Snippet / Description */}
      <p className="text-gray-700 flex-grow">
        {article.description || "No description available."}
      </p>

      {/* Read More Button */}
      <div className="mt-4 text-right">
        <Link className=" btn btn-primary" to={`/newsdetails/${article.article_id}`}>Read More</Link>
      </div>
    </div>
  );
};

export default NewsCard;