export default function NotFound() {
  return (
    <div className="min-h-screen w-full flex flex-col items-center justify-center bg-black gap-4">
      <img src="/404.png" alt="404 Not Found" className="max-w-2xl w-full" />
      <p className="text-gray-400 text-sm">
        Image from:{" "}
        <a href="https://http.cat/" target="_blank" rel="noopener noreferrer" className="underline hover:text-white">
          https://http.cat/
        </a>
      </p>
    </div>
  );
}
