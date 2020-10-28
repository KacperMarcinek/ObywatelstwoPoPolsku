import React, { useEffect, useState } from 'react';

import Title from '../Title/Title'
import Counter from '../Counter/Counter';
import ScoreBoard from '../ScoreBoard/ScoreBoard';
import QuestionBox from '../QuestionBox/QuestionBox';
import ResponseBox from '../ResponseBox/ResponseBox';
import AnswerList from '../AnswerList/AnswerList'

import { fetchData } from '../../data/QuizData';
import { Collapse, Container, Paper} from '@material-ui/core'

import styles from './Quiz.module.css';


const Quiz = () => {
    const [isLoading, setLoading] = useState(true);
    const [questionBank, setQuestionBank] = useState([]);
    const [currentIndex, setIndex] = useState(0); 
    const [result, setResult] = useState();
    const [responseVisibility, toggleResponseVisibility] = useState(false);
    const [correctScore, setCorrectScore] = useState(0);
    const [incorrectScore, setIncorrectScore] = useState(0);

    useEffect(() => {
        const fetchQuiz = async () => {
            setQuestionBank(await fetchData());
            setLoading(false);
        }
        fetchQuiz();
    }, [])

    if(isLoading){
        return <div>Loading...</div>
    }

    const title = "Próbny Test na Obywatelstwo";
    const { question, correctAnswer, answers } = questionBank[currentIndex];

    const onNextClick = () => {
        setIndex(currentIndex + 1);
        toggleResponseVisibility(false);
    }

    const onGetAnswer = (selectedAnswer) => {
        toggleResponseVisibility(true);
        getResult(selectedAnswer);
    }

    const getResult = (selectedAnswer) => {
        if(selectedAnswer === correctAnswer){
            setResult(true);
            setCorrectScore(correctScore + 1);
        }
        else {
            setResult(false);
            setIncorrectScore(incorrectScore + 1);
        }
    }
    
    return(
        <Container className={styles.container} maxWidth='md'>
            <Paper elevation={3}>
            <Title title={title}/>
            <Counter currentIndex={currentIndex}/>
            <ScoreBoard correctScore={correctScore} incorrectScore={incorrectScore}/>
            <QuestionBox question={question}/>
            <Collapse in={responseVisibility} timeout={80}>
            <ResponseBox 
                correctAnswer={correctAnswer}
                onNextClick={onNextClick} 
                result={result}
            />
            </Collapse>
            <AnswerList 
                answers={answers} 
                onGetAnswer={onGetAnswer}
            />
            </Paper>
        </Container>
    )
}

export default Quiz;