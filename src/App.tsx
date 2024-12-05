import { Sidebar } from './components/layout/Sidebar';
import { Header } from './components/layout/Header';
import { ArtistHeader } from './components/artist/ArtistHeader';
import { PopularTracks } from './components/tracks/PopularTracks';
import { NowPlaying } from './components/player/NowPlaying';
import "@fontsource/poppins";


function App() {
  return (
    <div className="flex min-h-screen bg-[#0A0A0A]">
      <Sidebar />
      
      <main className="flex-1 overflow-auto bg-gradient-to-b from-red-900/50 to-transparent">
        <Header />
        <div>
          <div className="p-4 lg:p-8">
            <ArtistHeader />
          </div>
          <PopularTracks />
        </div>
      </main>

      <NowPlaying />
    </div>
  );
}

export default App;