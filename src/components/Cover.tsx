import { Play } from "lucide-react"
import Image from 'next/image';

interface CoverProps {
  image: string;
  alt?: any;
  title: string;
}

const Cover: React.FC<CoverProps> = ({ image, alt, title }) => {
  return (
    <a href="" className="bg-white/5 group rounded flex items-center gap-4 overflow-hidden hover:bg-white/10 transition-colors">
        <Image src={image} width={104} height={104} className="lg:w-24 lg:h-24 sm:w-16 sm:h-16" alt={alt} />
        <strong>{title}</strong>
        <button className="lg:w-10 lg:h-10 md:w-8 md:h-8 sm:w-6 sm:h-6 flex items-center justify-center pl-1 rounded-full bg-green-400 text-black ml-auto mr-5 invisible group-hover:visible" title="Play Button">
            <Play />
        </button>
    </a>
  );
};

Cover.defaultProps = {
  alt: "",
};

export default Cover;
