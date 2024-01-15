import { Box, Divider, InputBase, Typography } from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';
import SuggestEdit from "../components/topics/SuggestEdit";
import HelperLinks from "../components/topics/HelperLinks";
import SearchTopics from "../components/topics/SearchTopics";
import TopicList from "../components/topics/TopicList";
const ExploreTopics = () => {
  return (
    <Box sx={{ pt: 20, display: 'flex', flexDirection: 'column', alignItems: 'center', width: '100%', gap: 10}}>
      {/* <TopicButtons /> */}
      
      
      <SearchTopics />
      {/* Topics */}
      <Box sx={{ width: '1080px', display: 'flex', flexDirection: 'column', gap: 10}}>
        <Divider />
        <TopicList />
        <SuggestEdit />
      </Box>
  
      <Box sx={{ width: '100%'}}>
        <Divider />
        <HelperLinks />
      </Box>
      
    </Box>
  );
};

export default ExploreTopics;