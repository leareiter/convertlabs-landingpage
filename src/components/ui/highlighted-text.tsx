"use client";

import { ReactNode } from "react";

interface HighlightedTextProps {
  text: string;
  highlightedWords?: string[];
  highlightClassName?: string;
  className?: string;
  children?: ReactNode;
}

export default function HighlightedText({
  text,
  highlightedWords = [],
  highlightClassName = "font-serif italic text-brand-green",
  className = "",
  children
}: HighlightedTextProps) {
  const renderText = () => {
    if (!highlightedWords || highlightedWords.length === 0) {
      return text;
    }
    
    const words = text.split(' ');
    return words.map((word, index) => {
      const isHighlighted = highlightedWords.some(highlightedWord => 
        word.toLowerCase().replace(/[.,!?;:]/, '') === highlightedWord.toLowerCase()
      );
      
      return (
        <span
          key={index}
          className={isHighlighted ? highlightClassName : ''}
        >
          {word}
          {index < words.length - 1 && ' '}
        </span>
      );
    });
  };

  if (children) {
    return (
      <span className={className}>
        {children}
      </span>
    );
  }

  return (
    <span className={className}>
      {renderText()}
    </span>
  );
}
