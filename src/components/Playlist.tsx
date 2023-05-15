import Image from 'next/image';

interface PlaylistProps {
  image: string;
  alt?: any;
  title: string;
  description: string;
}

const Playlist: React.FC<PlaylistProps> = ({ image, alt, title, description }) => {
  return (
    <a href="" className="bg-white/5 p-3 rounded-md flex flex-col gap-2 hover:bg-white/10" aria-label="Listen now">
      <Image src={image} className="w-full" width={120} height={120} alt={alt} />
      <strong className="font-semibold">{title}</strong>
      <span className="text-xs text-zinc-400">{description}</span>
    </a>
  );
};

Playlist.defaultProps = {
  alt: "",
};

export default Playlist;
