import React from 'react';
import { BrowserRouter, Switch } from 'react-router-dom';

import AppRoute from './Hoc';
import Main from 'layouts/Main';

import Home from 'pages/Main/main';
import Summery from 'pages/Sammery/summery';
import Auth from 'pages/Auth/auth';
import Registration from 'pages/Registration';
import Search from 'pages/Search';
import VacanciesForm from 'pages/CreationForm/Vacancies';
import ResumesForm from 'pages/CreationForm/Resumes';
import ResultsResumes from 'pages/Results/Resumes';
import ResultsVacancies from 'pages/Results/Vacancies';
import View from 'pages/View';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <AppRoute path="/" component={Home} layout={Main} exact />
        <AppRoute path="/auth" component={Auth} exact />
        <AppRoute path="/registration/:type" component={Registration} exact />
        <AppRoute path="/summery" component={Summery} layout={Main} exact />
        <AppRoute path="/search/:type" component={Search} layout={Main} exact />
        <AppRoute path="/create-vacancy" component={VacanciesForm} layout={Main} exact />
        <AppRoute path="/create-resume" component={ResumesForm} layout={Main} exact />
        <AppRoute path="/results/resumes" component={ResultsResumes} layout={Main} exact />
        <AppRoute path="/results/vacancies" component={ResultsVacancies} layout={Main} exact />
        <AppRoute path="/view/:type/:id" component={View} layout={Main} exact />
      </Switch>
    </BrowserRouter>
  );
}
export default App;
