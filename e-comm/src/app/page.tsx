

import Image from "next/image";

export default function Home() {
  return (
   <div>
       <img className="w-20 h-20" src={"logo.webp"}/>
       <h1 className="text-2xl font bold">{process.env.STORE_NAME}</h1>
       <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorem consequatur nesciunt sapiente iusto, ipsa beatae impedit, unde perspiciatis quaerat, suscipit tenetur sint enim deleniti. Minus doloribus nulla dolorum repudiandae aut repellat nesciunt, eum iure ea, quam dolores soluta aperiam recusandae velit necessitatibus vero incidunt saepe ullam fuga labore? Magni exercitationem nihil aliquam animi dignissimos, dolorum, dolore suscipit eos laborum reiciendis esse voluptates eveniet iusto, deleniti perspiciatis aliquid corporis ipsum. Saepe, eligendi nulla. Sapiente vero, sint animi sit deleniti vel.</p>
   </div>
  );
}
