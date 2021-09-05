import 'react-app-polyfill/ie11';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Button, Container } from '../.';

const App = () => {
  return (
    <Container label="prova">
      <div style={{ padding: '1rem' }}>
        <Button>Test</Button>
      </div>
    </Container>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
