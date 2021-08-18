import { useState } from 'react';

import Section from './Components/Section';
import Statistics from './Components/Statistics';
import FeedbackOptions from './Components/FeedbackOptions';

export default function App() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const increment = e => {
    const key = e.currentTarget.textContent.toLowerCase();
    switch (key) {
      case 'good':
        setGood(prevState => prevState + 1);
        break;

      case 'neutral':
        setNeutral(prevState => prevState + 1);
        break;

      case 'bad':
        setBad(prevState => prevState + 1);
        break;

      default:
        console.log('Error');
    }
  };

  const totalFeedbacks = good + bad + neutral;

  const positiveFeedbackPercentage = Math.round((good / totalFeedbacks) * 100);

  const options = ['good', 'neutral', 'bad'];
  return (
    <>
      <Section title="Please leave feedback">
        <FeedbackOptions options={options} onLeaveFeedback={increment} />
      </Section>

      <Section title="Statistics">
        <Statistics
          good={good}
          neutral={neutral}
          bad={bad}
          total={totalFeedbacks}
          positivePercentage={positiveFeedbackPercentage}
        />
      </Section>
    </>
  );
}
