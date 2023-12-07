import React, { useEffect, useState } from "react";
import Spinner1 from "./Spinner1";
import NewsItem from "./NewsItem";
import PropTypes from "prop-types";
import Navbar from "./Navbar";

const News = (props) => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [totalResult, setTotalResult] = useState(0);
  //  document.title =`${props.category}-MonkeyNews`;

  useEffect(() => {
    updatePage();
  }, []);

  const updatePage = async () => {
    let url1 = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=98e54191c65f49298ca03cf3ae2b5992&page=${page}&pageSize=${props.pageSize}`;
    setLoading({ loading: true });
    let data = await fetch(url1);
    let parseData = await data.json();
    console.log(parseData);
    setArticles(parseData.articles);
    setTotalResult(parseData.totalResults);
    setLoading(false);
  };

  const handleNextClick = async () => {
    console.log("next");
    // if (
    //   !(
    //     this.state.page + 1 >
    //     Math.ceil(this.state.totalResult / props.pageSize)
    //   )
    // ) {
    // let url1 = `https://newsapi.org/v2/top-headlines?country=${
    //   props.country
    // }&category=${
    //   props.category
    // }&apiKey=98e54191c65f49298ca03cf3ae2b5992&page=${
    //   this.state.page + 1
    // }&pageSize=${props.pageSize}`;
    // this.setState({ loading: true });
    // let data = await fetch(url1);
    // let parseData = await data.json();

    // this.setState({
    //   page: this.state.page + 1,
    //   articles: parseData.articles,
    //   loading: false,
    // });
    // this.setState({
    //   page: this.state.page + 1,
    // });
    setPage(page+1)
    updatePage();
  };
  const handlePrevClick = async () => {
    console.log("previous");
    // let url1 = `https://newsapi.org/v2/top-headlines?country=${
    //   props.country
    // }&category=${
    //   props.category
    // }&apiKey=98e54191c65f49298ca03cf3ae2b5992&page=${
    //   this.state.page - 1
    // }&pageSize=${props.pageSize}`;
    // this.setState({ loading: true });
    // let data = await fetch(url1);
    // let parseData = await data.json();
    // console.log(parseData);
    // this.setState({
    //   page: this.state.page - 1,
    //   articles: parseData.articles,
    //   loading: false,
    // });
    // this.setState({
    //   page: this.state.page - 1,
    // });
    setPage(page-1)
    updatePage();
  };

  return (
    <div className="container my-3">
      <h2 className="text-center">{`Top Headlines on ${props.category}`}</h2>
      {loading && <Spinner1 />}
      <div className="row">
        {!loading &&
          articles.map((element) => {
            return (
              <div className="col-md-4" key={element.url}>
                <NewsItem
                  title={element.title}
                  description={element.description}
                  imageUrl={element.urlToImage}
                  newsUrl={element.url}
                  author={element.author}
                  date={element.publishedAt}
                />
              </div>
            );
          })}
      </div>
      <div className="container d-flex justify-content-between">
        <button
          type="button"
          disabled={page <= 1}
          className="btn btn-dark"
          onClick={handlePrevClick}
        >
          &larr; Previous
        </button>
        <button
          type="button"
          disabled={
            page + 1 >
            Math.ceil(totalResult / props.pageSize)
          }
          className="btn btn-dark"
          onClick={handleNextClick}
        >
          next &rarr;
        </button>
      </div>
    </div>
  );
};
News.defaultProps = {
  country: "in",
  pageSize: 12,
  category: "general",
};
News.propTypes = {
  country: PropTypes.string,
  pageSize: PropTypes.number,
  category: PropTypes.string,
};

export default News;
