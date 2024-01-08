import { Box, Typography } from "@mui/material";
import BookmarkAddOutlinedIcon from '@mui/icons-material/BookmarkAddOutlined';
const Article = ({article}) => {
  const { avatar, author, title, date, length, caption, image} = article;
  return (
    <Box sx={{ display: 'flex', gap: 2}}>
     
      <Box sx={{display: 'flex', flexDirection: 'column', gap: 2}}>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
          <img src={avatar} width={'20px'}/>
          <Typography variant="body" sx={{ fontSize: '14px'}}>{author}</Typography>
        </Box>
        <Typography variant="body" sx={{ fontWeight: '600'}}>{title}</Typography>
        <Typography variant="body" sx={{ color: '#6b6b6b'}}>{caption}</Typography>
        <Box sx={{ display: 'flex', justifyContent: 'space-between'}}>
          <Typography component={'span'} variant="body" sx={{ fontSize: '14px', color: '#6b6b6b'}}>{date} · {length}</Typography>
          <BookmarkAddOutlinedIcon sx={{ fontWeight: 400, fontSize: '18px', color: '#6b6b6b' }} />
        </Box>
      </Box>
      <Box>
        <img src={image} width={'200px'} height={'134px'} style={{ borderRadius: '10px'}}/>
      </Box>
    </Box>
  );
};

export default Article;