import Checks from "@/components/Checks";
import Notification from "@/components/Notification";

export default function Home() {
  return (
    <main className="m-4">
      <Notification />
      <Checks />
    </main>
  );
}
