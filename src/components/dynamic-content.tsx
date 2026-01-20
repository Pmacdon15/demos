import { getDelayedData } from "@/dal/dal";

export default async function DynamicContent() {
  await getDelayedData();
  return <h1> This content loads when the promise resolve.</h1>;
}
