import React, { ReactElement, useContext, useState } from 'react'
import {TextField, Typography, Grid, Button, FormControl, InputLabel, Select, MenuItem} from '@material-ui/core';
import {AppContext, AppContextInterface} from '../../context/AppContext';

function CalculatorForm(): ReactElement {
  const initialFormData = {
    system: 'metric',
    height: 0,
    weight: 0
  };

  const {setSystem, setWeight, setHeight} = useContext<AppContextInterface>(AppContext);
  const [formData, setFormData] = useState(initialFormData);

  const handleSystemChange = (e: any) => {
    setFormData({...formData, system: e.target.value, weight: 0, height: 0});
    setSystem(e.target.value);
    setWeight(0);
    setHeight(0);
  };

  const handleWeightChange = (e: any) => {
    setFormData({...formData, weight: e.target.value});
  };

  const handleHeightChange = (e: any) => {
    setFormData({...formData, height: e.target.value});
  };

  const handleFormSubmit = () => {
    setSystem(formData.system);
    setWeight(Number(formData.weight));
    setHeight(Number(formData.height));
  };

  const handleFormReset = () => {
    setWeight(0);
    setHeight(0);
    setFormData(initialFormData);
  };

  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <Typography align="center" variant="subtitle2" gutterBottom>
          ...
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <FormControl fullWidth>
          <InputLabel>System</InputLabel>
          <Select onChange={handleSystemChange} value={formData.system}>
            <MenuItem value="metric">Metric (kg / cm)</MenuItem>
            <MenuItem value="imperial">Imperial (lb / ft)</MenuItem>
          </Select>
        </FormControl>
      </Grid>
      <Grid item xs={6}>
        <FormControl fullWidth>
          <TextField type="number" label={`Target Weight (${formData.system === 'metric' ? 'kg' : 'lb'})`} fullWidth value={formData.weight} onChange={handleWeightChange}/>
        </FormControl>
      </Grid>
      <Grid item xs={6}>
        <FormControl fullWidth>
          <TextField type="number" label={`Your Height (${formData.system === 'metric' ? 'cm' : 'ft'})`} fullWidth value={formData.height} onChange={handleHeightChange} />
        </FormControl>
      </Grid>
      <Grid item xs={6}>
        <Button onClick={handleFormSubmit} variant="contained" color="primary" fullWidth>Calculate</Button>
      </Grid>
      <Grid item xs={6}>
        <Button onClick={handleFormReset} variant="contained" fullWidth>Reset</Button>
      </Grid>
    </Grid>
  )
}

export default CalculatorForm
