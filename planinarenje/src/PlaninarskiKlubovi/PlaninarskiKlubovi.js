import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <Typography
      component="div"
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      <Box p={3}>{children}</Box>
    </Typography>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    'aria-controls': `vertical-tabpanel-${index}`,
  };
}

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
    display: 'flex',
    maxHeight: 300,
    hegith:'100%',
    maxWidth:800,
    width:'100%',
  },
  tabs: {
    borderRight: `1px solid ${theme.palette.divider}`,
  },
  floatRight:{
    float:'right',
    padding:10,
    marginTop:'5%',
    marginLeft:'5%',
  },
}));

export default function PlaninarskiKlubovi() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <Tabs
        orientation="vertical"
        variant="scrollable"
        value={value}
        onChange={handleChange}
        aria-label="Vertical tabs example"
        className={classes.tabs}
      >
        <Tab label="ПСЗ Два Камна" {...a11yProps(0)} />
        <Tab label="Ендорфин" {...a11yProps(1)} />
        <Tab label="Солунска глава" {...a11yProps(2)} />
        <Tab label="Младост-Велес" {...a11yProps(3)} />
        <Tab label="Голак-ПСК Голак" {...a11yProps(4)} />
        <Tab label="Планинарски клуб Тетекс" {...a11yProps(5)} />
        <Tab label="Македонска Алпинистичка Федерација" {...a11yProps(6)} />
      </Tabs>
      <TabPanel value={value} index={0}>
        <img src={require("../SLIKI/logo100.png")} />
        <div className={classes.floatRight}>
          <h3>ИМЕ НА ДРУШТВО</h3>
          <p>ОПИС НА ДРУШТВО</p>
        </div>
      </TabPanel>
      <TabPanel value={value} index={1}>
        Кораб
      </TabPanel>
      <TabPanel value={value} index={2}>
        Македонска Алпинистичка Федерација
      </TabPanel>
      <TabPanel value={value} index={3}>
        Item Four
      </TabPanel>
      <TabPanel value={value} index={4}>
        Item Five
      </TabPanel>
      <TabPanel value={value} index={5}>
        Item Six
      </TabPanel>
      <TabPanel value={value} index={6}>
        Item Seven
      </TabPanel>
    </div>
  );
}
