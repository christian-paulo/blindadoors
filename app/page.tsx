import Nav from "@/components/Nav";
import FAQList from "@/components/FAQList";

const PHONE = "+351 000 000 000";
const PHONE_HREF = "tel:+351000000000";
const EMAIL = "geral@blindadoors.pt";

const MARQUEE_ITEMS = [
  "Sob medida",
  "Aço português",
  "Isolamento termoacústico",
  "Fabrico artesanal",
  "Personalização total",
  "7 pontos de fecho",
  "Garantia 10 anos",
];

const MEDIDA_LIST = [
  {
    num: "i",
    title: "Medidas exactas ao milímetro",
    desc: "Levantamento técnico no local, sem aproximações",
  },
  {
    num: "ii",
    title: "Acabamentos totalmente à escolha",
    desc: "Madeiras, lacagens, peles técnicas, metais escovados, painéis pantografados",
  },
  {
    num: "iii",
    title: "Painel interior diferente do exterior",
    desc: "Combine a estética da rua com a do interior da casa",
  },
  {
    num: "iv",
    title: "Ferragens e acessórios à medida",
    desc: "Puxadores, espelhos, óculos, batentes, sistemas biométricos opcionais",
  },
];

const MODELOS = [
  {
    serie: "Série Classic",
    num: "— 01",
    name: "Carvalho",
    desc: "Painéis em madeira maciça envernizada, ferragens em latão escovado, frisos almofadados.",
    cls: "classic",
  },
  {
    serie: "Série Urban",
    num: "— 02",
    name: "Grafite",
    desc: "Linhas rectas, lacagem mate, puxador integrado vertical. Para arquitectura contemporânea.",
    cls: "urban",
  },
  {
    serie: "Série Signature",
    num: "— 03",
    name: "Onyx",
    desc: "Topo de gama. Aço reforçado, fechadura biométrica opcional, acabamentos em pele técnica ou metal escovado.",
    cls: "signature",
  },
];

const SPECS = [
  {
    n: "i",
    title: "Estrutura em Tubo de Aço",
    desc: "Esqueleto interno em tubo de aço soldado e reforçado, revestido por chapa de aço galvanizado em ambas as faces.",
    detail: "→ Aço europeu certificado",
  },
  {
    n: "ii",
    title: "Fechadura de 7 Pontos",
    desc: "5 pontos móveis e 2 pontos fixos. Cilindro europeu com proteção anti-bumping e anti-arrombamento.",
    detail: "→ 5 móveis · 2 fixos",
  },
  {
    n: "iii",
    title: "Isolamento Termoacústico",
    desc: "Núcleo preenchido com material isolante de alta densidade. Reduz o ruído exterior e melhora a eficiência energética.",
    detail: "→ Conforto · Poupança",
  },
  {
    n: "iv",
    title: "Acabamentos Sob Medida",
    desc: "Madeiras, lacagens, lâminas decorativas, peles técnicas, metais escovados. Painel interior pode ser diferente do exterior.",
    detail: "→ 100% à medida",
  },
  {
    n: "v",
    title: "Dobradiças Reforçadas",
    desc: "Três dobradiças em aço com rolamento de esferas e pinos antiarrancamento. Mantêm o alinhamento perfeito durante décadas.",
    detail: "→ Suportam até 180 kg",
  },
  {
    n: "vi",
    title: "Vedações Multicâmara",
    desc: "Vedações periféricas em borracha técnica que asseguram estanquidade total ao ar, água e som.",
    detail: "→ Tripla vedação",
  },
];

const SWATCHES = [
  { cls: "s1", name: "Nogueira", type: "Madeira" },
  { cls: "s2", name: "Carvalho Mel", type: "Madeira" },
  { cls: "s3", name: "Antracite", type: "Lacagem" },
  { cls: "s4", name: "Marfim", type: "Lacagem" },
  { cls: "s5", name: "Castanho", type: "Pele" },
  { cls: "s6", name: "Inox Escovado", type: "Metal" },
  { cls: "s7", name: "Latão", type: "Ferragem" },
  { cls: "s8", name: "Azul Profundo", type: "RAL" },
];

const STEPS = [
  { n: "i", title: "Visita & Medição", desc: "Deslocamo-nos à sua casa para medições rigorosas e levantamento das condições do vão." },
  { n: "ii", title: "Configuração", desc: "Escolha da série, acabamentos, ferragens e opções de segurança no showroom." },
  { n: "iii", title: "Fabrico", desc: "Produção exclusiva da sua porta na nossa fábrica. Prazo médio: 4 a 6 semanas." },
  { n: "iv", title: "Controlo", desc: "Cada porta passa por testes de fecho, vedação e acabamento antes de sair da fábrica." },
  { n: "v", title: "Instalação", desc: "Montagem por equipa própria certificada. Limpeza final e entrega de manual e garantia." },
];

