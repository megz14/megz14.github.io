import { ThemeProvider } from './contexts/ThemeContext';
import { Desktop } from './components/Desktop';

function App() {
  return (
    <ThemeProvider>
      <Desktop />
      
    </ThemeProvider>
  );
}

export default App;

