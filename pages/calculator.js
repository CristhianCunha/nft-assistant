/* eslint-disable react/no-unescaped-entities */
import Head from 'next/head'
import Image from 'next/image'
import Header from '../components/header'
import { useState, useEffect } from 'react'
import axios from "axios"
import hashpower from '../public/hashpower64.png'
import epw from '../public/epw2x.png'
import usdc from '../public/usdcsvg.svg'
import brlc from '../public/brlc.png'
import px2vw from "../utils/px2vw"
import { EpwUsdPrice, EpwBrlPrice, UsdBrlPrice } from '../components/pricer'
import { InputBox, InputCheckBox, BoxTextSmall, BodyContainer, Container, Box, BoxRow, BoxTitle, BoxContainer, BoxContainerColumn, FormContainer, BoxText, InputText, BackgroundContainer, FormContainerColumn, BoxDetails, BoxTitleBig } from "../styles/calculatorStyles";



export default function Calculator() {
  const [globalHash, setGlobalHash] = useState(111000);
  const [dailyPool, setDailyPool] = useState(222000);
  const [userHash, setUserHash] = useState(55);
  const [userReward, setUserReward] = useState(0);



  const [investmentEpw, setInvestmentEpw] = useState(3000);
  const [investmentUsd, setInvestmentUsd] = useState(0);
  const [investmentBrl, setInvestmentBrl] = useState(0);
  const [useMyHash, setUseMyHash] = useState(true);

  const [epwPriceUsd, setEpwPriceUsd] = useState(0);
  const [epwPriceBrl, setEpwPriceBrl] = useState(0);
  const [usdPriceBrl, setUsdPriceBrl] = useState(0);

  const medPodHash = 5.72;
  const commonPodHash = 4.50;
  const minInvestment = 510;

  useEffect(() => {
    setUserReward((dailyPool / globalHash) * userHash)
  }, [globalHash, dailyPool, userHash, userReward])

  const apiUsd = axios.create({
    baseURL: "https://api.coingecko.com/api/v3/simple/price?ids=Evoverse-Power&vs_currencies=usd",
  });
  const apiBrl = axios.create({
    baseURL: "https://api.coingecko.com/api/v3/simple/price?ids=Evoverse-Power&vs_currencies=brl",
  });
  const apiUsdBrl = axios.create({
    baseURL: "https://api.coingecko.com/api/v3/simple/price?ids=binance-usd&vs_currencies=brl",
  });

  useEffect(() => {
    apiUsd
      .get()
      .then(
        (response) => {
          console.log(response.data)
          //const stringData = JSON.stringify(response.data);
          setEpwPriceUsd(response.data["evoverse-power"]["usd"])
        }
      )
      .catch((err) => {
        console.error("ops! ocorreu um erro ao carregar o valor da moeda" + err);
        setEpwPriceUsd(0.0)
      });
  }, [epwPriceUsd])

  useEffect(() => {
    apiBrl
      .get()
      .then(
        (response) => {
          console.log(response.data)
          //const stringData = JSON.stringify(response.data);
          setEpwPriceBrl(response.data["evoverse-power"]["brl"])
        }
      )
      .catch((err) => {
        console.error("ops! ocorreu um erro ao carregar o valor da moeda" + err);
        setEpwPriceBrl(0.0)
      });
  }, [epwPriceBrl])

  useEffect(() => {
    apiUsdBrl
      .get()
      .then(
        (response) => {
          console.log(response.data)
          //const stringData = JSON.stringify(response.data);
          setUsdPriceBrl(response.data["binance-usd"]["brl"])
        }
      )
      .catch((err) => {
        console.error("ops! ocorreu um erro ao carregar o valor da moeda" + err);
        setUsdPriceBrl(0.0)
      });
  }, [usdPriceBrl])

  useEffect(() => {
    let totalValueUsd = parseFloat(investmentEpw * epwPriceUsd)
    let totalValueBrl = parseFloat(investmentEpw * epwPriceBrl)
    setInvestmentUsd(totalValueUsd)
    setInvestmentBrl(totalValueBrl)
  }, [usdPriceBrl, epwPriceBrl, epwPriceUsd, investmentEpw])

  useEffect(() => {
    if (useMyHash == false) {
      let hash = (investmentEpw / 500) * medPodHash
      setUserHash(parseFloat(hash).toFixed(1));
    }
  }, [investmentEpw, useMyHash])

  const investmentHandler = (event, form) => {
    if (form == 1) {
      let totalValueEpw = parseFloat(event)
      setInvestmentEpw(totalValueEpw)
    }

    if (form == 2) {
      let totalValueEpw = parseFloat(event / epwPriceUsd)
      setInvestmentEpw(totalValueEpw)
    }
    if (form == 3) {
      let totalValueEpw = parseFloat(event / epwPriceBrl)
      setInvestmentEpw(totalValueEpw)
    }
  }






  return (
    <Container>
      <style>
        @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@100;400;600&display=swap');
      </style>
      <Container>
        <BackgroundContainer>
          <BoxDetails>
            <BoxTitleBig>EPW PRICE</BoxTitleBig>
            <BoxTitle>{parseFloat(EpwUsdPrice()).toFixed(3)} USD</BoxTitle>
            <BoxTitle>{parseFloat(EpwBrlPrice()).toFixed(3)} BRL</BoxTitle>
            <BoxTitle>1.00 USD = {parseFloat(UsdBrlPrice()).toFixed(2)} BRL</BoxTitle>
          </BoxDetails>
          <BoxContainer>
            <Box>
              <BoxTitle>Daily Mining Pool</BoxTitle>
              <FormContainer>
                <Image
                  src={epw}
                  alt="Daily Mining Pool"
                  width={64}
                  height={64}
                />
                <InputText value={dailyPool} onInput={e => setDailyPool(e.target.value)} />
              </FormContainer>
            </Box>
            <Box>
              <BoxTitle>Estimated Global Hash Power</BoxTitle>
              <FormContainer>
                <Image
                  src={hashpower}
                  alt="Estimated Global Hash Power"
                  width={64}
                  height={64}
                />
                <InputText value={globalHash} onInput={e => setGlobalHash(e.target.value)}
                />
              </FormContainer>
            </Box>
            <Box>
              <br />
              <BoxTitle>
                Investment
              </BoxTitle>
              <FormContainer>
                <BoxTextSmall>EPW</BoxTextSmall>
                <InputText type="number" value={parseFloat(investmentEpw).toFixed(0)} onInput={e => investmentHandler(e.target.value, 1)}
                />
              </FormContainer>
              <FormContainer>
                <BoxTextSmall>USD</BoxTextSmall>
                <InputText type="number" value={parseFloat(investmentUsd).toFixed(0)} onInput={e => investmentHandler(e.target.value, 2)}
                />
              </FormContainer>
              <FormContainer>
                <BoxTextSmall>BRL</BoxTextSmall>
                <InputText type="number" value={parseFloat(investmentBrl).toFixed(0)} onInput={e => investmentHandler(e.target.value, 3)}
                />
              </FormContainer>
              <br />
            </Box>
            <Box>
              <br />
              <BoxTitle>My Hash Power</BoxTitle>
              <FormContainer>
                <Image
                  src={hashpower}
                  alt="My Hash Power"
                  width={64}
                  height={64}
                />
                <InputText value={userHash} type="number" onInput={e => {
                  if (useMyHash == true) {
                    setUserHash(e.target.value)
                  }
                }}
                />
              </FormContainer>
              <InputBox>
                <InputCheckBox type="checkbox" checked={!useMyHash} onClick={e => setUseMyHash(!useMyHash)} />
                <BoxTextSmall >
                  use an estimative of the average hashpower per invested EPW
                </BoxTextSmall>
              </InputBox>
              <br />
            </Box>

            <Box>
              <BoxTitle>Estimated Reward</BoxTitle>
              <br />
              <FormContainer>
                <Image
                  src={epw}
                  alt="EPW"
                  width={64}
                  height={64}
                />
                <BoxText>{parseFloat(userReward).toFixed(1)} EPW/DAY</BoxText>
              </FormContainer>
            </Box>

            <Box>
              <BoxTitle>Estimated Payback</BoxTitle>
              <br />
              <FormContainer>
                <BoxText>{parseFloat((investmentUsd / (userReward * EpwUsdPrice()))).toFixed(0)} DAYS</BoxText>

              </FormContainer>
              <BoxTextSmall>
                based on invested USD and Hash Power
              </BoxTextSmall>
            </Box>

          </BoxContainer>
          <BoxDetails>
            <BoxTitle>Reward Details</BoxTitle>
            <br />
            <FormContainerColumn>
              <Image
                src={epw}
                alt="EPW"
                width={64}
                height={64}
              />
              <div>
                <BoxTitle>{parseFloat(userReward).toFixed(1)} EPW/DAY</BoxTitle>
                <BoxTitle>{parseFloat(userReward * 15).toFixed(1)} EPW/WITHDRAW</BoxTitle>
                <BoxTitle>{parseFloat(userReward * 30).toFixed(1)} EPW/MONTH</BoxTitle>
              </div>
            </FormContainerColumn>
            <br />
            <br />
            <FormContainerColumn>
              <Image
                src={usdc}
                alt="USD"
                width={64}
                height={64}
              />
              <div>
                <BoxTitle>{parseFloat(userReward * EpwUsdPrice()).toFixed(1)} USD/DAY</BoxTitle>
                <BoxTitle>{parseFloat(userReward * EpwUsdPrice() * 15).toFixed(1)} USD/WITHDRAW</BoxTitle>
                <BoxTitle>{parseFloat(userReward * EpwUsdPrice() * 30).toFixed(1)} USD/MONTH</BoxTitle>
              </div>
            </FormContainerColumn>
            <br />
            <br />
            <FormContainerColumn>
              <Image
                src={brlc}
                alt="BRL"
                width={64}
                height={64}
              />
              <div>
                <BoxTitle>{parseFloat(userReward * EpwBrlPrice()).toFixed(1)} BRL/DAY</BoxTitle>
                <BoxTitle>{parseFloat(userReward * EpwBrlPrice() * 15).toFixed(1)} BRL/WITHDRAW</BoxTitle>
                <BoxTitle>{parseFloat(userReward * EpwBrlPrice() * 30).toFixed(1)} BRL/MONTH</BoxTitle>
              </div>
            </FormContainerColumn>
          </BoxDetails>
        </BackgroundContainer>
      </Container>
    </Container>
  )
}