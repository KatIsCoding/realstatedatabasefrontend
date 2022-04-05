import React, { useEffect } from 'react';
import '../App.css';
import '../styles/People.css';
import { useDispatch, useSelector } from 'react-redux';
import { loadPeople, setCurrentPerson } from '../ducks/people/people'
import { RootState } from '../app/store';
import { Box, Typography, Divider, Popper, Fade, Paper, MenuItem } from '@mui/material';
import { peopleType } from '../types';
import { useState } from 'react';
import { useRef } from 'react';
import { PeopleMenu } from '../components/menus';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
//import DialogComponent from '../components/Dialog';






function People() {
  const dispatch = useDispatch();
  const peopleObject: {peopleList: [peopleType]} = useSelector((state: RootState) => state.people);
  const [peopleMenu, setPeopleMenu] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);
  const [placement, setPlacement] = useState();
  const openPeopleMenu = Boolean(peopleMenu);
  const arrowRef = useRef(null);
  
  console.log("This is the peopleList: ", peopleObject);
  const peopleList = peopleObject.peopleList

  useEffect(() => {
    dispatch(loadPeople());
  }, [dispatch]);


  const handlePersonClick = (data: {person: peopleType, event: any}) => {
    if (peopleMenu) {
      setPeopleMenu(false);
    } else {
      dispatch(setCurrentPerson(data.person));
      setAnchorEl(data.event.currentTarget);
      setPeopleMenu(true);
    }
    
    
    
  }

  return (
      <Box mt={8} mb={6} className="People App CardHandler">
        <PeopleMenu openHandler={openPeopleMenu} />

        {
          peopleList.map((person, index) => {
            return (
              
              <Box className="Card" key={index} onClick={(event) => {handlePersonClick({person, event})}}>
                <Box className='TopLevelCard'>
                  <Typography gutterBottom variant='h5' component={'h5'}>
                    {person.name}
                  </Typography>
                  <Typography gutterBottom variant='subtitle2'>
                    Busca en: {person.preferredLocation}
                    <br />
                    Tel: {person.phoneNumber}
                  </Typography>
                </Box>
                <Divider />
                <Box className="CardContent">
                  <Typography gutterBottom variant='subtitle2' component={'h5'}>
                    Cuartos Preferidos: {person.preferredRooms}
                    <br />
                    Banos Preferidos: {person.preferredBathrooms}
                    <br />
                    Tamano Preferido: {person.preferredSize}                  
                  </Typography>
                </Box>
              </Box>
              

            )
          })
        }
      </Box>
  );
}

export default People;
