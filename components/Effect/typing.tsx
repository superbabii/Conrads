"use client";

import { motion } from "framer-motion";
import { textContainer, textVariant2 } from "../../utils/motion";
import Typed from 'typed.js';
import React, { useRef, useEffect, ReactNode } from 'react';

type textProps = {
    title: string | ReactNode;
    textStyles?: string;
  };
  
  export const TypingText = ({ title }: textProps) => (
    <div>
      <motion.p
        variants={textContainer}
      >
        {typeof title === "string" &&
          Array.from(title).map((letter, index) => (
            <motion.span variants={textVariant2} key={index}>
              {letter === " " ? "\u00A0" : letter}
            </motion.span>
          ))}
      </motion.p>
    </div>
  );
  
  export const TitleText = ({ title }: textProps) => (
    <div>
      <motion.h2
        variants={textVariant2}
        initial="hidden"
        whileInView="show"
      >
        {title}
      </motion.h2>
    </div>
  );

  export const Typing = () => {
    const typedRef = useRef(null);
    
    useEffect(() => {
      const options = {
        strings: ['Choose', 'Need'],
        typeSpeed: 65,
        backSpeed: 65,
        loop: true,
        showCursor: true,
        cursorChar: '|',
      };
      
      if (typedRef.current) {
        const typed = new Typed(typedRef.current, options);
        
        return () => {
          typed.destroy();
        };
      }
    }, []);
  
    return <span ref={typedRef} style={{ whiteSpace: 'pre' }} />;
  };