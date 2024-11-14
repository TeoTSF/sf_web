import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { useState } from 'react';
import { useMediaQuery } from '@mui/material';
import TabPanel from './TabPanel';
import Users from '../tabs/admin/tabpanel/Users';
import Posts from '../tabs/admin/tabpanel/Post';

export default function VerticalTabs() {
  const [value, setValue] = useState(0);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const isMobile = useMediaQuery('(max-width:600px)'); // Detecta si está en un dispositivo móvil

  const handleChange = (event, newValue) => {    
    setValue(newValue);
    setDrawerOpen(false); // Cierra el Drawer cuando se selecciona un tab
  };

  const toggleDrawer = () => {
    setDrawerOpen(!drawerOpen);
  };

  function a11yProps(index) {
    return {
      id: `vertical-tab-${index}`,
      'aria-controls': `vertical-tabpanel-${index}`,
    };
  }

  return (
    <Box sx={{ position: 'relative', flexGrow: 1, bgcolor: 'background.paper', display: 'flex', height: 224 }}>
      {isMobile ? (
        <>
          <IconButton
            onClick={toggleDrawer}
            sx={{ position: 'absolute', top: -35, left: 5, zIndex: 1300 }}
          >
            <MenuIcon />
          </IconButton>
          <Drawer
            anchor="bottom"
            open={drawerOpen}
            onClose={toggleDrawer}
            sx={{ zIndex: 1300 }}
          >
            <Tabs
              orientation="vertical"
              value={value}
              onChange={handleChange}
              aria-label="Vertical tabs"
              sx={{ borderRight: 1, borderColor: 'divider' }}
            >
              <Tab label="Usuarios" {...a11yProps(0)} />
              <Tab label="Cursos" {...a11yProps(1)} />
              <Tab label="Blog" {...a11yProps(2)} />
            </Tabs>
          </Drawer>
        </>
      ) : (
        <Tabs
          orientation="vertical"
          variant="scrollable"
          value={value}
          onChange={handleChange}
          aria-label="Vertical tabs"
          sx={{ borderRight: 1, borderColor: 'divider' }}
        >
          <Tab label="Usuarios" {...a11yProps(0)} />
          <Tab label="Cursos" {...a11yProps(1)} />
          <Tab label="Blog" {...a11yProps(2)} />
        </Tabs>
      )}
      {value == 0 && (
        <Users value={value} index={0} />
      )}
      <TabPanel value={value} index={1}>
        Cursos
      </TabPanel>
      {
        value == 2 && (
          <Posts value={value} index={2} />
      )}
    </Box>
  );
}

