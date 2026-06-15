import { useState } from "react";

const options = [
  { src: "/404.png", label: "https://http.cat/", href: "https://http.cat/" },
  { src: "/404-dog.png", label: "https://http.dog/", href: "https://http.dog/" },
];

export default function NotFound() {
  const [pick] = useState(() => options[Math.floor(Math.random() * options.length)]);

  return (
    <div className="min-h-screen w-full flex flex-col items-center justify-center bg-black gap-4">
      <img src={pick.src} alt="404 Not Found" className="max-w-2xl w-full" />
      <p className="text-gray-400 text-sm">
        Image from:{" "}
        <a href={pick.href} target="_blank" rel="noopener noreferrer" className="underline hover:text-white">
          {pick.label}
        </a>
      </p>
    </div>
  );
}
