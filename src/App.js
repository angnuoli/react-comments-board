import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import CommentList from './Component/CommentList'
import CommentBox from './Component/CommentBox';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      comments: ['This is first comment.']
    }
    this.addComment = this.addComment.bind(this)
    this.deleteComment = this.deleteComment.bind(this)
  }

  addComment(comment) {
    this.setState ({
      comments: [...this.state.comments, comment]
    })
  }

  deleteComment(index) {
    this.setState({
      comments: this.state.comments.filter((_, i) => i !== index)
    })
  }

  render() {
    const { comments } = this.state
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Comment Board</h1>
        </header>
        <CommentList comments={ comments } onDeleteComment={this.deleteComment} />
        <CommentBox 
          commentsLength={ comments.length } 
          onAddComment={this.addComment} 
        />
      </div>
    );
  }
}

export default App;
