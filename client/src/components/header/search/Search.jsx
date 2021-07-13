import React from 'react';
import searchStyle from './search.module';

import InputBase from '@material-ui/core/InputBase';
import SearchIcon from '@material-ui/icons/Search';

export default function Search() {
  return (
    <div className={searchStyle.search}>
      <div className={searchStyle.searchIcon}>
        <SearchIcon />
      </div>
      <InputBase
        placeholder="Search…"
        classes={{
          root: searchStyle.inputRoot,
          input: searchStyle.inputInput,
        }}
        inputProps={{ 'aria-label': 'search' }}
      />
    </div>
  );
}
