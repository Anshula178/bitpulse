import Link from "next/link";

const Logo: React.FC = () => {
  return (
    <Link href="/" className="inline-block">
      <h1 className="text-white text-4xl font-semibold font-sans m-0">
        Bit<span className="text-primary">Pulse</span>
      </h1>
    </Link>
  );
};

export default Logo;
