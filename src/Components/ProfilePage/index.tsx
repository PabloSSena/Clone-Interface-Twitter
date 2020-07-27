import React from 'react';

import { Container,Banner,Avatar,ProfileData,LocationIcon,CakeIcon,Followage,EditButton } from './styles';

const ProfilePage: React.FC = () => {
  return (
      <Container>
          <Banner>
              <Avatar/>
          </Banner>

          <ProfileData>
                <EditButton outlined>Editar perfil</EditButton>  

              <h1>Pabro</h1>
              <h2>@pabloSSena</h2>

              <p>
                 Ciencia da computação - UTFPR
              </p>

              <ul>
                  <li>
                      <LocationIcon/>
                      Campo Mourão,Brasil
                  </li>

                  <li>
                      <CakeIcon/>
                      Nascido em 21 de Julho de 1999
                  </li>
              </ul>

              <Followage>
                  <span>
                      seguindo <strong>232</strong>
                  </span>

                  <span>
                      <strong>128 </strong> seguidores

                  </span>
              </Followage>
        
          </ProfileData>

          <Feed/>
      </Container>
  );
}

export default ProfilePage;