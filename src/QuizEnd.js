import React, { Component } from 'react';

class QuizEnd extends Component {
    render() {
        const isQuizEnd = true;
        return (
            <div>
                <p>Thanks for playing!</p>
                <a href=''>Reset Quiz</a>
            </div>
        );
    }
}

export default QuizEnd;    