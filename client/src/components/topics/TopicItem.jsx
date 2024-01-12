import { Box, Typography } from "@mui/material"

const TopicItem = ({ data }) => {
  console.log(data)
  return (
    <Box sx={{ width: '328px', display: 'flex', flexDirection: 'column'}}>
      <Typography variant="h3" sx={{ pb: 5, fontSize: '24px', fontWeight: '600'}}>{data?.topic}</Typography>
      <Typography variant="body" sx={{ pl: 2, fontWeight: '600', pb: 2 }}>{data.secondary}</Typography>
      <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1, pl: 4}}>
        { data.sub.map((topic, index) => (
          <Typography variant="caption" key={index}>{topic}</Typography>
        )) }
      </Box>
    </Box>
  );
};

export default TopicItem;