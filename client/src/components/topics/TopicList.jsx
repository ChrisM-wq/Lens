import { Box } from "@mui/material";
import TopicItem from "./TopicItem";




const data = [
  {
    topic: "Life",
    sub: [
      {
        topic: "Family",
        sub: [
          { topic: "Adoption" },
          { topic: "Children" },
          { topic: "Elder Care" },
          { topic: "Fatherhood" },
          { topic: "Motherhood" },
          { topic: "Parenting" },
          { topic: "Pregnancy" },
          { topic: "Seniors" },
        ]
    },
    {
      topic: "Health",
      sub: [
        { topic: "Aging" },
        { topic: "Coronavirus" },
        { topic: "Covid-19" },
        { topic: "Death And Dying" },
        { topic: "Disease" }
      ]
    },
      {
        topic: "Relationships",
        sub: [
          { topic: "Dating" },
          { topic: "Divorce" },
          { topic: "Friendship" },
          { topic: "Love" },
          { topic: "Marriage" },
          { topic: "Polyamory" }
        ]
      }
    ]
  },
  {
    topic: "Self Improvement",
    sub: [
      {
        topic: "Mental Health",
        sub: [
          { topic: "Anxiety" },
          { topic: "Counseling" },
          { topic: "Grief" },
          { topic: "Life Lessons" },
          { topic: "Self-awareness" },
          { topic: "Stress" },
          { topic: "Therapy" },
          { topic: "Trauma" }
        ]
      },
      {
        topic: "Productivity",
        sub: [
          { topic: "Career Advice" },
          { topic: "Coaching" },
          { topic: "Goal Setting" },
          { topic: "Morning Routines" },
          { topic: "Pomodoro Technique" },
          { topic: "Time Management" },
          { topic: "Work Life Balance" }
        ]
      },
      {
        topic: "Mindfulness",
        sub: [
          { topic: "Guided Meditation" },
          { topic: "Journaling" },
          { topic: "Meditation" },
          { topic: "Transcendental Meditation" },
          { topic: "Yoga" }
        ]
      }
    ]
  },
  {
    topic: "Work",
    sub: [
      {
        topic: "Business",
        sub: [
          { topic: "Entrepreneurship" },
          { topic: "Freelancing" },
          { topic: "Small Business" },
          { topic: "Startups" },
          { topic: "Venture Capital" }
        ]
      },
      {
        topic: "Marketing",
        sub: [
          { topic: "Advertising" },
          { topic: "Branding" },
          { topic: "Content Marketing" },
          { topic: "Content Strategy" },
          { topic: "Digital Marketing" },
          { topic: "SEO" },
          { topic: "Social Media Marketing" },
          { topic: "Storytelling For Business" }
        ]
      },
      {
        topic: "Leadership",
        sub: [
          { topic: "Employee Engagement" },
          { topic: "Leadership Coaching" },
          { topic: "Leadership Development" },
          { topic: "Management" },
          { topic: "Meetings" },
          { topic: "Org Charts" },
          { topic: "Thought Leadership" }
        ]
      }
    ]
  }
];


const TopicList = () => {
  return (
    <Box sx={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)'}}>
      { data.map((topic, index) => (
        <TopicItem key={index} data={topic} index={index} />
      )) }
    </Box>
  );
};

export default TopicList;