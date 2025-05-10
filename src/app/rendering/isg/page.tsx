import Image from "next/image";

export const revalidate = 10;

export default async function ISGPage() {
  const res = await fetch("https://dog.ceo/api/breeds/image/random", {
    next: { revalidate: 10 },
  });
  const resJson = await res.json();
  const image = resJson.message;

  const timeStamp = new Date().toISOString();

  return (
    <div>
      ISG 10秒ごとにリロード：{timeStamp}
      <Image src={image} width={400} alt="" />
    </div>
  );
}
