import React, { useEffect } from 'react';
import '../App.css';
import '../styles/People.css';
import { useDispatch, useSelector } from 'react-redux';
import { loadPeople } from '../ducks/people/people'
import { RootState } from '../app/store';
import { Box, Grid, Typography, Divider } from '@mui/material';
//import DialogComponent from '../components/Dialog';

type peopleType = {
  name: string,
  preferredLocation: string,
  phoneNumber: string,
  preferredRooms: string,
  preferredBathrooms: string,
  preferredSize: string
}




function People() {
  const dispatch = useDispatch();
  const peopleObject: {peopleList: [peopleType]} = useSelector((state: RootState) => state.people);
  console.log("This is the peopleList: ", peopleObject);
  const peopleList = peopleObject.peopleList
  useEffect(() => {
    dispatch(loadPeople());
  }, [dispatch]);
  return (
    <Box mt={8} mb={6} className="People App CardHandler">
      {
        peopleList.map((person, index) => {
          return (
            <Box className="Card" key={index} onClick={() => {console.log("Lol")}}>
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
