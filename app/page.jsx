import Main from "./components/Main";

export default function Home() {
  return (
    <main className="main flex flex-col sm:flex-row ">
      <div className="w-8/12 mx-auto pt-8">
        <Main />
      </div>
    </main>
  );
}
