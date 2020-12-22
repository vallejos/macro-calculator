import React, { ReactElement } from 'react'
import { Card, CardContent, CardHeader, Typography } from '@material-ui/core'
import useWeight from '../hooks/useWeight';

function Calories(): ReactElement {
  const { maintenanceCalories, cuttingCalories} = useWeight();

  return (
    <Card>
      <CardHeader title="Daily Calories" />
      <CardContent>
        <Typography variant="subtitle1">
          Maintenance Calories: {maintenanceCalories}
        </Typography>
        <Typography variant="subtitle1">
          Cutting Calories: {cuttingCalories}
        </Typography>
      </CardContent>
    </Card>
  )
}

export default Calories
