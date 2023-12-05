import React, { Component } from "react";

export class NewsItem extends Component {
  render() {
    let { title, description, imageUrl ,newsUrl,author,date} = this.props;
    return (
      <div className="my-3">
        <div className="card" style={{ width: "18rem", height: '390px'}}>
          <img src={imageUrl} className="card-img-top" alt="..." style={{maxWidth: '100%', 
    maxHeight: '150px', 
    objectFit: 'cover'}}/>
          <div className="card-body">
            <h5 className="card-title" style={{maxHeight: '50px' ,overflow:"hidden"}}>{title}</h5>
            <p className="card-text" style={{maxHeight: '50px' ,overflow:"hidden"}}>{description}</p>
            <p className="card-text"><small className="text-muted"><strong>by</strong> {!author?"Unknown":author}
             <strong> on</strong> {new Date(date).toDateString()}</small></p>
            <a href={newsUrl} rel="noreferrer" target="_blank" className="btn btn-sm btn-primary position-absolute bottom-0 start-2 mb-3 mr-3">
              Read more
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default NewsItem;
