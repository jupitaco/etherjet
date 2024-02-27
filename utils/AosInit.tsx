'use client';
import { ReactNode, useEffect } from 'react';
import 'aos/dist/aos.css';
// import 'react-datepicker/dist/react-datepicker.css';
// import 'animate.css';
import '../app/globals.css';

export default function AOSAnimation({ children }: { children: ReactNode }) {
  // AOS animation
  const AOS = require('aos');

  useEffect(() => {
    AOS.init();
  }, [AOS]);

  return <div> {children} </div>;
}
