import {useContext, useEffect, useState} from 'react';
import {AppContext} from '../../context/AppContext';
import UnitService from '../../services/UnitService';

const useWeight = () => {
  const { system, weight } = useContext(AppContext);
  const [maintenanceCalories, setMaintenanceCalories] = useState(0);
  const [cuttingCalories, setCuttingCalories] = useState(0);
  const [maintenanceProteins, setMaintenanceProteins] = useState(0);

  useEffect(() => {
    if (weight >= 0) {
      const pounds = system === 'metric' ? UnitService.kgsToLbs(weight) : weight;

      setMaintenanceProteins(UnitService.getMaintenanceProteins(pounds));
      setMaintenanceCalories(UnitService.getMaintenanceCalories(pounds));
      setCuttingCalories(UnitService.getCuttingCalories(pounds));
    }
  }, [weight, system]);

  return {
    maintenanceCalories, cuttingCalories, maintenanceProteins
  };
};

export default useWeight;
