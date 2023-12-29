import Home from './components/Home'
import Ac from './components/Ac'
import Nav from './components/Nav'
import { Router, Route } from '@solidjs/router'

function App() {





  return (
    <div>
      <Nav />

      <Router>
        <Route path={'/'} component={Home} />
        <Route path={'/ac'} component={Ac} />
      </Router>
    </div>



  )
}

export default App
