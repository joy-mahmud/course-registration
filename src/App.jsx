
import './App.css'
import Courses from './components/courses/courses'
import Header from './components/header/header'

function App() {

  return (
    <>
     <Header></Header>
     <main className='container mx-auto'>
      <Courses></Courses>
     </main>
    </>
  )
}

export default App
