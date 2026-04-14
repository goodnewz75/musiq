export default function App() {
  const videos = [
    { title: 'Live Worship Session', duration: '4:12' },
    { title: 'Official Music Video', duration: '3:45' },
    { title: 'Behind The Song', duration: '6:08' },
  ];

  const merch = [
    { item: 'Signature Hoodie', price: '$55' },
    { item: 'Faith Tee', price: '$30' },
    { item: 'Album Poster', price: '$20' },
  ];

  return (
    <div className="min-h-screen overflow-hidden bg-black text-white">
      <section className="relative">
        <div className="absolute inset-0 animate-pulse bg-gradient-to-br from-purple-700/40 via-fuchsia-500/20 to-black" />
        <div className="relative mx-auto max-w-6xl px-4 py-16 sm:px-6 md:py-24">
          <div className="flex flex-col items-center gap-6 text-center">
            <div className="flex h-24 w-24 items-center justify-center rounded-3xl border border-white/20 bg-zinc-900 text-sm text-zinc-400">
              Your Logo
            </div>
            <h1 className="max-w-4xl text-4xl font-bold sm:text-5xl md:text-7xl">
              A cinematic music world with video, merch, giving, and mobile-first design.
            </h1>
            <div className="h-64 w-full max-w-4xl rounded-3xl border border-white/10 bg-gradient-to-br from-zinc-800 to-zinc-950 p-4">
              <div className="flex h-full items-center justify-center rounded-2xl border border-dashed border-white/20 text-zinc-400">
                Cover Art / Hero Visual Placement
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <h2 className="mb-8 text-3xl font-bold">Featured Videos</h2>
        <div className="grid gap-6 md:grid-cols-3">
          {videos.map((video) => (
            <div key={video.title} className="rounded-3xl border border-white/10 bg-zinc-900 p-4">
              <div className="mb-4 aspect-video rounded-2xl bg-zinc-800" />
              <h3 className="text-xl font-semibold">{video.title}</h3>
              <p className="text-sm text-zinc-400">YouTube Embed • {video.duration}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-zinc-950">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
          <h2 className="mb-8 text-3xl font-bold">Merch Store</h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {merch.map((product) => (
              <div key={product.item} className="rounded-3xl border border-white/10 bg-zinc-900 p-6">
                <div className="mb-4 h-48 rounded-2xl bg-gradient-to-br from-purple-600/40 to-zinc-800" />
                <h3 className="text-xl font-semibold">{product.item}</h3>
                <p className="mt-2 text-zinc-400">{product.price}</p>
                <button className="mt-4 rounded-xl bg-purple-600 px-4 py-2 text-sm font-semibold">Buy Now</button>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <h2 className="mb-8 text-3xl font-bold">Support the Mission</h2>
        <div className="rounded-3xl border border-white/10 bg-zinc-900 p-8">
          <p className="text-zinc-400">
            Let fans support your music videos, ministry, outreach, and future releases.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <button className="rounded-2xl bg-purple-600 px-5 py-3 font-semibold">One-Time Gift</button>
            <button className="rounded-2xl border border-white/20 px-5 py-3 font-semibold">Monthly Partner</button>
          </div>
        </div>
      </section>
    </div>
  )
}
