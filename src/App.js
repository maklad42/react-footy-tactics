import logo from './logo.svg';
import { Card } from './components';
import movies from './data';

export default function App() {
  return (
    <main>
      {movies.map((movie) => (
        <Card className="mr" />
      ))}
    </main>
  );
}
