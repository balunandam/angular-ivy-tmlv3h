import { createAction, props } from '@ngrx/store';
export const getWeatherReport = createAction(
  '[weather-management] getWeatherReport',
  props<{ locations: any }>()
);

export const getWeatherReportSuccess = createAction(
  '[weather-management] getWeatherReportSuccess',
  props<{ response: any }>()
);

export const getWeatherReportFailure = createAction(
  '[weather-management] getWeatherReportFailure',
  props<{ error: any }>()
);
