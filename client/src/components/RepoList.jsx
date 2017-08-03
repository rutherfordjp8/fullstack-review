import React from 'react';
import RepoEntry from './RepoEntry.jsx';

const RepoList = (props) => (
  <div>
    <h4> Repo List Component </h4>
    {props.repos.map(repos =>
        <RepoEntry repo={repos}/>
    )}
    There are {props.repos.length} repos.
  </div>
)

export default RepoList;
