interface CrossProps {
  className?: string;
}

const Cross: React.FC<CrossProps> = ({ className }) => {
  return (
    <svg width="100%" height="100%" viewBox="0 0 24 24" fill="none" className={className}>
      <path
        d="M16 8L8 16M12 12L16 16M8 8L10 10"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
};

export default Cross;
