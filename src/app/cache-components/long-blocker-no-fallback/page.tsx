import Link from "next/link";
import { getDelayedData } from "@/dal/dal";

export default async function Page() {
  await getDelayedData();
  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="container text-center border p-8 rounded-sm shadow-2xl">
        <h1 className="mb-4 font-bold text-2xl">
          Long Blocker without Fallback
        </h1>
        <p>
          This content is rendered after a delay, but without a loading
          fallback.
        </p>
        <div className="mt-8">
          <Link className="w-full md:w-auto" href="/cache-components">
            <button  className={'border p-2 rounded-sm px-4 bg-blue-400 text-white hover:bg-blue-500'} type="button">Back</button>
          </Link>
        </div>
      </div>
    </div>
  );
}
