import React from 'react';
import {Grid} from '@material-ui/core';
import Calculator from './components/Calculator/Calculator';
import Calories from './components/Calories/Calories';
import Proteins from './components/Proteins/Proteins';
import useStyles from './App.styles';

function App() {
  const styles = useStyles();

  return (
     <div>
       <Grid container spacing={0} alignItems="center" justify="center" className={styles.grid}>
         <Grid item xs={12} sm={4} className={styles.mobile}>
           <Calories />
         </Grid>
         <Grid item xs={12} sm={3} className={styles.main}>
           <Calculator />
         </Grid>
         <Grid item xs={12} sm={4} className={styles.desktop}>
           <Calories />
         </Grid>
         <Grid item xs={12} sm={4} className={styles.last}>
           <Proteins />
         </Grid>
       </Grid>
    </div>
  );
}

export default App;
