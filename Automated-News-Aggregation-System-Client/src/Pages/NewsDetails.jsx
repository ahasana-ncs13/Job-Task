// NewsDetails.jsx
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router";

const NewsDetails = () => {
  const { id } = useParams(); // get article_id from URL
  console.log(id)
  const [article, setArticle] = useState(null); // store single article
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get(`http://localhost:3000/allnews/${id}`)
      .then((res) => {
        setArticle(res.data); // assuming res.data is a single article object
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setLoading(false);
      });
  }, [id]);

  if (loading) return <p className="p-6">Loading article...</p>;
  if (!article) return <p className="p-6">Article not found.</p>;

  return (
    <div className="p-6 bg-gray-100 min-h-screen flex justify-center">
      <div className="card w-full max-w-3xl bg-white shadow-lg rounded-lg overflow-hidden">
        {/* Article Image */}
        {article.image_url && (
          <img
            src={article.image_url}
            alt={article.title}
            className="w-full h-64 object-cover"
          />
        )}

        <div className="p-6 flex flex-col">
          {/* Title */}
          <h1 className="text-2xl font-bold mb-3 text-gray-800">
            {article.title}
          </h1>

          {/* Author, Date, Source */}
          <p className="text-sm text-gray-500 mb-4">
            <span className="font-semibold">Author:</span>{" "}
            {article.creator ? article.creator.join(", ") : "Unknown"} |{" "}
            <span className="font-semibold">Date:</span>{" "}
            {new Date(article.pubDate).toLocaleString()} |{" "}
            <span className="font-semibold">Source:</span>{" "}
            {article.source_name || "Unknown"}
          </p>

          {/* Description / Snippet */}
          <p className="text-gray-700 mb-4">
            <span className="font-semibold">Description:</span>{" "}
            {article.description || "No description available."}
          </p>

          {/* Full Content */}
          <p className="text-gray-700 mb-4">
            <span className="font-semibold">Content:</span>{" "}
            {article.content || "Content not available."}
          </p>

          {/* Keywords */}
          {article.keywords && article.keywords.length > 0 && (
            <div className="mb-4">
              <span className="font-semibold">Keywords:</span>{" "}
              {article.keywords.join(", ")}
            </div>
          )}

          {/* Other Info */}
          <div className="mb-4 text-sm text-gray-500">
            <p>
              <span className="font-semibold">Language:</span>{" "}
              {article.language || "Unknown"}
            </p>
            <p>
              <span className="font-semibold">Country:</span>{" "}
              {article.country ? article.country.join(", ") : "Unknown"}
            </p>
            <p>
              <span className="font-semibold">Category:</span>{" "}
              {article.category ? article.category.join(", ") : "Unknown"}
            </p>
            <p>
              <span className="font-semibold">Source URL:</span>{" "}
              <a
                href={article.source_url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline"
              >
                {article.source_url}
              </a>
            </p>
          </div>

          {/* Buttons */}
          <div className="flex justify-between mt-4">
            <Link to="/" className="btn btn-outline">
              Back to All News
            </Link>
            <a
              href={article.link}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary"
            >
              Read Original Article
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsDetails;