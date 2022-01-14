import React, { useState, useEffect } from 'react'
import axios from "axios"

export const EpwUsdPrice = () => {
  const [epwPriceUsd, setEpwPriceUsd] = useState(0);

  const apiUsd = axios.create({
    baseURL: "https://api.coingecko.com/api/v3/simple/price?ids=Evoverse-Power&vs_currencies=usd",
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
  }, [epwPriceUsd]);

  return (
    epwPriceUsd
  )
}

export const EpwBrlPrice = () => {
  const [epwPriceBrl, setEpwPriceBrl] = useState(0);

  const apiBrl = axios.create({
    baseURL: "https://api.coingecko.com/api/v3/simple/price?ids=Evoverse-Power&vs_currencies=brl",
  });

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
  }, [epwPriceBrl]);

  return (
    epwPriceBrl
  )
}

export const UsdBrlPrice = () => {
  const [usdPriceBrl, setUsdPriceBrl] = useState(0);

  const apiUsdBrl = axios.create({
    baseURL: "https://api.coingecko.com/api/v3/simple/price?ids=binance-usd&vs_currencies=brl",
  });

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
  }, [usdPriceBrl]);

  return (
    usdPriceBrl
  )
}