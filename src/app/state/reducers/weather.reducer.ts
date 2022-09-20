import * as weatherActions from '../actions/weather.action';
import { Action, createReducer, on } from '@ngrx/store';
import { IModelWeatherRequest } from '../../models/model.weather-management';

export const weatherReducerKey = 'weather-management';
export const initialState: IModelWeatherRequest = {
  weatherList: [],
};

export const reducerWeatherManagement = createReducer(
  initialState,
  on(weatherActions.getWeatherReportSuccess, (state, { response }) => {
    debugger;
    console.log(response);
    return {
      ...state,
      weatherList: response.value,
    };
  })
);

export function reducer(
  state: IModelWeatherRequest | undefined,
  action: Action
) {
  return reducerWeatherManagement(state, action);
}
