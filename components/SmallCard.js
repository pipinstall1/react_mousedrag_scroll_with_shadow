import Image from 'next/image';
import { useState } from 'react';

function SmallCard({ distance, img, location }) {
  const [active, setActive] = useState(false);

  const styles = {
    default:
      'flex items-center w-60 m-2 space-x-4 rounded-xl cursor-pointer hover:bg-gray-100 hover:scale-105 lg:hover:scale-[1.01] transition duration-200',
    active:
      'flex items-center w-60 m-2 space-x-4 rounded-xl cursor-pointer bg-red-200 hover:bg-red-100 hover:scale-105 lg:hover:scale-[1.01] transition duration-200',
  };

  return (
    <div
      className={active ? styles.active : styles.default}
      onClick={() => setActive(!active)}
      role="button"
      aria-hidden="true"
    >
      <div className="relative h-16 w-16">
        {/* <Image src={img} layout="fill" className="rounded-lg" /> */}
        <div className="h-full w-full rounded-xl bg-gray-50" />
      </div>

      <div>
        <h2>{location}</h2>
        <h3 className="text-gray-500">{distance}</h3>
      </div>
    </div>
  );
}

export { SmallCard };
