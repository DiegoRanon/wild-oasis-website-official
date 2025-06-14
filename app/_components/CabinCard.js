import { UsersIcon } from "@heroicons/react/24/solid";
import Image from "next/image";
import Link from "next/link";

function CabinCard({ cabin }) {
  const { id, name, maxCapacity, regularPrice, discount, image } = cabin;

  return (
    <div className="flex border-[#2C3D4F] border">
      <div className="flex-1 relative">
        <Image
          src={image}
          fill
          alt={`Cabin ${name}`}
          className="object-cover flex-1 border-r border-[#2C3D4F]"
        />
      </div>

      <div className="flex-grow">
        <div className="pt-5 pb-4 px-7 bg-[#141C24]">
          <h3 className="text-accent-500 font-semibold text-2xl mb-3">
            Cabin {name}
          </h3>

          <div className="flex gap-3 items-center mb-2">
            <UsersIcon className="h-5 w-5 text-[#B7C7D7]" />
            <p className="text-lg text-[#B7C7D7]">
              For up to <span className="font-bold">{maxCapacity}</span> guests
            </p>
          </div>

          <p className="flex gap-3 justify-end items-baseline">
            {discount > 0 ? (
              <>
                <span className="text-3xl font-[350]">
                  ${regularPrice - discount}
                </span>
                <span className="line-through font-semibold text-[#4C6B8A]">
                  ${regularPrice}
                </span>
              </>
            ) : (
              <span className="text-3xl font-[350]">${regularPrice}</span>
            )}
            <span className="text-primary-200">/ night</span>
          </p>
        </div>

        <div className="bg-[#141C24] border-t border-t-[#2C3D4F] text-right">
          <Link
            href={`/cabins/${id}`}
            className="border-l border-[#2C3D4F] py-4 px-6 inline-block hover:bg-[#B78343] transition-all hover:text-[#1B2631]"
          >
            Details & reservation &rarr;
          </Link>
        </div>
      </div>
    </div>
  );
}

export default CabinCard;
