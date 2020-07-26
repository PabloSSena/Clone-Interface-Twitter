import React from 'react';
import ProfilePage from '../ProfilePage';
import {Container,Header,BackIcon,ProfileInfo,BottomMenu,HomeIcon,SearchIcon,EmailIcon,BellIcon } from './styles';

const Main: React.FC = () => {
  return (
      <Container>
          <Header>
              <button>
                  <BackIcon/>
              </button>

              <ProfileInfo>
                  <strong>Pablo Sena</strong>
                  <span>3.678 Tweets</span>
              </ProfileInfo>

          </Header>

          <ProfilePage/> 

          <BottomMenu> 
               <HomeIcon className="active"/>
              <SearchIcon/>
              <BellIcon/>
              <EmailIcon/>
          </BottomMenu>

          
      </Container>
  );
}

export default Main;