import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import Search from './components/Search.jsx';
import RepoList from './components/RepoList.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      repos: []
    }

  }
  componentDidMount () {
    $.ajax({
        method: 'GET',
        url: 'http://localhost:1128/repos',
        success: function(data) {
          console.log('SUCCESS GET', data);
          this.setState({repos: data});
        }.bind(this),
        error: function(err) {
          console.log(err);
        }
    });
  }
  search (term) {
    console.log(`${term} was searched`);
    $.ajax({
        method: 'POST',
        url: 'http://localhost:1128/repos',
        data: term,
        success: function(data) {
          console.log('Successful POST: ', data);
          setTimeout(this.render, 500);
        }.bind(this),
        error: function(err) {
          console.log(err);
        }
    });
  }

  render () {
    $.ajax({
        method: 'GET',
        url: 'http://localhost:1128/repos',
        success: function(data) {
          console.log('SUCCESS GET', data);
          this.setState({repos: data});
        }.bind(this),
        error: function(err) {
          console.log(err);
        }
    });
    return (<div>
      <h1>Github Fetcher</h1>
      <RepoList repos={this.state.repos}/>
      <Search onSearch={this.search.bind(this)}/>
    </div>)
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
