import React from 'react';
import { motion } from 'framer-motion';

export default function About({ variants }) {
  return (
    <motion.section id="about" className="space-y-3" variants={variants}>
      <h2 className="font-semibold tracking-tight uppercase text-white text-md px-1 text-left">About</h2>
      <p className="text-sm sm:text-base text-muted-foreground leading-relaxed text-justify">
        Currently pursuing my B.Tech in Computer Science (AI-ML) at Adani University. My primary stack includes Java, Go, Python, JavaScript, React, FastAPI, Node.js, PostgreSQL, and MongoDB. I’ve also explored machine learning and NLP using NumPy, scikit-learn, Pandas, NLTK, and spaCy.
      </p>
    </motion.section>
  );
}