const ASSIST_SERVICES = [
  { icon: "α", title: "Abertura de portas", desc: "Abertura técnica em caso de perda de chaves ou avaria de fechadura." },
  { icon: "β", title: "Reparação de cilindros", desc: "Substituição e reparação após tentativa de arrombamento." },
  { icon: "γ", title: "Afinação técnica", desc: "Recuperação do alinhamento e funcionamento perfeito da porta." },
  { icon: "δ", title: "Manutenção preventiva", desc: "Revisões periódicas para garantir o bom funcionamento." },
];

const COBERTURA = [
  { region: "Norte", title: "Porto & Distrito", text: "Porto · Vila Nova de Gaia · Matosinhos · Maia · Gondomar · Valongo · Santo Tirso · Trofa" },
  { region: "Aveiro", title: "Sede & Região", text: "São João da Madeira · Oliveira de Azeméis · Espinho · Santa Maria da Feira · Aveiro" },
  { region: "Centro", title: "Coimbra & Leiria", text: "Coimbra · Leiria · Marinha Grande · Pombal · Viseu · Tondela · Guarda" },
  { region: "Sul", title: "Lisboa & Algarve", text: "Lisboa · Cascais · Sintra · Oeiras · Setúbal · Faro · Albufeira · Loulé" },
];

const TESTEMUNHOS = [
  {
    text: "Procurávamos uma porta que combinasse segurança real com o design da casa. A BlindaDoors entregou as duas coisas. Quatro anos depois, continua impecável.",
    initial: "R",
    name: "Rui Almeida",
    location: "Vila Nova de Gaia",
  },
  {
    text: "O isolamento acústico surpreendeu-me. Vivo numa rua movimentada e ao fechar a porta o silêncio é total. O acabamento em carvalho é uma obra de arte.",
    initial: "S",
    name: "Sofia Marques",
    location: "Lisboa",
  },
  {
    text: "Equipámos as 12 villas do nosso empreendimento com portas BlindaDoors. Profissionalismo do primeiro contacto até à instalação. Recomendo sem reservas.",
    initial: "M",
    name: "Manuel Oliveira",
    location: "Promotor Imobiliário",
  },
];

const CERTS = [
  { icon: "α", title: "EN 1627–1630", desc: "Resistência a tentativas de arrombamento" },
  { icon: "β", title: "Marcação CE", desc: "Conformidade europeia para portas exteriores" },
  { icon: "γ", title: "Isolamento Acústico", desc: "Testado em laboratório acreditado" },
  { icon: "δ", title: "Aço Galvanizado", desc: "Proteção anti-corrosão certificada" },
];

