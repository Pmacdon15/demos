export default function Loading() {
  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="container text-center border p-8 rounded-sm shadow-2xl">
        <h1 className="mb-4 font-bold text-2xl">Loading...</h1>
        <p className="animate-pulse">Please wait while we load the content.</p>
      </div>
    </div>
  );
}
