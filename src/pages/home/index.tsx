import Routes from "src/routes";
import { Header } from "../../components";

import "./home.module.css";

export default function Home() {
  return (
    <div className="min-h-screen bg-warmGray-100">
      <header>
        <Header />
        <div className="my-24 px-10 flex flex-col">
          <div>
            <h1 className="text-gray-900 text-center text-4xl">
              Olá, Bem vindo ao nosso Blog{" "}
            </h1>
            <h2 className="mt-5 text-gray-900 text-center text-2xl">
              Artigos diários com tutoriais e/ou dicas com 1000 formas de fazer
              mais de 1001 coisas do nosso dia-a-dia.
            </h2>
          </div>
        </div>
      </header>

      <main className="container">
        <Routes />
      </main>

      <footer></footer>
    </div>
  );
}
