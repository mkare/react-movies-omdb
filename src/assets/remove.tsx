interface RemoveProps {
  className?: string;
}

const Remove: React.FC<RemoveProps> = ({ className }) => {
  return (
    <svg width="100%" height="100%" viewBox="0 0 24 24" fill="none" className={className}>
      <path
        xmlns="http://www.w3.org/2000/svg"
        d="M14.5 9.50002L9.5 14.5M9.49998 9.5L14.5 14.5"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <path
        d="M7 3.33782C8.47087 2.48697 10.1786 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 10.1786 2.48697 8.47087 3.33782 7"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
};

export default Remove;
