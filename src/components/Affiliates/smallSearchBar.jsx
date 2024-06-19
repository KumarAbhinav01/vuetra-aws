import React, { useState } from 'react';
import { alpha, styled } from '@mui/material/styles';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: '50px',
  height: '30px',
  width: '30px',
  backgroundColor: theme.palette.color.bg2,
  border: `1px solid ${alpha(theme.palette.color.secondary, 0.15)}`,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  transition: 'width 0.3s ease',
  overflow: 'hidden',
  '&:hover': {
    width: '150px',
    border: `1px solid ${theme.palette.color.active}`,
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  position: 'absolute',
  alignItems: 'center',
  left: '5px',
  color: '#7D8B97',
  transition: 'color 0.3s ease',
  '&:hover': {
    color: theme.palette.color.active,
  },
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: '#7D8B97',
  height: '100%',
  width: '100%',
  paddingLeft: '30px',
  transition: 'width 0.3s ease',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1),
    width: '100%',
  },
}));

export function SmallSearchBar() {
  return (
    <Search>
      <SearchIconWrapper>
        <SearchIcon sx={{ pt: 0.5, pr: 0.7, height: '17px' }} />
      </SearchIconWrapper>
      <StyledInputBase
        placeholder="Search…"
        inputProps={{ 'aria-label': 'search' }}
      />
    </Search>
  );
}

export default SmallSearchBar;