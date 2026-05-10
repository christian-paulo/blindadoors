"use client";

import { useState } from "react";

const FAQS = [
  {
    q: "Qual é o prazo de fabrico?",
    a: "O prazo médio é de 4 a 6 semanas a contar da confirmação da encomenda. Para projetos com personalização especial pode estender-se até 8 semanas.",
  },
  {
    q: "A porta substitui a estrutura existente?",
    a: "Sim. Substituímos integralmente o aro e a porta, deixando o vão pronto a usar. A nossa equipa trata da remoção da porta antiga e da reposição de acabamentos no vão se necessário.",
  },
  {
    q: "É possível ver as portas antes de comprar?",
    a: "Claro. Receba-o no nosso showroom em São João da Madeira, com agendamento prévio. Mostramos modelos completos, amostras de acabamentos e a própria fábrica.",
  },
  {
    q: "Têm assistência pós-venda?",
    a: "Sim. Garantia de 10 anos sobre estrutura e fechadura, com assistência técnica em todo o território nacional.",
  },
  {
    q: "Que zonas do país cobrem?",
    a: "Instalamos em todo Portugal Continental. Para Madeira e Açores avaliamos caso a caso, com transporte garantido pela nossa equipa.",
  },
  {
    q: "Trabalham com arquitectos e promotores?",
    a: "Sim. Temos uma equipa dedicada a projetos de arquitectura e empreendimentos imobiliários, com condições especiais e acompanhamento técnico desde a fase de projeto.",
  },
];

export default function FAQList() {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  return (
    <div className="faq-list">
      {FAQS.map((faq, idx) => {
        const isOpen = openIdx === idx;
        return (
          <div
            key={idx}
            className={`faq-item${isOpen ? " open" : ""}`}
            onClick={() => setOpenIdx(isOpen ? null : idx)}
          >
            <div className="faq-q">
              {faq.q}
              <span className="faq-q-toggle">+</span>
            </div>
            <div className="faq-a">{faq.a}</div>
          </div>
        );
      })}
    </div>
  );
}
