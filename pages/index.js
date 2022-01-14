import Head from 'next/head'
import Image from 'next/image'
import Header from '../components/header'
import Scroll from '../components/scroll'
import Calculator from './calculator'
import { BodyContainer } from '../styles/calculatorStyles'


export default function Home() {

  return (
    <BodyContainer>
      <Header />
      <Calculator />
    </BodyContainer>
  )
}
