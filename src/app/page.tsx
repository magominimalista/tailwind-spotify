import { ButtonsControler } from "@/components/ButtonsControler";
import { CoverList } from "@/components/CoverList";
import { Footer } from "@/components/Footer";
import { PlaylistList } from "@/components/PlaylistList";
import { Sidebar } from "@/components/Sidebar";

export default function Home() {
  return (
    <div className="h-screen flex flex-col">

      <div className="flex flex-1">
        <Sidebar />

        <main className="flex-1 p-6">
          <ButtonsControler />
          <CoverList />
          <PlaylistList />
        </main>
      </div>

      <Footer />
    </div>
  )
}
