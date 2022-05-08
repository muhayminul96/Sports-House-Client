import React from "react";
import "./Blog.css";

const Blog = (props) => {
  const { blogText, title, blogUrl } = props.blog;
  return (
    <div className="blog-body">
      <h3>{title}</h3>
      <p>
        {blogText}{" "}
        <a target="_blank" href={blogUrl}>
          learn more
        </a>
      </p>
    </div>
  );
};

export default Blog;
