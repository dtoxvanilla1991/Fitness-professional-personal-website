import './App.css';
import {
  InnerPageContainer,
  PageContainer,
} from "./components/pageContainer";
import { Footer } from './components/footer';
import { lazy, Suspense } from 'react';
import { HomePage } from "./containers/HomePage/index.jsx";
import { Navbar } from './components/navbar';
import { Switch, Route } from "react-router-dom";
import { LeadAccessPage } from './containers/LeadAccessPage';



export default function App() {

const optionsPage = lazy(() => import("./containers/allPackages/allPackages"));
const ourMission = lazy(() => import("./containers/companyFoundation/ourMission"));
const ourValues = lazy(() => import("./containers/companyFoundation/ourValues"));
const education = lazy(() => import("./containers/companyFoundation/education"));
const contacts = lazy(() => import("./containers/companyFoundation/contacts"));

  return <div className="App">
     <PageContainer>
     <InnerPageContainer>
      <Navbar />
      <Switch>
        <Suspense fallback={<h1>Loading...</h1>}>
      <Route path="/" exact component={HomePage} />
      <Route path="/allpackages" exact component={optionsPage} />
      <Route path="/ourmission" exact component={ourMission} />
      <Route path="/ourvalues" exact component={ourValues} />
      <Route path="/education" exact component={education} />
      <Route path="/contacts" exact component={contacts} />
      <Route path="/customer/access/:action" exact component={LeadAccessPage} />
      </Suspense>
      </Switch>
      </InnerPageContainer>
      <Footer />
      </PageContainer>
  </div>;
}