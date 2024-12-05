import { Play } from "lucide-react";

export function ArtistHeader() {
  return (
    <div className="font-poppins relative h-[300px] overflow-hidden rounded-3xl bg-gradient-to-b from-[#4C0000] to-[#0A0A0A]">
      <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-transparent to-transparent" />
      <img
        src="https://images.unsplash.com/photo-1583795128727-6ec3642408f8?auto=format&fit=crop&q=80&w=1200"
        alt="Michael Jackson performing"
        className="h-full w-full object-cover opacity-50"
      />
      <div className="absolute bottom-0 left-0 right-0 p-8">
        <div className="flex items-center gap-2">
          <Play className="h-6 w-6 text-blue-400" />
          <span className="text-sm font-medium text-white">Verified Artist</span>
        </div>
        <h1 className="mt-2 text-6xl font-bold text-white">Michael Jackson</h1>
        <p className="mt-2 text-sm text-neutral-400">27,852,501 monthly listeners</p>
      </div>
    </div>
  );
}
