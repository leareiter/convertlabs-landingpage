interface HeaderSectionProps {
  subtitle: string;
  title: string;
  highlightedWords?: string[];
}

const HeaderSection = ({ subtitle, title, highlightedWords }: HeaderSectionProps) => {
  const renderTitle = () => {
    if (!highlightedWords || highlightedWords.length === 0) {
      return title;
    }
    
    const words = title.split(' ');
    return words.map((word, index) => {
      const isHighlighted = highlightedWords.some(highlightedWord => 
        word.toLowerCase() === highlightedWord.toLowerCase()
      );
      return (
        <span
          key={index}
          className={isHighlighted ? 'font-serif italic' : ''}
          style={isHighlighted ? { fontFamily: 'Times New Roman, serif', fontStyle: 'italic', fontWeight: 'normal' } : {}}
        >
          {word}
          {index < words.length - 1 && ' '}
        </span>
      );
    });
  };

  return (
    <div className="text-center mb-16">
      <p className="text-sm font-mono font-semibold text-text-muted uppercase tracking-wider mb-4">
        {subtitle}
      </p>
      <h2 className="text-4xl md:text-5xl lg:text-6xl font-be-vietnam-pro font-medium text-text-hero tracking-[-0.05em] leading-tight">
        {renderTitle()}
      </h2>
    </div>
  );
};

export default HeaderSection;