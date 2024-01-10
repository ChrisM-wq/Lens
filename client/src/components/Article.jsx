import { Box, Typography } from "@mui/material";
import BookmarkAddOutlinedIcon from '@mui/icons-material/BookmarkAddOutlined';
import { Link } from "react-router-dom";
const Article = ({article}) => {
  const { _id, avatar, author, title, published, length, caption, image} = article;

  
  
  const convertTimestamp = (timestamp) => {
    const date = new Date(timestamp);
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    const formattedDate = date.toLocaleDateString('en-US', options);
    return formattedDate;
  }
  

  return (
    <Box sx={{ display: 'flex', gap: 2, justifyContent: 'space-between'}}>
     
      <Box sx={{display: 'flex', flexDirection: 'column', gap: 2, width: '100%'}}>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
          <img src={avatar} width={'20px'}/>
          <Typography variant="body" sx={{ fontSize: '14px'}}>{author}</Typography>
        </Box>
        <Link to={`/article/${_id}`} style={{ textDecoration: 'none', display: 'flex', flexDirection: 'column', gap: 8}}>
        <Typography variant="body" sx={{ fontWeight: '600'}}>{title}</Typography>
        
        <Typography variant="body" sx={{ color: '#6b6b6b'}}>{caption}</Typography>
        </Link>
        <Box sx={{ display: 'flex', justifyContent: 'space-between'}}>
          <Typography component={'span'} variant="body" sx={{ fontSize: '14px', color: '#6b6b6b'}}>{convertTimestamp(published)} <Typography sx={{fontSize: '18px'}} component='span'>·</Typography> {length ? length : '6 min read'}</Typography>
          <BookmarkAddOutlinedIcon sx={{ fontWeight: 400, fontSize: '18px', color: '#6b6b6b' }} />
        </Box>
      </Box>
      <Box sx={{ minWidth: '200px', minHeight: '134px', display: 'flex', justifyContent: 'center'}}>
        <img src={image} style={{ borderRadius: '10px', maxWidth: '200px', maxHeight: '134px'}}/>
      </Box>
    </Box>
  );
};

export default Article;