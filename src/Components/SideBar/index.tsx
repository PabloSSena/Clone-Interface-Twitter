import React from 'react';
import { Container,SearchWrapper,SearchInput,SearchIcon,Body } from './styles';
import List from '../List';
const SideBar: React.FC = () => {
  return (
      <Container>
          <SearchWrapper>
              <SearchInput placeholder = "Buscar no Twitter" />
              {/* <SearchIcon/> */}
          </SearchWrapper>

          <Body>
            <List
              title="Talvex você curta"
              elements={[
                <h1>Test</h1>,
                <h1>Test</h1>,
                <h1>Test</h1>

              ]}
            />

          </Body>
      </Container>
  );
}

export default SideBar;