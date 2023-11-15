import React, { Component } from "react";

export class NewsItem extends Component {
  render() {
    let { title, description, imageUrl ,newsUrl} = this.props;
    return (
      <div className="my-3">
        <div className="card" style={{ width: "18rem", height: '330px'}}>
          <img src={imageUrl} className="card-img-top" alt="..." style={{maxWidth: '100%', 
    maxHeight: '150px', 
    objectFit: 'cover'}}/>
          <div className="card-body">
            <h5 className="card-title" style={{maxHeight: '50px' ,overflow:"hidden"}}>{title}</h5>
            <p className="card-text" style={{maxHeight: '50px' ,overflow:"hidden"}}>{description}</p>
            <a href={newsUrl} rel="noreferrer" target="_blank" className="btn btn-sm btn-primary">
              Read more
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default NewsItem;
