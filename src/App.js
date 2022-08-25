import 'bootstrap/dist/css/bootstrap.min.css';

import MovieList from './components/MovieList';
import { Container } from 'react-bootstrap';
import MovieForm from './components/MovieForm';
import MovieContext from './contexts/MovieContext';

function App() {
  return (
    <div className="App">
      <MovieContext>
        <MovieForm />
        <MovieList />     
      </MovieContext>
    </div>
  );
}

export default App;
