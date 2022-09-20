import { createFeatureSelector, createSelector } from '@ngrx/store';
import { weatherReducerKey } from '../reducers/weather.reducer';
const reducerReportState = createFeatureSelector<any>(weatherReducerKey);

export const GetWeatherList = createSelector(reducerReportState, (state) => {
  return state.weatherList;
});
