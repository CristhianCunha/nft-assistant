import Head from 'next/head'
import Image from 'next/image'
import evoverselogo from '../public/evoverselogo.svg'
import calculator from '../public/calculator.svg'

export default function Header() {
  return (
    <div style={{ display: "flex", width: "100%", maxHeight: "10%", backgroundColor: "#353535", alignItems: "center", justifyContent: "center", padding: "12px" }}>
      <Image
        src={evoverselogo}
        alt="logo"
      />
      <Image
        src={calculator}
        alt="logo"
        width="70%"
        height="70%"
      />
    </div>
  )
}
