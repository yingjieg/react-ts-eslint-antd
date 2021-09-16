import React from 'react';
import ReactDOM from 'react-dom';
import { Route, Switch } from 'react-router';
import { Link, HashRouter as Router } from 'react-router-dom';

import Welcome from './pages/Welcome';

import styles from './global.less';

const App: React.FC = () => {
  return (
    <Router>
      <div>
        <ul className={styles.list}>
          <li>
            <Link to="/welcome">Welcome Page</Link>
          </li>
        </ul>

        <main>
          <Switch>
            <Route exact path="/welcome" children={<Welcome />} />
          </Switch>
        </main>
      </div>
    </Router>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
