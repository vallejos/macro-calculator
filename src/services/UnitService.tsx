export default class UnitService {

public static kgsToLbs (kgs: number) {
  return kgs * 2.20462;
}

public static cmsToFts (cms: number) {
  return cms * 0.0328084;
}

public static getMaintenanceCalories (pounds: number) {
  return pounds > 0 ? Math.round(pounds * 15) : 0;
}

public static getCuttingCalories (pounds: number)  {
  return pounds > 0 ? Math.round(pounds * 15) - 400 : 0;
}

public static getMaintenanceProteins (pounds: number) {
  return Math.round(pounds * 0.8);
}

}