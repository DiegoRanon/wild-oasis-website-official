import Image from "next/image";
import Link from "next/link";
import Navigation from "./_components/Navigation";
import bg from "@/public/bg.png";

export default function Home() {
  return (
    <main className="mt-24">
      <Image
        src={bg}
        fill
        quality={80}
        placeholder="blur"
        className="object-cover object-top"
        alt="Mountains and forests with two cabins"
      />

      <div className="relative z-10 text-center">
        <h1 className="text-8xl text-[#E1E8EF] mb-10 tracking-tight font-normal">
          Welcome to paradise.
        </h1>
        <a
          href="/cabins"
          className="bg-[#C69963] px-8 py-6 text-[#2C3D4F] text-lg font-semibold hover:bg-[#B78343] transition-all"
        >
          Explore luxury cabins
        </a>
      </div>
    </main>
  );
}
