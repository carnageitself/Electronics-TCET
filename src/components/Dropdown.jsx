import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export default function DropDOwn() {
  const [sem, setSem] = React.useState('');

  const handleChange = (event) => {
    setSem(event.target.value);
  };

  return (
    <Box sx={{ minWidth: 120}}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Semester</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={sem}
          label="Age"
          onChange={handleChange}
        >
          <MenuItem value={10}>One</MenuItem>
          <MenuItem value={20}>Two</MenuItem>
          <MenuItem value={30}>Three</MenuItem>
          <MenuItem value={30}>Four</MenuItem>
          <MenuItem value={30}>Five</MenuItem>
          <MenuItem value={30}>Six</MenuItem>
          <MenuItem value={30}>Seven</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
}