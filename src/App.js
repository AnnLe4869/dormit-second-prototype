import {useUserIsAuthenticated} from './context/user-context'

function App() {

  useUserIsAuthenticated()
  return (
    <div className="App">
      Hello world
    </div>
  );
}

export default App;
