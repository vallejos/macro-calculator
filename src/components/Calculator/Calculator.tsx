import React, { ReactElement } from 'react'
import styles from './Calculator.module.css';
import {Card, CardHeader, CardContent, Typography, Divider} from '@material-ui/core'
import CalculatorForm from '../CalculatorForm/CalculatorForm';

function Calculator(): ReactElement {
  return (
    <Card className={styles.Calculator}>
      <CardHeader title="Macro Calculator" />
      <CardContent>
        <Typography variant="subtitle1">Enter your current weight to calculate your macros</Typography>
        <Divider/>
        <CalculatorForm />
      </CardContent>
    </Card>
  )
}

export default Calculator
