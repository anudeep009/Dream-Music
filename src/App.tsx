import { Sidebar } from './components/layout/Sidebar';
import { Header } from './components/layout/Header';
import { ArtistHeader } from './components/artist/ArtistHeader';
import { PopularTracks } from './components/tracks/PopularTracks';
import { NowPlaying } from './components/player/NowPlaying';

function App() {
  return (
    <div className="flex min-h-screen bg-[#0A0A0A]">
      <Sidebar />
      
      <main className="flex-1 overflow-auto">
        <Header />
        <div className="p-4 lg:p-8">
          <ArtistHeader />
          <PopularTracks />
        </div>
      </main>

      <NowPlaying />
    </div>
  );
}

export default App;