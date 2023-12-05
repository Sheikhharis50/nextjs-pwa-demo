import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="flex items-center justify-center text-8xl">
        NextJS PWA
      </div>
      <Image
        src={"/images/my.jpeg"}
        width={400}
        height={400}
        alt="Picture of the author"
      />
    </main>
  );
}
