import React from 'react';
import styled, { css } from 'styled-components';
import { ShowImage } from '../../../modules/lib';

type Props = {
  works: {
    cd: string;
    link: string;
    title: string;
    text: string;
    image: {
      srcName: string;
      ext: 'jpg' | 'png' | 'svg';
      alt: string;
    };
  }[];
  isSp: boolean;
};

export const WorksComp: React.FC<Props> = (p) => {
  const isSp: boolean = p.isSp;

  return (
    <Container
      id='works'
      $isSp={isSp}
    >
      <Title $isSp={isSp}>Works</Title>
      <Wrap $isSp={isSp}>
        {p.works.map((v) => (
          <Box
            key={v.cd}
            $isSp={isSp}
          >
            <a
              href={v.link}
              target='_blank'
              rel='noreferrer'
            >
              <ImageBlock $isSp={isSp}>
                <ShowImage
                  srcName={v.image.srcName}
                  ext={v.image.ext}
                  alt={v.image.alt}
                />
              </ImageBlock>

              <Caption $isSp={isSp}>
                <CaptionTitle $isSp={isSp}>{v.title}</CaptionTitle>
                <CaptionText $isSp={isSp}>
                  <p>{v.text}</p>
                </CaptionText>
              </Caption>
            </a>
          </Box>
        ))}
      </Wrap>
    </Container>
  );
};

const Container = styled.div<{ $isSp: boolean }>`
  width: ${(p) => (p.$isSp ? '90vw' : '66vw')};
  margin-left: auto;
  margin-right: auto;
  padding-bottom: ${(p) => (p.$isSp ? '30vw' : '12vw')};
`;

const Title = styled.h2<{ $isSp: boolean }>`
  font-size: ${(p) => (p.$isSp ? '4.3vw' : '2vw')};
  text-align: center;
  font-family: 'Inter', sans-serif;
  position: relative;
  width: fit-content;
  margin: 0 auto ${(p) => (p.$isSp ? ' 10vw' : '6vw')};

  &::before {
    content: '';
    display: block;
    position: absolute;
    width: 0;
    height: 0;
    border-style: solid;
    border-right: 4vw solid transparent;
    border-left: 4vw solid transparent;
    border-top: 6.5vw solid #afeeee;
    border-bottom: 0;
    z-index: -1;
    bottom: 0;
    left: 0;
    margin: auto;
    right: 0;
    top: ${(p) => (p.$isSp ? '1.5vw' : '1vw')};
    margin-left: ${(p) => (p.$isSp ? '9vw' : '3vw')};
    transform: rotate(10deg);
  }
`;

const Wrap = styled.div<{ $isSp: boolean }>`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: ${(p) => (p.$isSp ? '13vw 0' : '3vw 0')};
`;

const Box = styled.div<{ $isSp: boolean }>`
  width: ${(p) => (p.$isSp ? '100%' : '32vw')};
`;

const ImageBlock = styled.div<{ $isSp: boolean }>`
  border: 0.1rem solid #ddd;
  overflow: hidden;
  border-radius: 0.6rem;
  margin-bottom: ${(p) => (p.$isSp ? '4vw' : '0.8vw')};

  ${(p) => {
    if (p.$isSp) {
      return css`
        img {
          transition: all 0.5s;
          &:hover {
            transform: scale(1.1);
          }
        }
      `;
    }
  }}
`;

const Caption = styled.div<{ $isSp: boolean }>``;

const CaptionTitle = styled.h3<{ $isSp: boolean }>`
  font-size: ${(p) => (p.$isSp ? '3.2vw' : '1.05vw ')};
  margin-bottom: ${(p) => (p.$isSp ? '3.3vw' : '0.8vw')};
  line-height: 1.4;
  font-weight: 500;
  letter-spacing: 0.03vw;
`;

const CaptionText = styled.div<{ $isSp: boolean }>`
  font-size: ${(p) => (p.$isSp ? '2.3vw' : '0.82vw')};
`;
