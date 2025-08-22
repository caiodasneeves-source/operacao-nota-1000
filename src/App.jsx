import React from "react";
import { FaWhatsapp, FaCheckCircle, FaStar } from "react-icons/fa";

export default function App() {
  return (
    <div className="bg-gradient-to-br from-purple-900 via-gray-900 to-black text-white min-h-screen">
      {/* HERO */}
      <section className="flex flex-col items-center justify-center text-center py-20 px-6 max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-6">
          🚀 Operação Nota 1000  
          <span className="block text-purple-400">Seu guia definitivo para gabaritar o ENEM</span>
        </h1>
        <p className="text-lg md:text-xl text-gray-300 mb-8">
          Descubra os segredos para alcançar a tão sonhada <span className="text-yellow-400">nota máxima na redação</span>.
        </p>
        <a
          href="https://wa.me/5521987405039"
          target="_blank"
          className="bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-full text-lg flex items-center gap-2 transition"
        >
          <FaWhatsapp className="text-2xl" />
          Falar com Especialista
        </a>
      </section>

      {/* VSL */}
      <section className="bg-gray-800 py-16 px-6 text-center">
        <h2 className="text-3xl font-bold mb-6">🎥 Assista à nossa VSL</h2>
        <div className="aspect-video max-w-3xl mx-auto shadow-2xl rounded-2xl overflow-hidden border border-gray-700">
          <iframe
            className="w-full h-full"
            src="https://www.youtube.com/embed/_-FRWVY7Tz8"
            title="VSL Operação Nota 1000"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </section>

      {/* BENEFÍCIOS */}
      <section className="py-16 px-6 max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">✅ O que você vai conquistar</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-gray-800 p-6 rounded-2xl shadow hover:shadow-lg transition">
            <FaCheckCircle className="text-green-400 text-3xl mb-4" />
            <h3 className="text-xl font-bold mb-2">Redação Imbatível</h3>
            <p className="text-gray-300">Aprenda a estruturar redações que impressionam qualquer corretor do ENEM.</p>
          </div>
          <div className="bg-gray-800 p-6 rounded-2xl shadow hover:shadow-lg transition">
            <FaCheckCircle className="text-green-400 text-3xl mb-4" />
            <h3 className="text-xl font-bold mb-2">Foco Estratégico</h3>
            <p className="text-gray-300">Método direto ao ponto, sem enrolação, para acelerar sua evolução.</p>
          </div>
          <div className="bg-gray-800 p-6 rounded-2xl shadow hover:shadow-lg transition">
            <FaCheckCircle className="text-green-400 text-3xl mb-4" />
            <h3 className="text-xl font-bold mb-2">Nota 1000</h3>
            <p className="text-gray-300">Domine técnicas que já levaram centenas de alunos à nota máxima.</p>
          </div>
        </div>
      </section>

   {/* PROVAS SOCIAIS */}
<section className="bg-gray-900 py-16 px-6">
  <h2 className="text-3xl font-bold text-center mb-12">📱 Depoimentos Reais</h2>
  <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
    {/* Card 1 */}
    <div className="bg-gray-800 rounded-2xl p-6 shadow-lg">
      <img
        src="/provas/print1.png"
        alt="Depoimento Carol Araujo"
        className="rounded-xl mb-4"
      />
      <p className="text-gray-300 mb-3">
        “Graças à Operação Nota 1000, consegui organizar meus estudos e tirei 980 na redação! 🙌”
      </p>
      <h4 className="font-bold text-purple-300">— Carol Araujo</h4>
    </div>

    {/* Card 2 */}
    <div className="bg-gray-800 rounded-2xl p-6 shadow-lg">
      <img
        src="/provas/print2.png"
        alt="Depoimento Thiago Leme"
        className="rounded-xl mb-4"
      />
      <p className="text-gray-300 mb-3">
        “Simplesmente transformador. Método prático que mudou meu jeito de escrever.”
      </p>
      <h4 className="font-bold text-purple-300">— Thiago Leme</h4>
    </div>

    {/* Card 3 */}
    <div className="bg-gray-800 rounded-2xl p-6 shadow-lg">
      <img
        src="/provas/print3.png"
        alt="Depoimento Karina Augusto"
        className="rounded-xl mb-4"
      />
      <p className="text-gray-300 mb-3">
        “Nunca pensei que fosse possível chegar tão longe. Minha nota foi 1000 e já garanti minha vaga na faculdade!”
      </p>
      <h4 className="font-bold text-purple-300">— Karina Augusto</h4>
    </div>
  </div>
</section>

      {/* CTA FINAL */}
      <section className="py-20 text-center px-6">
        <h2 className="text-4xl font-bold mb-6">🚀 Pronto para sua Nota 1000?</h2>
        <a
          href="https://wa.me/5521987405039"
          target="_blank"
          className="bg-green-500 hover:bg-green-600 text-white px-10 py-5 rounded-full text-xl flex items-center gap-3 justify-center mx-auto max-w-sm transition"
        >
          <FaWhatsapp className="text-3xl" />
          Quero minha Nota 1000
        </a>
      </section>
    </div>
  );
}
