import styled from 'styled-components';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';

import store from './redux/redux-store';

import { FlatsPage } from './pages/FlatsPage/Flats';
import { Header } from './components/Header';
import { GamePage } from './pages/GamePage';

export const App = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Header />

        <AppContent>
          <Switch>
            <Route exact path="/" component={FlatsPage} />
            <Route exact path="/game" component={GamePage} />
          </Switch> 
        </AppContent>
      </BrowserRouter>
    </Provider>
  );
}

const AppContent = styled.div`
  margin-top: 50px;
`
