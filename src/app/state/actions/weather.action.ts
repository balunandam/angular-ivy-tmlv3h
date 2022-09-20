import { createAction, props } from '@ngrx/store';
export const getWeatherReport = createAction(
  '[weather-management] getWeatherReport',
  props<{ location: any }>()
);

export const getWeatherReportSuccess = createAction(
  '[weather-management] getWeatherReportSuccess',
  props<{ response: any }>()
);

export const LoadFailure = createAction(
  '[weather-management] LoadFailure',
  props<{ error: any }>()
);
