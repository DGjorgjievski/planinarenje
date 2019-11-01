import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import NastaniCards from '../NastaniCards/NastaniCards'

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
    maxHeight: 600,
    hegith:'100%',
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
        <Tab label="ПЕД Ендорфин" {...a11yProps(1)} />
        <Tab label="ПЕК Јелак" {...a11yProps(2)} />
        <Tab label="ПК ЕДЕЛВАЈС" {...a11yProps(3)} />
        <Tab label="ПК Двете Уши" {...a11yProps(4)} />
        <Tab label="Планинарски клуб Тетекс" {...a11yProps(5)} />
        <Tab label="Македонска Алпинистичка Федерација" {...a11yProps(6)} />
        <Tab label="ПСЗ Два Камна" {...a11yProps(0)} />
        <Tab label="Ендорфин" {...a11yProps(1)} />
        <Tab label="Солунска глава" {...a11yProps(2)} />
        <Tab label="Младост-Велес" {...a11yProps(3)} />
        <Tab label="Голак-ПСК Голак" {...a11yProps(4)} />
        <Tab label="Планинарски клуб Тетекс" {...a11yProps(5)} />
        <Tab label="Македонска Алпинистичка Федерација" {...a11yProps(6)} />
      </Tabs>
      <TabPanel value={value} index={0}>
        <div className="row mt-5">
          <div className="col-3">
          <img src={require("../SLIKI/dvaKamna.jpg")} style={{width:'100%'}}/>
          </div>
          <div className="col-9">
            <div className="container">
            <h3>ПСЗ Два Камна</h3>
            <p>Ние сме тројца студенти кои имаа замисла и цел да направат страна за сите љубители на планинарењето,да бидат информирани за сите настани,друштва и новости на забавен начин. Ние сме тројца студенти кои имаа замисла и цел да направат страна за сите љубители на планинарењето,да бидат информирани за сите настани,друштва и новости на забавен начин.</p>    
            </div>            
          </div>
        </div>
        <hr></hr>
        <div className="row mt-3">
            <NastaniCards />
        </div>
      </TabPanel>
      <TabPanel value={value} index={1}>
      <div className="row mt-5">
          <div className="col-3">
          <img src={require("../SLIKI/endorfin.jpg")} style={{width:'100%'}}/>
          </div>
          <div className="col-9">
            <div className="container">
            <h3>ПЕД ЕНДОРФИН</h3>
            <p>ЕНДОРФИН е друштво на љубители на авантурите во природа, планинари и екологисти, формирано во јуни 2015 г. во Кичево. ЕНДОРФИН е друштво на љубители на авантурите во природа, планинари и екологисти, формирано во јуни 2015 г. во Кичево. ЕНДОРФИН е друштво на љубители на авантурите во природа, планинари и екологисти, формирано во јуни 2015 г. во Кичево.</p>    
            </div>            
          </div>
        </div>
        <hr></hr>
        <div className="row mt-3">
            <NastaniCards />
        </div>
      </TabPanel>
      <TabPanel value={value} index={2}>
      <div className="row mt-5">
          <div className="col-3">
          <img src={require("../SLIKI/jelak.png")} style={{width:'100%'}}/>
          </div>
          <div className="col-9">
            <div className="container">
            <h3>ПК Јелак</h3>
            <p>Планинарскиот клуб „Јелак“ е доброволно, вонпартиско здружение на граѓани кои реализираат различни активности за промоција на здравиот начин на живот, подигање на јавната свест за заштита на природата и бенефитите од планинарењето.</p>    
            </div>            
          </div>
        </div>
        <hr></hr>
        <div className="row mt-3">
            <NastaniCards />
        </div>
      </TabPanel>
      <TabPanel value={value} index={3}>
      <div className="row mt-5">
          <div className="col-3">
          <img src={require("../SLIKI/edel.jpg")} style={{width:'100%'}}/>
          </div>
          <div className="col-9">
            <div className="container">
            <h3>ПК ЕДЕЛВАЈС</h3>
            <p>Аматерски планинарскиот клуб "Еделвајс" - Скопје, е здружение на граѓани кои имаат цел за омасовување на планинарскиот спорт, запознавање Македонските планини и исто така организирање на планинарски акции во и надвор од границите на Република Македонија. Планинарското Еколошко Друштво ЕДЕЛВАЈС-Струмица е формирано 1995 година и е член на Федерацијата на планинарски спортови на Македонија. Друштвото брои околу 150 членови од кои активни се 40.</p>    
            </div>            
          </div>
        </div>
        <hr></hr>
        <div className="row mt-3">
            <NastaniCards />
        </div>
      </TabPanel>
      <TabPanel value={value} index={4}>
      <div className="row mt-5">
          <div className="col-3">
          <img src={require("../SLIKI/dveteUsi.jpg")} style={{width:'100%'}}/>
          </div>
          <div className="col-9">
            <div className="container">
            <h3>ПК Двете Уши</h3>
            <p>Првата акција на новоформираниот гевгелиско планинарски спортски клуб „Двете уши“ од Гевгелија на истоимениот врв на Кожуф планина денес ја реализираа осуммина членови на клубот и двајца гостински планинари, соработници. Со искачување на врвот Двете уши, лоциран на 1.766 метри надморска височина, учесницита на ваков акцијашки начин го „крунисаа“ формирањето на планинарскиот спортски клуб по патеките на својот планински врв имењак.</p>    
            </div>            
          </div>
        </div>
        <hr></hr>
        <div className="row mt-3">
            <NastaniCards />
        </div>
      </TabPanel>
      <TabPanel value={value} index={5}>
      <div className="row mt-5">
          <div className="col-3">
          <img src={require("../SLIKI/jelak.png")} style={{width:'100%'}}/>
          </div>
          <div className="col-9">
            <div className="container">
            <h3>ПК Јелак</h3>
            <p>Планинарскиот клуб „Јелак“ е доброволно, вонпартиско здружение на граѓани кои реализираат различни активности за промоција на здравиот начин на живот, подигање на јавната свест за заштита на природата и бенефитите од планинарењето.</p>    
            </div>            
          </div>
        </div>
        <hr></hr>
        <div className="row mt-3">
            <NastaniCards />
        </div>
      </TabPanel>
      <TabPanel value={value} index={6}>
      <div className="row mt-5">
          <div className="col-3">
          <img src={require("../SLIKI/jelak.png")} style={{width:'100%'}}/>
          </div>
          <div className="col-9">
            <div className="container">
            <h3>ПК Јелак</h3>
            <p>Планинарскиот клуб „Јелак“ е доброволно, вонпартиско здружение на граѓани кои реализираат различни активности за промоција на здравиот начин на живот, подигање на јавната свест за заштита на природата и бенефитите од планинарењето.</p>    
            </div>            
          </div>
        </div>
        <hr></hr>
        <div className="row mt-3">
            <NastaniCards />
        </div>
      </TabPanel>
    </div>
  );
}
