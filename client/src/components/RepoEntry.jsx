import React from 'react';

const RepoEntry = (props) => (
  <div>
    <ol>
      {props.repo.full_name}
    </ol>
  </div>
)

export default RepoEntry;
