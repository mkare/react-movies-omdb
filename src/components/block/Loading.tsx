import { Logo } from "@components/base";

const Loading: React.FC = () => {
  return (
    <div className="h-full w-full bg-secondary-700/25 fixed top-0 left-0 z-50 flex flex-col align-middle justify-center">
      <div className="flex flex-col items-center my-24">
        <Logo loading={true} animated={true} />
        <p className="mt-12 italic text-secondary-200">Loading...</p>
      </div>
    </div>
  );
};

export default Loading;
