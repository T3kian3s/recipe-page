import Hero from "./components/Hero";
import Card from "./components/Card";
import InputText from "./components/InputText";
import Table from "./components/Table";
// import InputText from "./components/InputText";

function App() {
  return (
    <main className="font-young-serif flex justify-center">
      <section className="w-[320px] my-[10px] xl:w-[940px]">
        <Hero />
        <Card />
        <InputText />
        <Table />
      </section>
    </main>
  );
}

export default App;
