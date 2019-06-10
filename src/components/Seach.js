import React, { Component } from 'react';

class Search extends Component {
  render(){
  return (
    
    <div className="col-6">
      <div className="input-group">
        <input type="text" className="form-control" placeholder="Recipient's username" />
        <div className="input-group-append">
          <button className="btn btn-outline-secondary" type="button"> <i className="fas fa-search"></i> Search</button>
        </div>
      </div>
    </div>
    
    
  );
}
}
export default Search;
