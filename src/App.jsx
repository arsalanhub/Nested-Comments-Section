import './App.css'
import Comment from './Components/Comments'
import commentsData from './data/comments'

function App() {
  return (
    <Comment commentsData={commentsData} />
  )
}

export default App
