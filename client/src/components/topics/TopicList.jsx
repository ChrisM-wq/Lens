import { Box } from "@mui/material";
import TopicItem from "./TopicItem";





const data = [
  {
    topic: 'Life',
    secondary: 'Family',
    sub: [
      'Adoption',
      'Children',
      'Elder Care',
      'Fatherhood',
      'Motherhood',
      'Parenting',
      'Pregnancy',
      'Seniors',
    ]
  },
  {
    secondary: 'Health',
    sub: [
      'Aging',
      'Coronavirus',
      'Covid-19',
      'Death And Dying',
      'Disease',
    ]
  },
  {
    secondary: 'Relationships',
    sub: [
      'Dating',
      'Divorce',
      'Friendship',
      'Love',
      'Marriage',
      'Polyamory',
    ]
  },
  {
    topic: 'Self Improvement',
    secondary: 'Mental Health',
    sub: [
      'Anxiety',
      'Counseling',
      'Grief',
      'Life Lessons',
      'Self-awareness',
      'Stress',
      'Therapy',
      'Trauma',
    ]
  },
  {
    secondary: 'Productivity',
    sub: [
      'Career Advice',
      'Coaching',
      'Goal Setting',
      'Morning Routines',
      'Pomodoro Technique',
      'Time Management',
      'Work Life Balance',
    ]
  },
  {
    secondary: 'Mindfulness',
    sub: [
      'Guided Meditation',
      'Journaling',
      'Meditation',
      'Transcendental Meditation',
      'Yoga',
    ]
  }
];




const TopicList = () => {
  return (
    <Box sx={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)'}}>
      { data.map((topic) => (
        <TopicItem data={topic} />
      )) }
    </Box>
  );
};

export default TopicList;