import Image from "next/image";

export default function Home() {
  return (
   <div>
    i am app
    <div className="container bg-red-50 size-80 relative">
    <Image className="mx-auto object-contain" 
    // width={700}
    // height={700}
    fill = {true}
    src={"https://tse2.mm.bing.net/th?id=OIP.W8HqDQV05Ila8bJ0TWWrzgHaE2&pid=Api&P=0&h=180"}
    />
    
   </div>
   </div>
  );
}
