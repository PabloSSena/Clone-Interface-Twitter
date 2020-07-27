import React from 'react';

import { Container,Retweeted,RocketseatIcon,Body,Avatar,Content,Header,Dot,Description,ImageContent,Icons,Status,CommentIcon,RetweetIcon,LikeIcon } from './styles';

const Tweet: React.FC = () => {
  return (
    <Container>
        <Retweeted>
            <RocketseatIcon/>
            Você retwetou
        </Retweeted>

        <Body>
            <Avatar/>
            <Content>
                <Header>
                    <strong>Pabro</strong>
                    <span>@PabloSSena</span>
                    <Dot/>
                    <time>21 de jul</time>
                </Header>

                <Description>
                    Alo twitter me contrata
                </Description>

                <ImageContent/>

                <Icons>
                    <Status>
                        <CommentIcon/>
                          10
                    </Status>

                    <Status>
                        <RetweetIcon/>
                          2
                    </Status>

                    <Status>
                        <LikeIcon/>
                          800
                    </Status>
                </Icons>
            </Content>
        </Body>
    </Container>
  );
}

export default Tweet;