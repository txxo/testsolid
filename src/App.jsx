import Home from './components/Home'
import Ac from './components/Ac'
import { Router, Route, A } from '@solidjs/router'

function App() {



  return (
    <div>

      <Router>
        <Route path={'/'} component={Home} />
        <Route path={'/ac'} component={Ac} />
      </Router>
    </div>



  )
}

export default App
