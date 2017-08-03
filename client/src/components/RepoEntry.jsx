import React from 'react';

const RepoEntry = (props) => (
  <div>
    <ul>
      <li><a href={props.repo.html_url}> {props.repo.full_name}</a></li>
    </ul>
  </div>
)

export default RepoEntry;
