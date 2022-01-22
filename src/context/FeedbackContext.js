import {createContext, useState} from 'react'
import {v4 as uuidv4} from 'uuid'

const FeedbackContext = createContext()

export const FeedbackProvider = ({children}) => {
    
    const [feedback, setFeedback] = useState([
        {
            id:1,
            text:'This item #1 is from context',
            rating: 10
        },
        {
            id:2,
            text:'This item #2 is from context',
            rating: 7
        },
        {
            id:3,
            text:'This item #3 is from context',
            rating: 3
        }
    ])

    const [feedbackEdit, setFeedbackEdit] = useState({
        item: {},
        edit: false
    })

    const deleteFeedback = (id) => {
        console.log("id", id);
        if (window.confirm("Are you sure you want to delete?")) {
          setFeedback(feedback.filter((item) => item.id !== id));
        }
      };

    const addFeedback = (newFeedback) => {
        newFeedback.id = uuidv4()
        console.log(newFeedback)
        setFeedback([newFeedback,...feedback])
    }

    const editFeedback = (item) => {
        setFeedbackEdit({
            item,
            edit: true
        })
    }
    
    return <FeedbackContext.Provider value={{
        feedback: feedback,
        deleteFeedback,
        addFeedback,
        editFeedback,
        feedbackEdit
    }}>
        {children}
    </FeedbackContext.Provider>
}

export default FeedbackContext