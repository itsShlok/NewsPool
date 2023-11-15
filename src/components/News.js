import React, { Component } from "react";

import NewsItem from "./NewsItem";

export class News extends Component {


  constructor() {
    super();
    console.log("I am constructor");
    this.state = {
      articles: [],
      loading: false,
      page:1,
      
    };
  }

  async componentDidMount(){
    console.log('cdm')
    let url1='https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=98e54191c65f49298ca03cf3ae2b5992&pageSize=20';
    let data=await fetch(url1);
    let parseData= await data.json()
    console.log(parseData);
    this.setState({articles:parseData.articles,totalResult:parseData.totalResults})
  }

  handleNextClick=async()=>{
    console.log("next")
    if(this.state.page+1>Math.ceil(this.state.totalResult/20)){

    }else{
    let url1=`https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=98e54191c65f49298ca03cf3ae2b5992&page=${this.state.page+1}&pageSize=20`;
    let data=await fetch(url1);
    let parseData= await data.json()
    console.log(parseData);
    this.setState({
      page:this.state.page+1,
      articles:parseData.articles})
    }
  }
  handlePrevClick=async()=>{
    console.log("previous")
    let url1=`https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=98e54191c65f49298ca03cf3ae2b5992&page=${this.state.page-1}&pageSize=20`;
    let data=await fetch(url1);
    let parseData= await data.json()
    console.log(parseData);
    this.setState({
      page:this.state.page-1,
      articles:parseData.articles})
  }


  render() {
    return (
      <div className="container my-3">
        <h2>Top Headlines</h2>
            
        <div className="row">
        {this.state.articles.map((element)=>{
                return <div className="col-md-4" key={element.url}>
                <NewsItem 
                  title={element.title}
                  description={element.description}
                  imageUrl={element.urlToImage}
                  newsUrl={element.url} 
                />
              </div>
            })}
          
        </div>
        <div className="container d-flex justify-content-between">
        <button type="button" disabled={this.state.page<=1} className="btn btn-dark"onClick={this.handlePrevClick}>&larr; Previous</button>
        <button type="button" className="btn btn-dark" onClick={this.handleNextClick}>next &rarr;</button>

        </div>
      </div>
    );
  }
}

export default News;
