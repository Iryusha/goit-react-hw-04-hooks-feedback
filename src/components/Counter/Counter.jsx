import FeedbackOptions from './FeedbackOptions/FeedbackOptions ';
import Statistics from './Statistics/Statistics';
import Section from './Section/Section';
import Notification from './Notification/Notification';
import { useState } from 'react';

const Counter = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const buttons = ['good', 'neutral', 'bad'];
  const totalFeedback = good + neutral + bad;
  const percentPositivFeedback = Math.round((100 / totalFeedback) * good);

  const onLeaveFeedback = e => {
    switch (e) {
      case 'good':
        return setGood(prevState => prevState + 1);

      case 'neutral':
        return setNeutral(prevState => prevState + 1);

      case 'bad':
        return setBad(prevState => prevState + 1);
      default:
        return;
    }
  };
  return (
    <div>
      <Section title="Please leave feedback">
        <FeedbackOptions options={buttons} onLeaveFeedback={onLeaveFeedback} />
      </Section>

      <Section title="Statistics">
        {totalFeedback === 0 ? (
          <Notification message="There is no feedback" />
        ) : (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={totalFeedback}
            positivePercentage={percentPositivFeedback}
          />
        )}
      </Section>
    </div>
  );
};


export default Counter;
