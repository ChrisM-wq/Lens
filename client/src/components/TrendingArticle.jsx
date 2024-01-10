import { Box, Typography } from "@mui/material";

const TrendingArticle = ({article}) => {
  const {index, avatar, user_id, title, published, length} = article;
  const convertTimestamp = (timestamp) => {
    const date = new Date(timestamp);
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    const formattedDate = date.toLocaleDateString('en-US', options);
    return formattedDate;
  }
  
  return (
    <Box sx={{ display: 'flex', gap: 2}}>
      <Box>
        <Typography sx={{ fontSize: '32px', fontFamily: 'sans-serif', color: '#f2f2f2', lineHeight: '32px'}}>0{index + 1}</Typography>
      </Box>
      <Box sx={{display: 'flex', flexDirection: 'column', gap: 2}}>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
          <img src={user_id.avatar} width={'20px'}/>
          <Typography variant="body" sx={{ fontSize: '14px'}}>{user_id.username}</Typography>
        </Box>
        <Typography variant="body" sx={{ fontWeight: '600'}}>{title}</Typography>
        <Box>
          <Typography component={'span'} variant="body" sx={{ fontSize: '14px', color: '#6b6b6b'}}>{convertTimestamp(published)} · {length ? length : '6 min read'}</Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default TrendingArticle;