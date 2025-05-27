import React from 'react';

const AboutSection = () => (
  <section className="max-w-5xl mx-auto my-8 p-6 bg-white rounded shadow flex flex-col md:flex-row gap-8 items-center">
    {/* Texto à esquerda */}
    <div className="flex-1">
      <h2 className="text-2xl font-bold mb-4 text-purple-800">Sobre o Projeto Florescer</h2>
      <p className="mb-2">
        Iniciativa dedicada ao acolhimento de mulheres vítimas de violência doméstica, o projeto <strong>Florescer</strong> proporciona um espaço seguro para reflexão, escuta, fortalecimento, apoio e superação. Desenvolvido pelo Juizado Especial Criminal e da Violência Doméstica da comarca de Blumenau, em parceria com o Centro Judiciário de Solução de Conflitos e Cidadania (Cejusc) de Blumenau e a Secretaria de Desenvolvimento Social (Semudes), a ação promove encontros mensais com as vítimas envolvidas em processos criminais ou medidas protetivas de urgência.
      </p>
      <p>
        Os encontros são realizados regularmente na sede do Cejusc e abordam temas como autoestima, confiança, saúde, escolarização, profissionalização, administração financeira e empreendedorismo. A essência do projeto Florescer está na crença na força inerente a cada mulher, com o objetivo de despertar a consciência das participantes, ajudando-as a reconhecer seu poder de superação e a promover o respeito e o amor-próprio.
      </p>
    </div>
    {/* Espaço para imagem ou ilustração à direita */}
    <div className="flex-1 flex justify-center">
      <img
        src="https://www.tjsc.jus.br/documents/10994886/19594905/Florescer+1.jpg/e1ad3657-8987-13f7-a016-b070ed1178a8?t=1720637330127"
        alt="Florescer"
        className="rounded-lg shadow-lg max-h-72 object-cover"
      />
    </div>
  </section>
);

export default AboutSection;