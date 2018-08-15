import React, { Component } from 'react';
import QuizQuestion from './QuizQuestion.js'
import QuizEnd from './QuizEnd';

let quizData = require('./quiz_data.json')

class Quiz extends Component {
    constructor(props) {
        super(props);
        this.state = {
            quiz_position: 1
        }
    };
    render() {
        const isQuizEnd = false;
        return (
            <div>
                <QuizEnd displayQuiz={this.props.isQuizEnd} />
                <QuizQuestion quiz_question={quizData.quiz_questions[this.state.quiz_position - 1]} />
            </div>
        );
    }
}

export default Quiz;