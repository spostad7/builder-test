function Home() {
  return (
    <div className="w-full min-h-screen flex gap-10">
      <aside className="w-72 bg-slate-900"></aside>
      <iframe
        className="flex flex-1 m-10 rounded-2xl shadow-lg"
        src="/template"
      />
    </div>
  );
}

export default Home;
