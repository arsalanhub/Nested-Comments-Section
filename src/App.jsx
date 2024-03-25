import { useState } from 'react'
import './App.css'
import Comment from './Components/Comments'
import commentsData from './data/comments'
import { updateComment } from './utils/helper';

function App() {
  const [comments, setComments] = useState(commentsData);
  const addNewReply = (targetId, newComment) => {
    const newUpdatedComments = updateComment(comments, targetId, newComment);
    setComments(newUpdatedComments);
  }
  return (
    <Comment commentsData={comments} addNewReply={addNewReply} />
  )
}

export default App
