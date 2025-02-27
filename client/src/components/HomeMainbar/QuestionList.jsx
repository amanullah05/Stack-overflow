import React from 'react'
import Questions from './Questions'
function QuestionList({questionsList}) {
  return (
      <>
      {
              questionsList.map((question) =>(
              < Questions question={question} key={question.id} />
            ))
      }
      </>
  )
}
export default QuestionList