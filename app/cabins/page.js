import React, { Suspense } from "react";
import CabinList from "../_components/CabinList";
import Spinner from "../_components/Spinner";
import { getCabins } from "../_lib/data-service";
import Filter from "../_components/Filter";

export const revalidate = 3600;

export const metadata = {
  title: "Cabins",
};

export default function Page({ searchParams }) {
  const params = searchParams;
  const filter = params?.capacity ?? "all";

  return (
    <div>
      <h1 className="text-4xl mb-5 text-[#D2AF84] font-medium">
        Our Luxury Cabins
      </h1>
      <p className="text-[#B7C7D7] text-lg mb-10">
        Cozy yet luxurious cabins, located right in the heart of the Italian
        Dolomites. Imagine waking up to beautiful mountain views, spending your
        days exploring the dark forests around, or just relaxing in your private
        hot tub under the stars. Enjoy nature's beauty in your own little home
        away from home. The perfect spot for a peaceful, calm vacation. Welcome
        to paradise.
      </p>
      <div className="flex justify-end mb-8">
        <Filter />
      </div>
      <Suspense fallback={<Spinner />} key={filter}>
        <CabinList filter={filter} />
      </Suspense>
    </div>
  );
}
