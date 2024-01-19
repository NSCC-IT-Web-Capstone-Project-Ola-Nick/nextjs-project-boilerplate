import Image from "next/image";
import { Inter } from "next/font/google";

// import prisma
import prisma from "../../lib/prisma";
import { GetStaticProps } from "next";

const inter = Inter({ subsets: ["latin"] });

export const getStaticProps: GetStaticProps = async () => {
  const feed = await prisma.sampleData.findMany({
    orderBy: {
      id: "desc",
    },
  });
  return {
    props: { feed },
    revalidate: 10,
  };
};

export default function Home(
  props: { feed: { id: number; dataname: string; datacontent: string }[] }
) {

  console.log(props.feed);
  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between p-24 ${inter.className}`}
    >
      This is the boilerplate for Next.js + TailwindCSS + Prisma + Typescript + JWT
      {props.feed.map((item) => (
        <div key={item.id}>
          <h1>{item.dataname}</h1>
          <p>{item.datacontent}</p>
        </div>
      ))}
    </main>
  );
}
