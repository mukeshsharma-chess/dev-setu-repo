import Image from "next/image";
import HeroBanner from "./components/HeroBanner";
import LazyImage from "./components/atom/LazyImage";

const slidesData = [
  {
    title: "51,000 Pitru Gayatri Mantra Jaap",
    highlight: "Til Tarpanam",
    desc: "Bring peace to ancestors and resolve family disputes with the power of sacred chants.",
    image: "/images/Sri Krishna.jpg", // replace with actual image in public/images
  },
  {
    title: "Kashi-Rameshwaram Ghat",
    highlight: "Pitru Shanti Puja",
    desc: "Seek relief from ancestral curses and bless your family with harmony and prosperity.",
    image: "/images/6 member.webp",
  },
  {
    title: "Panch Tirth Pitru Dosha Nivaran",
    highlight: "Special Puja",
    desc: "Performed at the sacred Panch Tirth for removing obstacles and bringing peace to departed souls.",
    image: "/images/4 member.webp",
  },
];

export default function Home() {
  return (
    <div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen pb-20 gap-16">
      <HeroBanner slides={slidesData} />
      
      Welcome on Dev Setu
    </div>
  );
}
