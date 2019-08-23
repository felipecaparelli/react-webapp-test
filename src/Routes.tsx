import React from 'react';
import { Switch, Redirect } from 'react-router-dom';

import { RouteWithLayout } from './components';
import { Main as MainLayout } from './layouts';

import {
  Home as HomeView,
  PatientList as PatientListView,
  GlucoseMeasureChart as GlucoseMeasureChartView
} from './views';

const Routes = () => {
  return (
    <Switch>
      <Redirect
        exact
        from="/"
        to="/home"
      />
      <RouteWithLayout
        component={HomeView}
        exact
        layout={MainLayout}
        path="/home"
      />
      <RouteWithLayout
        component={PatientListView}
        exact
        layout={MainLayout}
        path="/list"
      />
      <RouteWithLayout
        component={GlucoseMeasureChartView}
        layout={MainLayout}
        path="/chart/:id"
      />
      <Redirect to="/home" />
    </Switch>
  );
};

export default Routes;
