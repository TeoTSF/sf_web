import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

const TabPanel = ({ children, value, index, ...other }) => {

    return (
      <div
        role="tabpanel"
        className='tabpanel'
        hidden={value !== index}
        id={`vertical-tabpanel-${index}`}
        aria-labelledby={`vertical-tab-${index}`}
        {...other}
      >
        {value === index && (
          <Box sx={{ p: 3 }}>
            <Typography>{children}</Typography>
          </Box>
        )}
      </div>
    );
  }

  export default TabPanel;