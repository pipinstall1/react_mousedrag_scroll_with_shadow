import { MediumCard } from '../components/MediumCard';
import { SmallCard } from '../components/SmallCard';
import ScrollShadow from '../components/ScrollShadow';

import { GetStaticProps } from 'next';
import Head from 'next/head';

export default function Home({ exploreData, cardsData }) {
  return (
    <div className="text-gray-900 my-40">
      <Head>
        <title>react-use-draggable-scroll</title>
        <link rel="stylesheet" href="/favicon.ico" />
      </Head>

      <main className="container mx-auto px-8">
        <section>
          <h2 className="my-5 text-4xl font-semibold">Vertical</h2>
          <ScrollShadow direction="vertical">
            <div className="space-y-4 h-96">
              {Array.from({ length: 25 }, (_, index) => (
                <button
                  key={index}
                  className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded block"
                >
                  Button {index + 1}
                </button>
              ))}
            </div>
          </ScrollShadow>
        </section>

        <section>
          <h2 className="my-5 text-4xl font-semibold">Horizontal</h2>
          <ScrollShadow direction="horizontal">
            <div className="space-x-4">
              {Array.from({ length: 25 }, (_, index) => (
                <button
                  key={index}
                  className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
                >
                  Button {index + 1}
                </button>
              ))}
            </div>
          </ScrollShadow>
        </section>
      </main>
    </div>
  );
}

export const getStaticProps = async () => {
  const exploreData = [
    {
      img: '/London.webp',
      location: 'London',
      distance: '45-minute drive',
    },
    {
      img: '/San-Francisco.webp',
      location: 'San Francisco',
      distance: '4.5-hour drive',
    },
    {
      img: '/Noronha.webp',
      location: 'Noronha',
      distance: '4.5-hour drive',
    },
    {
      img: '/Rome.webp',
      location: 'Rome',
      distance: '4-hour drive',
    },
    {
      img: '/Sao-Paulo.webp',
      location: 'São Paulo',
      distance: '45-minute drive',
    },
    {
      img: '/Barcelona.webp',
      location: 'Barcelona',
      distance: '4.5-hour drive',
    },
    {
      img: '/Rio.webp',
      location: 'Rio',
      distance: '6-hour drive',
    },
    {
      img: '/Ilhabela.webp',
      location: 'Ilhabela',
      distance: '2-hour drive',
    },
  ];

  const cardsData = [
    {
      img: '/Outdoor.webp',
      title: 'Outdoor getaways',
    },
    {
      img: '/Unique.webp',
      title: 'Unique stays',
    },
    {
      img: '/Entire.webp',
      title: 'Entire homes',
    },
    {
      img: '/Pet.webp',
      title: 'Pet allowed',
    },
  ];

  return {
    props: {
      exploreData,
      cardsData,
    },
  };
};
