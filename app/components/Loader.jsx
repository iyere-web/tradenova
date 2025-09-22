// components/Loader.tsx
export default function Loader() {
  return (
    <div className="flex h-screen w-screen items-center justify-center bg-white">
      <div className="animate-spin rounded-full h-16 w-16 border-4 border-gray-300 border-t-blue-500"></div>
    </div>
  );
}
