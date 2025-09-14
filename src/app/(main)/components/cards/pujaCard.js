import Image from "next/image";
import { MapPin, CalendarDays } from "lucide-react";

export default function PujaCard() {
  return (
    <div className="bg-white border rounded-xl shadow-md overflow-hidden hover:shadow-lg transition">
      {/* Top Image */}
      <div className="relative w-full h-48">
        <Image
          src="/puja-banner.jpg" // replace with your image
          alt="Pitru Tarpan"
          fill
          className="object-cover"
        />
      </div>

      {/* Content */}
      <div className="p-4 space-y-3">
        <p className="text-pink-600 text-sm font-semibold uppercase">
          Purnima Special Manikarnika Ghat Pitru Tarpan
        </p>

        <h2 className="text-lg font-bold text-gray-900">
          Pitru Tarpan at Manikarnika Ghat
        </h2>

        <p className="text-gray-600 text-sm">
          For ancestral karmic relief and resolving family disputes
        </p>

        {/* Location */}
        <div className="flex items-center gap-2 text-gray-700 text-sm">
          <MapPin className="w-4 h-4 text-orange-500" />
          <span>Manikarnika Ghat, Varanasi, Uttar Pradesh</span>
        </div>

        {/* Date */}
        <div className="flex items-center gap-2 text-gray-700 text-sm">
          <CalendarDays className="w-4 h-4 text-orange-500" />
          <span>7 September, Sunday, Bhadrapada Shukla Purnima</span>
        </div>

        {/* Button */}
        <button className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-2 rounded-lg flex items-center justify-center gap-2 transition">
          PARTICIPATE →
        </button>
      </div>
    </div>
  );
}
