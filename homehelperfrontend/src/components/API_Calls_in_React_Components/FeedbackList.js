import React, { useEffect, useState } from "react";
import { getFeedbacks } from "../../services/feedbackService";

const FeedbackList = () => {
    const [feedbacks, setFeedbacks] = useState([]);

    useEffect(() => {
        loadFeedbacks();
    }, []);

    const loadFeedbacks = async () => {
        try {
            const response = await getFeedbacks();
            setFeedbacks(response.data);
        } catch (error) {
            console.error("Error fetching feedbacks:", error);
        }
    };

    return (
        <div>
            <h2>Feedback List</h2>
            <ul>
                {feedbacks.map(feedback => (
                    <li key={feedback.id}>
                        {feedback.customerName}: {feedback.comment}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default FeedbackList;
