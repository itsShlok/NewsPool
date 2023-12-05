import React, { Component } from "react";
import Spinner1 from "./Spinner1";
import NewsItem from "./NewsItem";
import PropTypes from "prop-types";
import Navbar from "./Navbar";

export class News extends Component {
  static defaultProps = {
    country: "in",
    pageSize: 12,
    category: "general",
  };
  static propTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string,
  };

  constructor(props) {
    super(props);
    console.log("I am constructor");
    this.state = {
      articles: [],
      loading: false,
      page: 1,
    };
    document.title =`${this.props.category}-MonkeyNews`;
  }

  async componentDidMount() {
    console.log("cdm");
    let url1 = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=98e54191c65f49298ca03cf3ae2b5992&pageSize=${this.props.pageSize}`;
    this.setState({ loading: true });
    let data = await fetch(url1);
    let parseData = await data.json();
    console.log(parseData);
    this.setState({
      articles: parseData.articles,
      totalResult: parseData.totalResults,
      loading: false,
    });
  }
  async updatePage(){
    let url1 = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=98e54191c65f49298ca03cf3ae2b5992&page=${this.state.page}&pageSize=${this.props.pageSize}`;
    this.setState({ loading: true });
    let data = await fetch(url1);
    let parseData = await data.json();
    console.log(parseData);
    this.setState({
      articles: parseData.articles,
      totalResult: parseData.totalResults,
      loading: false,
    });
  }

  handleNextClick = async () => {
    console.log("next");
    // if (
    //   !(
    //     this.state.page + 1 >
    //     Math.ceil(this.state.totalResult / this.props.pageSize)
    //   )
    // ) {
      // let url1 = `https://newsapi.org/v2/top-headlines?country=${
      //   this.props.country
      // }&category=${
      //   this.props.category
      // }&apiKey=98e54191c65f49298ca03cf3ae2b5992&page=${
      //   this.state.page + 1
      // }&pageSize=${this.props.pageSize}`;
      // this.setState({ loading: true });
      // let data = await fetch(url1);
      // let parseData = await data.json();

      // this.setState({
      //   page: this.state.page + 1,
      //   articles: parseData.articles,
      //   loading: false,
      // });
      this.setState({
        page:this.state.page+1
      })
      this.updatePage()
    
  };
  handlePrevClick = async () => {
    console.log("previous");
    // let url1 = `https://newsapi.org/v2/top-headlines?country=${
    //   this.props.country
    // }&category=${
    //   this.props.category
    // }&apiKey=98e54191c65f49298ca03cf3ae2b5992&page=${
    //   this.state.page - 1
    // }&pageSize=${this.props.pageSize}`;
    // this.setState({ loading: true });
    // let data = await fetch(url1);
    // let parseData = await data.json();
    // console.log(parseData);
    // this.setState({
    //   page: this.state.page - 1,
    //   articles: parseData.articles,
    //   loading: false,
    // });
    this.setState({
      page:this.state.page-1
    })
    this.updatePage()
  };

  render() {
    return (
      
     
      <div className="container my-3">
        <h2 className="text-center">{`Top Headlines on ${this.props.category}`}</h2>
        {this.state.loading && <Spinner1 />}
        <div className="row">
          {!this.state.loading &&
            this.state.articles.map((element) => {
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
            disabled={this.state.page <= 1}
            className="btn btn-dark"
            onClick={this.handlePrevClick}
          >
            &larr; Previous
          </button>
          <button
            type="button"
            disabled={
              this.state.page +1  >
              Math.ceil(this.state.totalResult / this.props.pageSize)
            }
            className="btn btn-dark"
            onClick={this.handleNextClick}
          >
            next &rarr;
          </button>
        </div>
      </div>
      
    );
  }
}

export default News;