export default function Home() {
  return (
    <>
      <div className="topbar">
        <div className="topbar-inner">
          <div className="topbar-left">
            <span>Fabrico Português · São João da Madeira</span>
            <span>Showroom Seg–Sáb</span>
          </div>
          <a href={PHONE_HREF} className="topbar-phone">
            <strong>24H</strong> {PHONE}
          </a>
        </div>
      </div>

      <Nav phone={PHONE} />

      <header className="hero">
        <div className="hero-photo"></div>
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <div className="container">
            <span className="eyebrow">Portas Blindadas Sob Medida</span>
            <h1>
              <span className="line">Cada porta,</span>
              <span className="line">
                <em>única</em>.
              </span>
              <span className="line">Como o lar que protege.</span>
            </h1>
            <p className="hero-sub">
              Fabricamos portas blindadas 100% personalizadas em São João da Madeira. Tubo e chapa de aço maciço, fechadura
              de 7 pontos, isolamento termoacústico e acabamentos à sua escolha.
            </p>
            <div className="hero-actions">
              <a href="#cta" className="btn-primary">
                Orçamento Grátis →
              </a>
              <a href="#modelos" className="btn-secondary">
                Ver Modelos
              </a>
            </div>
            <div className="hero-trust">
              <div className="trust-item">
                <div className="trust-num">
                  15<em>+</em>
                </div>
                <div className="trust-label">Anos</div>
              </div>
              <div className="trust-item">
                <div className="trust-num">2.400</div>
                <div className="trust-label">Portas</div>
              </div>
              <div className="trust-item">
                <div className="trust-num">
                  100<em>%</em>
                </div>
                <div className="trust-label">Made in PT</div>
              </div>
            </div>
          </div>
        </div>
      </header>

      <div className="marquee">
        <div className="marquee-track">
          {[...MARQUEE_ITEMS, ...MARQUEE_ITEMS].map((item, i) => (
            <span key={i} className="marquee-item">
              {item}
            </span>
          ))}
        </div>
      </div>

      <section className="sob-medida" id="sob-medida">
        <div className="container">
          <div className="medida-grid">
            <div className="medida-photo">
              <div className="medida-stamp">São João da Madeira</div>
            </div>
            <div className="medida-content">
              <span className="eyebrow">100% Sob Medida</span>
              <h2>
                Não vendemos catálogos.
                <br />
                <em>Fabricamos a sua porta.</em>
              </h2>
              <p>
                Cada vão é diferente. Cada casa tem a sua linguagem. Por isso a BlindaDoors não trabalha com modelos
                pré-fabricados em série — cada porta é desenhada e construída para o seu projeto, com as suas medidas
                exactas e os seus acabamentos.
              </p>
              <p>Visitamos, medimos, mostramos amostras físicas, e só depois entramos em fabrico. Sem surpresas, sem improvisos.</p>
              <ul className="medida-list">
                {MEDIDA_LIST.map((item) => (
                  <li key={item.num}>
                    <span className="num">{item.num}</span>
                    <div>
                      <strong>{item.title}</strong>
                      <small>{item.desc}</small>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="alt-block">
        <div className="container">
          <div className="alt-row">
            <div className="alt-text">
              <span className="eyebrow">Segurança Real</span>
              <h3>
                Estrutura em
                <br />
                monobloco de aço.
              </h3>
              <p>
                O coração de uma BlindaDoors é o seu esqueleto: tubo de aço soldado e reforçado, revestido por chapa de aço
                galvanizado em ambas as faces. Esta construção em monobloco distribui qualquer força aplicada por toda a
                estrutura.
              </p>
              <p>Certificação anti-arrombamento e anti-intrusão segundo a norma europeia ENV 1627.</p>
              <a href="#specs" className="btn-link">
                Ver tecnologia →
              </a>
            </div>
            <div className="alt-img style-1">
              <span className="alt-img-label">Monobloco · ENV 1627</span>
            </div>
          </div>

          <div className="alt-row reverse">
            <div className="alt-text">
              <span className="eyebrow">Fechadura Europeia</span>
              <h3>
                7 pontos de fecho.
                <br />
                Cilindro de alta segurança.
              </h3>
              <p>
                5 pontos móveis e 2 pontos fixos distribuídos em toda a altura da porta — quando fechada, fica solidamente
                ancorada ao aro em 7 zonas distintas. Cilindro europeu com proteção anti-bumping, anti-extracção e
                anti-perfuração.
              </p>
              <p>Sistemas opcionais: chave-mestra, abertura biométrica ou cartão eletrónico.</p>
              <a href="#specs" className="btn-link">
                Detalhes técnicos →
              </a>
            </div>
            <div className="alt-img style-2">
              <span className="alt-img-label">5 móveis + 2 fixos</span>
            </div>
          </div>

          <div className="alt-row">
            <div className="alt-text">
              <span className="eyebrow">Isolamento</span>
              <h3>
                Silêncio dentro,
                <br />
                cidade lá fora.
              </h3>
              <p>
                Núcleo interior preenchido com material isolante de alta densidade. Reduz drasticamente o ruído proveniente
                da rua e melhora a eficiência energética da habitação.
              </p>
              <p>Vedações periféricas em borracha técnica multicâmara asseguram estanquidade total ao ar, água e som.</p>
              <a href="#specs" className="btn-link">
                Mais informações →
              </a>
            </div>
            <div className="alt-img style-3">
              <span className="alt-img-label">Tripla vedação</span>
            </div>
          </div>
        </div>
      </section>

      <section className="modelos" id="modelos">
        <div className="container">
          <div className="section-header">
            <div>
              <span className="eyebrow">Galeria</span>
              <h2>
                Três séries.
                <br />
                <em>Infinitas</em> configurações.
              </h2>
            </div>
            <p className="lede">
              As nossas séries são apenas o ponto de partida — cada uma representa uma linguagem estética, mas todos os
              elementos são personalizáveis. Não há duas BlindaDoors iguais.
            </p>
          </div>
          <div className="modelos-grid">
            {MODELOS.map((m) => (
              <article key={m.cls} className={`modelo ${m.cls}`}>
                <div className="modelo-img"></div>
                <div className="modelo-body">
                  <div className="modelo-meta">
                    <span>{m.serie}</span>
                    <span className="num">{m.num}</span>
                  </div>
                  <h3 className="modelo-name">{m.name}</h3>
                  <p className="modelo-desc">{m.desc}</p>
                  <span className="modelo-arrow">Configurar →</span>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="specs" id="specs">
        <div className="container">
          <div className="section-header">
            <div>
              <span className="eyebrow">Engenharia</span>
              <h2>
                O que está
                <br />
                <em>por dentro</em> conta.
              </h2>
            </div>
            <p className="lede">
              Uma BlindaDoors não é só o que se vê. É a estrutura interna em tubo de aço, a chapa que reveste, a fechadura
              europeia e o isolamento que separa o ruído da rua do silêncio do seu lar.
            </p>
          </div>
          <div className="specs-grid">
            {SPECS.map((s) => (
              <div key={s.n} className="spec-item">
                <div className="spec-icon">{s.n}</div>
                <div className="spec-content">
                  <h4>{s.title}</h4>
                  <p>{s.desc}</p>
                  <span className="spec-detail">{s.detail}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="personalizar" id="personalizar">
        <div className="container">
          <div className="section-header">
            <div>
              <span className="eyebrow">Acabamentos</span>
              <h2>
                Escolha cada
                <br />
                <em>detalhe.</em>
              </h2>
            </div>
            <p className="lede">
              Mostramos aqui apenas algumas das opções disponíveis. No nosso showroom em São João da Madeira, terá acesso a
              todas as amostras físicas — para tocar, comparar e decidir sem dúvidas.
            </p>
          </div>
          <div className="opt-grid">
            {SWATCHES.map((s) => (
              <div key={s.cls} className="opt-card">
                <div className={`opt-swatch ${s.cls}`}></div>
                <h5>{s.name}</h5>
                <span>{s.type}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="processo">
        <div className="container">
          <div className="section-header">
            <div>
              <span className="eyebrow">Como Trabalhamos</span>
              <h2>
                Cinco etapas.
                <br />
                Uma porta <em>sua.</em>
              </h2>
            </div>
            <p className="lede">
              Da primeira conversa até à instalação final, acompanhamos cada passo. Sem subcontratações, sem intermediários,
              sem surpresas.
            </p>
          </div>
          <div className="processo-photo"></div>
          <div className="processo-track">
            {STEPS.map((s) => (
              <div key={s.n} className="step">
                <div className="step-num">{s.n}</div>
                <div>
                  <h4>{s.title}</h4>
                  <p>{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="assistencia" id="assistencia">
        <div className="container">
          <div className="assist-grid">
            <div className="assist-content">
              <span className="eyebrow">Serviço 24 Horas</span>
              <h2>
                Assistência
                <br />
                <em>sempre que precisar.</em>
              </h2>
              <p>
                Detetou alguma anomalia na sua porta? Sofreu uma tentativa de assalto? Perdeu as chaves? A nossa equipa
                técnica está disponível 24 horas por dia para deslocação ao local — em todo o Portugal Continental.
              </p>
              <a href={PHONE_HREF} className="assist-phone">
                <div className="assist-phone-icon">☎</div>
                <div className="assist-phone-text">
                  <span className="assist-phone-label">Linha SOS · 24H</span>
                  <span className="assist-phone-num">{PHONE}</span>
                </div>
              </a>
            </div>
            <div className="assist-services">
              {ASSIST_SERVICES.map((s) => (
                <div key={s.title} className="assist-service">
                  <div className="assist-service-icon">{s.icon}</div>
                  <h5>{s.title}</h5>
                  <p>{s.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="cobertura" id="cobertura">
        <div className="container">
          <div className="section-header">
            <div>
              <span className="eyebrow">Cobertura Nacional</span>
              <h2>
                Fabrico em São João da Madeira.
                <br />
                Instalação <em>em todo o país.</em>
              </h2>
            </div>
            <p className="lede">
              Equipa própria de instalação e assistência em todo Portugal Continental. Atendemos particulares, empresas,
              promotores imobiliários e escritórios de arquitectura.
            </p>
          </div>
          <div className="cob-grid">
            {COBERTURA.map((c) => (
              <div key={c.region} className="cob-card">
                <span className="cob-region">{c.region}</span>
                <h5>{c.title}</h5>
                <p>{c.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="testemunhos">
        <div className="container">
          <div className="section-header">
            <div>
              <span className="eyebrow">Clientes</span>
              <h2>
                Quem já fechou
                <br />
                a porta connosco<em>.</em>
              </h2>
            </div>
            <p className="lede">
              Mais de 2.400 famílias e empresas em todo o país escolheram a BlindaDoors. Estes são alguns dos seus testemunhos.
            </p>
          </div>
          <div className="testemunhos-grid">
            {TESTEMUNHOS.map((t) => (
              <div key={t.name} className="testemunho">
                <div className="testemunho-quote">&ldquo;</div>
                <p className="testemunho-text">{t.text}</p>
                <div className="testemunho-author">
                  <div className="author-avatar">{t.initial}</div>
                  <div className="author-meta">
                    <strong>{t.name}</strong>
                    <span>{t.location}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="faq" id="faq">
        <div className="container">
          <div className="section-header">
            <div>
              <span className="eyebrow">Perguntas Frequentes</span>
              <h2>
                Dúvidas?
                <br />
                <em>Respondemos.</em>
              </h2>
            </div>
            <p className="lede">
              Reunimos as perguntas mais comuns dos nossos clientes. Se a sua não estiver aqui, ligue-nos — temos sempre
              alguém disponível para o atender.
            </p>
          </div>
          <div className="faq-wrap">
            <FAQList />
            <div className="certs-card">
              <span className="eyebrow" style={{ marginBottom: 14, display: "flex" }}>
                Certificações
              </span>
              <h3>Padrões que cumprimos.</h3>
              <p>
                Cada porta sai com documentação completa e cumpre as normas europeias aplicáveis a portas de segurança.
              </p>
              <ul className="cert-list">
                {CERTS.map((c) => (
                  <li key={c.title}>
                    <div className="cert-icon">{c.icon}</div>
                    <div>
                      <strong>{c.title}</strong>
                      <small>{c.desc}</small>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="cta-final" id="cta">
        <div className="container">
          <span className="eyebrow">Vamos conversar</span>
          <h2>
            A sua porta começa
            <br />
            com uma <em>chamada.</em>
          </h2>
          <p>
            Atendimento personalizado pela nossa equipa em São João da Madeira. Orçamento totalmente gratuito e sem
            compromisso.
          </p>
          <div className="cta-buttons">
            <a href={PHONE_HREF} className="phone-cta">
              <div className="phone-cta-icon">☎</div>
              <div className="phone-cta-text">
                <span className="phone-cta-label">Ligar para a fábrica</span>
                <span className="phone-cta-num">{PHONE}</span>
              </div>
            </a>
          </div>
        </div>
      </section>

      <footer>
        <div className="container">
          <div className="footer-grid">
            <div className="footer-brand">
              <a href="#" className="logo">
                <span className="logo-mark"></span>
                Blinda<span className="accent-text">Doors</span>
              </a>
              <p>
                Fabricante português de portas blindadas 100% personalizadas. Sede e fábrica em São João da Madeira.
                Instalação e assistência em todo Portugal Continental.
              </p>
            </div>
            <div className="footer-col">
              <h5>Empresa</h5>
              <ul>
                <li>
                  <a href="#sob-medida">Sob Medida</a>
                </li>
                <li>
                  <a href="#processo">Processo</a>
                </li>
                <li>
                  <a href="#cobertura">Cobertura</a>
                </li>
                <li>
                  <a href="#faq">FAQ</a>
                </li>
              </ul>
            </div>
            <div className="footer-col">
              <h5>Produtos</h5>
              <ul>
                <li>
                  <a href="#modelos">Série Classic</a>
                </li>
                <li>
                  <a href="#modelos">Série Urban</a>
                </li>
                <li>
                  <a href="#modelos">Série Signature</a>
                </li>
                <li>
                  <a href="#personalizar">Acabamentos</a>
                </li>
              </ul>
            </div>
            <div className="footer-col">
              <h5>Contacto · 24H</h5>
              <ul>
                <li>
                  <a href={PHONE_HREF}>{PHONE}</a>
                </li>
                <li>
                  <a href={`mailto:${EMAIL}`}>{EMAIL}</a>
                </li>
                <li>
                  <a href="#">Showroom · São João da Madeira</a>
                </li>
                <li>
                  <a href="#">Seg–Sáb · 9h–19h</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="footer-bottom">
            <span>© 2026 BlindaDoors · Todos os direitos reservados</span>
            <span>
              Fabricado <em>em Portugal</em> com aço europeu
            </span>
          </div>
        </div>
      </footer>
    </>
  );
}
