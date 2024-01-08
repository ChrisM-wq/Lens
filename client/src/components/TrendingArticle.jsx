import { Box, Typography } from "@mui/material";

const TrendingArticle = ({article}) => {
  const {index, avatar, author, title, date, length} = article;
  return (
    <Box sx={{ display: 'flex', gap: 2}}>
      <Box>
        <Typography sx={{ fontSize: '32px', fontFamily: 'sans-serif', color: '#f2f2f2', lineHeight: '32px'}}>0{index + 1}</Typography>
      </Box>
      <Box sx={{display: 'flex', flexDirection: 'column', gap: 2}}>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
          <img src={avatar} width={'20px'}/>
          <Typography variant="body" sx={{ fontSize: '14px'}}>{author}</Typography>
        </Box>
        <Typography variant="body" sx={{ fontWeight: '600'}}>{title}</Typography>
        <Box>
          <Typography component={'span'} variant="body" sx={{ fontSize: '14px', color: '#6b6b6b'}}>{date} · {length}</Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default TrendingArticle;