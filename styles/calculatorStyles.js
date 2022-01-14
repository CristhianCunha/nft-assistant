import styled from "styled-components";
import px2vw from "../utils/px2vw";

export const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: start;
  margin: 0px;
  padding: 0px;
  max-width: 100%;
  font-family: Montserrat;
  background-color: #070d14;
`;

export const BodyContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: start;
  margin: 0px;
  padding: 0px;
  max-width: 100%;
  width: 100vw;
  min-height: 100vh;
  font-family: Montserrat;
  background-color: #070d14;
`;


export const BoxContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  margin: 0;
  padding: 0;
  max-width: 100%;
  background-color: #272f3b;
  
`;

export const BoxContainerColumn = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: space-evenly;
  align-items: space-around;
  padding: 2.5%;
  margin: 2.5%;
  max-width: 100%;
  background-color: #272f3b;
  
`;


export const BackgroundContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  margin: ${0};
  padding-top: 2.5%;
  padding-bottom: 2.5%;
  max-width: 1024px;
  font-family: Montserrat;
  background-color: #272f3b;
  height: 100%;
`;



export const BoxRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: center; 
  text-align: center; 
  width: ${px2vw(320, 320)};
  min-height: ${px2vw(200, 320)};
  flex-direction: column;
  background-color: #272f3b;
  height: 100%;
  max-width: 1024px;

  @media (min-width: 768px) {
    width: ${px2vw(720)};
    min-height: ${px2vw(200, 768)};
    height: 100%;
  }

  @media (min-width: 1024px) {
    width: 100%;
    height: 100%;
    flex-wrap: nowrap;
  }

`;

export const Box = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: ${px2vw(308, 320)};
  min-height: ${px2vw(180, 320)};
  flex-direction: column;
  margin: 2.5%;
  background-color: #212529;
  border-radius: 24px;
  max-width: 420px;
  text-align: center;

  @media (min-width: 768px) {
    width: ${px2vw(320, 768)};
    min-height: ${px2vw(200, 768)};
    height: 100%;
  }

  @media (min-width: 1024px) {
    width: 480px;
    min-height: 268px;
    height: 100%;
  }
`;

export const BoxDetails = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: ${px2vw(308, 320)};
  min-height: ${px2vw(100, 320)};
  flex-direction: column;
  padding: 32px;
  margin: 2.5%;
  
  
  background-color: #212529;
  border-radius: 24px;
  max-width: 420px;
  text-align: center;

  @media (min-width: 768px) {
    width: 100%;
    min-width: 678px;
    min-height: ${px2vw(200, 768)};
    height: 100%;
    padding: ${px2vw(20, 768)};
    
  }

  @media (min-width: 1024px) {
    min-width: 892px;
    min-height: 200px;
    height: 100%;
    padding: ${px2vw(20, 1024)};
  }
`;

export const FormContainer = styled.div`
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  justify-content: center;
  padding: 10px 0px;
`;

export const FormContainerColumn = styled.div`
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  justify-content: center;
`;

export const BoxTitle = styled.h3`
  color: #FFF;
  font-size: 1rem;
  font-weight: 600;
  text-align: center;
  margin: ${px2vw(20)};

  @media (min-width: 768px) {
    font-size: 1.1rem;
    margin: 6px;
  }
`;

export const BoxTitleBig = styled.h3`
  color: #FFF;
  font-size: 1.1rem;
  font-weight: 600;
  text-align: center;
  margin: ${px2vw(20)};

  @media (min-width: 768px) {
    font-size: 1.3rem;
    margin: 6px;
  }
`;

export const BoxText = styled.p`
  margin-top: ${px2vw(20)};
  color: #FFF;
  font-size: 1.2rem;
  margin: ${px2vw(20)};
  @media (min-width: 768px) {
    font-size: 1.5rem;
    margin: 12px;
  }
`;

export const BoxTextSmall = styled.p`

  color: #FFF;
  font-size: 1rem;
  margin: ${px2vw(20)};
  @media (min-width: 768px) {
    font-size: 1rem;
    margin: 6px;
  }
`;

export const InputText = styled.input`
  border-radius: 4px;
  width: 60%;
  border: 1px solid white;
  color: white;
  font-family: Montserrat;
  font-weight: 600;
  padding: 10px;
  margin: 12px;
  margin-bottom: 10px;
  font-size: 1rem;
  background-color: rgba(0, 0, 0, 0);
`;

export const InputCheckBox = styled.input`
  border-radius: 4px;
  width: 60%;
  border: 2px solid white;
  color: white;
  font-family: Montserrat;
  font-weight: 600;
  margin: 12px;
  font-size: 1rem;
  background-color: rgba(0, 0, 0, 0);
`;
export const InputBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: ${px2vw(288, 320)};
  min-height: ${px2vw(100, 320)};
  flex-direction: column;
  margin: 2.5%;
  background-color: #212529;
  border-radius: 24px;
  max-width: 420px;
  text-align: center;
  border: 1px solid white;

  @media (min-width: 768px) {
    width: ${px2vw(300, 768)};
    min-height: ${px2vw(180, 768)};
    height: 100%;
  }

  @media (min-width: 1024px) {
    width: 400px;
    min-height: 100px;
    height: 100%;
    margin: 0.5%;
    padding: 0%;
  }
`;