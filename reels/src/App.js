import './App.css';
import Signup from './components/Signup';
import AuthProvider from './Context/AuthProvider';

function App() {
  return (
    <AuthProvider value={value}>
      <Signup/>
    </AuthProvider>
  );
}

export default App;
