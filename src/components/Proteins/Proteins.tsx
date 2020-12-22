import React, { ReactElement } from 'react'
import { Card, CardContent, CardHeader, Typography } from '@material-ui/core'
import useWeight from '../hooks/useWeight';

function Proteins(): ReactElement {
  const { maintenanceProteins} = useWeight();

  return (
    <Card>
      <CardHeader title="Daily Proteins" />
      <CardContent>
      <Typography variant="subtitle1">
          Proteins: {maintenanceProteins}
        </Typography>
      </CardContent>
    </Card>
  )
}

export default Proteins
