import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import DashboardIcon from '@material-ui/icons/Dashboard';
import EventIcon from '@material-ui/icons/Event';
import LibraryAddIcon from '@material-ui/icons/LibraryAdd';
import UserInfo from './UserInfo';
import Divider from '@material-ui/core/Divider';

export const mainListItems = (
  <div>
    <UserInfo />
    <Divider />
    <ListItem button>
      <ListItemIcon>
        <DashboardIcon />
      </ListItemIcon>
      <ListItemText primary="Табла" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <EventIcon />
      </ListItemIcon>
      <ListItemText primary="Мои Настани" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <LibraryAddIcon />
      </ListItemIcon>
      <ListItemText primary="Креирај Настан" />
    </ListItem>
  </div>
);
