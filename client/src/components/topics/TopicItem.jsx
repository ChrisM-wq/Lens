import { Box, Typography } from "@mui/material"

const TopicItem = ({ data, index }) => {
  return (
    <Box sx={{ width: '328px', display: 'flex', flexDirection: 'column'}}>
      <Typography variant="h3" sx={{ fontSize: '24px', fontWeight: '600'}}>{data.topic}</Typography>
      
      { data.sub.map((topic) => (
        <>
        <Box sx={{ display: 'flex', flexDirection: 'column', pt: 4}}>
         <Typography key={`${topic.topic}`} variant="body" sx={{ pl: 3, fontWeight: '600', pb: 2 }}>{topic.topic}</Typography> 
         <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1, pl: 6}}>
           { topic.sub.map((topic) => (
             <Typography variant="caption" key={`${topic.topic}`}>{topic.topic}</Typography>
           )) }
         </Box>
         </Box>
         </>
      ))}
      
    </Box>
  );
};

export default TopicItem;