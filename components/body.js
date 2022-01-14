import Head from 'next/head'
import Image from 'next/image'
import { useState, useEffect } from 'react';

export default function Calculator() {
  const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions());
  const getWindowDimensions = () => {
    const { innerWidth: width, innerHeight: height } = window;
    return {
      width,
      height
    };
  }
  return (
    <div style={{ display: "flex", flex: 1, width: "100%", margin: 0, padding: 0, boxSizing: "borderBox" }}>
    </div>
  )
}
