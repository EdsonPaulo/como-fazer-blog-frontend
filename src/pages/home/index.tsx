import { Heading, Text } from "@chakra-ui/layout";
import "./home.module.css";

export default function Home() {
  return (
    <div className="min-h-screen bg-warmGray-100">
      <div className="my-24 px-10 flex flex-col">
        <div>
          <Heading mb="5">
            Olá, Bem vindo ao nosso Blog
          </Heading>
          <Text  >
            Artigos diários com tutoriais e/ou dicas com 1000 formas de fazer
            mais de 1001 coisas do nosso dia-a-dia.
          </Text>
        </div>
      </div>
    </div>
  );
}
