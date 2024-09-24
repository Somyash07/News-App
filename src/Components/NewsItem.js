import React from "react";

const NewsItem = (props) => {
  let { title, description, imageUrl, newsUrl, author, date, source } = props;

  // Function to truncate title to a specific number of words
  const truncateTitle = (title, numWords) => {
    const words = title.split(" ");
    return words.slice(0, numWords).join(" ") + "...";
  };

  return (
    <>
      <div
        className="card"
        style={{ width: "18rem", marginTop: "1rem", border: "8px solid rgb(40,40,40)", background: "#202020", height:"21rem" ,display:"flex",justifyContent:"space-around"}}
      >
        <img
          src={
            !imageUrl
              ? "https://static.vecteezy.com/system/resources/thumbnails/006/299/370/original/world-breaking-news-digital-earth-hud-rotating-globe-rotating-free-video.jpg"
              : imageUrl
          }
          height={203}
          width={203}
          className="card-img-top"
          alt="..."
        />
        <div className="card-body" style={{ color: "white" }}>
          <h5 className="card-title">{truncateTitle(title, 5)}</h5>
          <span
            className="position-absolute top-0  translate-middle badge rounded-pill bg-danger"
            style={{ left: "90%", zIndex: "1", color: "white" }}
          >
            {source}
            <span className="visually-hidden" style={{ color: "white" }}>unread messages</span>
          </span>
          {/* <p className="card-text">{description}...</p> */}
          <p className="card-text">
            <small style={{ color: "white" }}>
              By {!author ? "unknown" : author} on{" "}
              {new Date(date).toGMTString()}
            </small>
          </p>
          <a
            href={newsUrl}
            rel="noreferrer"
            target="_blank"
            className="btn btn-sm btn-primary"
            style={{ border: "none" }}
          >
            Read More
          </a>
        </div>
      </div>
    </>
  );
};

export default NewsItem;