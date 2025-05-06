import Link from "next/link";
import ClientComponent from "@/components/ClientComponent";

export default function ServerComponent() {
  console.log("Server Component");
  return (
    <>
      <div>ServerComponent</div>
      <ClientComponent />
      <Link href={"/about"}>About</Link>
    </>
  );
}
