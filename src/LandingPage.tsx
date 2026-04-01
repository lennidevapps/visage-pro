import { motion, useScroll, useTransform } from "motion/react";
import { 
  ChevronRight, 
  School, 
  DraftingCompass, 
  Beaker, 
  Banknote, 
  Award, 
  Group, 
  Sparkles, 
  BookOpen,
  CheckCircle,
  Menu,
  X
} from "lucide-react";
import { useState, useEffect, useRef } from "react";

// --- Shared Animation Variants ---
const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  visible: (delay: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay, ease: [0.16, 1, 0.3, 1] },
  }),
};

const fadeInScale = {
  hidden: { opacity: 0, scale: 0.96 },
  visible: (delay: number = 0) => ({
    opacity: 1,
    scale: 1,
    transition: { duration: 0.6, delay, ease: [0.16, 1, 0.3, 1] },
  }),
};

const staggerContainer = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.12, delayChildren: 0.1 },
  },
};

// --- Components ---

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Filosofía", href: "#filosofia" },
    { name: "El Método", href: "#metodo" },
    { name: "Resultados", href: "#resultados" },
    { name: "Inscribirse", href: "#inscribirse" },
  ];

  return (
    <>
      <nav
        className={`fixed top-0 w-full z-50 transition-all duration-500 ${
          isScrolled
            ? "bg-stone-50/90 backdrop-blur-xl py-3 shadow-[var(--shadow-elevated)]"
            : "bg-transparent py-6"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">
          <div className="font-headline text-xl md:text-2xl uppercase tracking-[0.2em] text-on-surface">
            Método Visage Pro
          </div>
          <div className="hidden md:flex items-center gap-10 font-sans text-[11px] uppercase tracking-[0.2em] font-semibold">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="relative hover:text-primary transition-colors duration-300 after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-[1px] after:bg-primary after:transition-all after:duration-300 hover:after:w-full"
              >
                {link.name}
              </a>
            ))}
          </div>
          <div className="flex items-center gap-4">
            <button className="hidden sm:block px-6 py-2.5 bg-on-surface text-background text-[10px] font-bold uppercase tracking-[0.2em] rounded-lg hover:bg-primary transition-colors duration-300 shadow-[var(--shadow-subtle)]">
              Acceso Alumnos
            </button>
            <button
              onClick={() => setIsMobileMenuOpen(true)}
              className="md:hidden p-2 text-on-surface"
            >
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <motion.div
        initial={false}
        animate={{ x: isMobileMenuOpen ? 0 : "100%" }}
        transition={{ type: "spring", damping: 25, stiffness: 200 }}
        className="fixed inset-0 z-[100] bg-on-surface text-white p-12 flex flex-col justify-between md:hidden"
      >
        <button
          onClick={() => setIsMobileMenuOpen(false)}
          className="absolute top-8 right-8 p-2"
        >
          <X className="w-8 h-8" />
        </button>

        <div className="space-y-8 pt-20">
          {navLinks.map((link, i) => (
            <motion.a
              key={link.name}
              href={link.href}
              onClick={() => setIsMobileMenuOpen(false)}
              initial={{ opacity: 0, x: 40 }}
              animate={isMobileMenuOpen ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.1 + i * 0.08, duration: 0.4 }}
              className="block text-4xl font-headline italic hover:text-primary transition-colors"
            >
              {link.name}
            </motion.a>
          ))}
        </div>

        <div className="space-y-6">
          <button className="w-full py-5 bg-primary text-white text-[11px] font-bold uppercase tracking-[0.3em] rounded-xl">
            Acceso Alumnos
          </button>
          <div className="text-[10px] uppercase tracking-widest text-stone-500 text-center">
            © 2026 MÉTODO VISAGE PRO
          </div>
        </div>
      </motion.div>
    </>
  );
};

const Hero = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });
  const imageY = useTransform(scrollYProgress, [0, 1], [0, 60]);
  const textY = useTransform(scrollYProgress, [0, 1], [0, -30]);

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-surface-container-lowest grain-overlay"
    >
      <div className="absolute inset-0 z-0 opacity-15 technical-grid"></div>

      {/* Editorial Floating Labels */}
      <div className="absolute top-40 right-12 hidden xl:block z-20">
        <div className="writing-mode-vertical rotate-180 text-[10px] uppercase tracking-[0.8em] text-primary font-bold opacity-30">
          ESTÁNDAR DE LUJO • ESTÁNDAR DE LUJO • ESTÁNDAR DE LUJO
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 grid lg:grid-cols-12 gap-12 items-center relative z-10">
        <motion.div
          style={{ y: textY }}
          className="lg:col-span-7 space-y-10"
        >
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="inline-flex items-center gap-4"
          >
            <div className="w-12 h-px bg-primary"></div>
            <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-primary">
              Edición 2026 • Masterclass Elite
            </span>
          </motion.div>

          <div className="relative">
            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="text-7xl md:text-[120px] font-headline italic leading-[0.85] text-on-surface"
            >
              La Arquitectura <br />
              <span className="text-primary not-italic relative">
                de la Belleza.
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: "100%" }}
                  transition={{ delay: 1, duration: 1 }}
                  className="absolute -bottom-4 left-0 h-1 bg-primary/15 rounded-full"
                />
              </span>
            </motion.h1>
          </div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-xl md:text-2xl text-secondary font-light max-w-2xl leading-relaxed italic"
          >
            "El visagismo no es solo estética; es la ciencia de la identidad
            proyectada en la estructura."
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-8 pt-6"
          >
            <button className="group relative px-12 py-6 bg-on-surface text-white overflow-hidden transition-all duration-500 rounded-xl shadow-[var(--shadow-elevated)] hover:shadow-[var(--shadow-deep)]">
              <div className="absolute inset-0 bg-primary translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]"></div>
              <span className="relative z-10 text-[11px] font-bold uppercase tracking-[0.3em]">
                Comenzar Transformación
              </span>
            </button>
            <button className="px-12 py-6 border border-on-surface/10 text-on-surface text-[11px] font-bold uppercase tracking-[0.3em] rounded-xl hover:bg-on-surface hover:text-white transition-all duration-500 hover:shadow-[var(--shadow-elevated)]">
              Explorar Método
            </button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
            className="flex items-center gap-12 pt-12 border-t border-outline-variant/30"
          >
            {[
              { value: "500+", label: "Alumnos Certificados" },
              { value: "12", label: "Países Alcanzados" },
              { value: "4.9/5", label: "Satisfacción Elite" },
            ].map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.2 + i * 0.15 }}
              >
                <div className="text-3xl font-headline italic text-on-surface">
                  {stat.value}
                </div>
                <div className="text-[9px] uppercase tracking-widest text-secondary mt-1">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        <motion.div style={{ y: imageY }} className="lg:col-span-5 relative">
          <div className="relative aspect-[4/5] overflow-hidden rounded-2xl shadow-[var(--shadow-dramatic)]">
            <motion.img
              initial={{ scale: 1.2, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 2 }}
              src="https://images.unsplash.com/photo-1596704017254-9b121068fb31?q=80&w=1000&auto=format&fit=crop"
              alt="Editorial Beauty"
              className="w-full h-full object-cover grayscale-[0.1]"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-on-surface/30 via-transparent to-transparent"></div>
          </div>

          {/* Floating Technical Element */}
          <motion.div
            initial={{ y: 40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 1.2, duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="absolute -bottom-10 -left-10 w-64 bg-white p-8 rounded-xl shadow-[var(--shadow-deep)] border border-outline-variant/10 hidden xl:block"
          >
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <span className="text-[9px] font-bold uppercase tracking-widest text-primary">
                  Análisis Áureo
                </span>
                <div className="w-2 h-2 rounded-full bg-primary animate-pulse"></div>
              </div>
              <div className="h-px bg-outline-variant/20 w-full"></div>
              <div className="space-y-2">
                <div className="flex justify-between text-[8px] uppercase tracking-tighter text-secondary">
                  <span>Simetría Facial</span>
                  <span>98.4%</span>
                </div>
                <div className="h-1.5 bg-surface-container w-full overflow-hidden rounded-full">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: "98%" }}
                    transition={{ delay: 1.8, duration: 1.2, ease: "easeOut" }}
                    className="h-full bg-primary rounded-full"
                  />
                </div>
              </div>
              <p className="text-[10px] italic text-secondary leading-relaxed">
                "La armonía no se busca, se calcula mediante el mapeo de puntos
                estratégicos."
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

const SocialProof = () => {
  const logos = [
    "VOGUE",
    "ELLE",
    "HARPER'S BAZAAR",
    "MARIE CLAIRE",
    "VANITY FAIR",
  ];
  return (
    <section className="py-12 bg-white border-b border-outline-variant/10">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={staggerContainer}
          className="flex flex-wrap justify-center md:justify-between items-center gap-12 opacity-25 grayscale"
        >
          {logos.map((logo) => (
            <motion.span
              key={logo}
              variants={fadeUp}
              className="text-xs font-bold tracking-[0.5em] hover:opacity-70 transition-opacity duration-300 cursor-default"
            >
              {logo}
            </motion.span>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

const Philosophy = () => {
  return (
    <section
      id="filosofia"
      className="py-32 md:py-48 bg-on-surface text-white overflow-hidden relative grain-overlay"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="max-w-4xl mx-auto text-center space-y-12"
        >
          <motion.span
            variants={fadeUp}
            custom={0}
            className="text-primary uppercase tracking-[0.5em] text-[10px] font-bold block"
          >
            Visagismo Estratégico
          </motion.span>
          <motion.h2
            variants={fadeUp}
            custom={0.1}
            className="text-4xl md:text-7xl font-headline italic leading-tight"
          >
            "La belleza no es azar, <br />
            <span className="text-primary-container not-italic">
              es estrategia pura."
            </span>
          </motion.h2>
          <motion.div
            variants={fadeUp}
            custom={0.2}
            className="w-24 h-px bg-primary mx-auto"
          />
          <motion.p
            variants={fadeUp}
            custom={0.3}
            className="text-lg md:text-2xl font-light text-stone-400 leading-relaxed italic"
          >
            Entiende por qué ciertos rasgos comunican autoridad, mientras otros
            evocan suavidad. El Método Visage Pro te enseña a leer la identidad
            en la estructura ósea.
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
};

const Pillars = () => {
  const pillars = [
    {
      id: "01",
      icon: <DraftingCompass className="w-8 h-8" />,
      title: "Geometría Facial",
      desc: "Mapeo avanzado de proporciones áureas y análisis de volúmenes óseos para un diagnóstico irrefutable.",
      dark: false,
    },
    {
      id: "02",
      icon: <Beaker className="w-8 h-8" />,
      title: "Cosmetología Avanzada",
      desc: "Química cosmética aplicada al biotipo cutáneo. Ciencia real detrás de cada protocolo de rejuvenecimiento.",
      dark: true,
    },
    {
      id: "03",
      icon: <Banknote className="w-8 h-8" />,
      title: "Estrategia de Valor",
      desc: "Cómo posicionar tu marca personal en el segmento de lujo y triplicar el valor de tu consulta técnica.",
      dark: false,
    },
  ];

  return (
    <section id="metodo" className="py-32 md:py-48">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="flex flex-col md:flex-row justify-between items-end mb-24 gap-8"
        >
          <div className="max-w-2xl">
            <motion.h3
              variants={fadeUp}
              custom={0}
              className="text-4xl md:text-6xl font-headline mb-8"
            >
              Pilares del Maestro
            </motion.h3>
            <motion.p
              variants={fadeUp}
              custom={0.1}
              className="text-secondary text-lg"
            >
              Un currículo diseñado para elevar tu práctica profesional al
              estándar de las clínicas de estética más exclusivas del mundo.
            </motion.p>
          </div>
          <motion.span
            variants={fadeUp}
            custom={0.2}
            className="text-primary/8 font-headline italic text-8xl md:text-9xl leading-none"
          >
            01-03
          </motion.span>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={staggerContainer}
          className="grid md:grid-cols-3 gap-8"
        >
          {pillars.map((pillar) => (
            <motion.div
              key={pillar.id}
              variants={fadeInScale}
              className={`group relative p-12 transition-all duration-500 rounded-2xl hover-lift ${
                pillar.dark
                  ? "bg-on-surface text-white shadow-[var(--shadow-dark-card)] hover:shadow-[var(--shadow-dark-elevated)]"
                  : "bg-white border border-outline-variant/15 shadow-[var(--shadow-card)] hover:shadow-[var(--shadow-deep)]"
              }`}
            >
              <div
                className={`absolute -right-4 -top-4 text-8xl font-headline italic opacity-[0.04] ${
                  pillar.dark ? "text-white" : "text-on-surface"
                }`}
              >
                {pillar.id}
              </div>
              <div className="text-primary mb-8 transition-transform duration-300 group-hover:scale-110">
                {pillar.icon}
              </div>
              <h4 className="text-2xl font-headline mb-4 italic">
                {pillar.title}
              </h4>
              <p
                className={`font-light leading-relaxed ${
                  pillar.dark ? "text-stone-400" : "text-secondary"
                }`}
              >
                {pillar.desc}
              </p>
              <div
                className={`mt-8 h-px w-full transition-all duration-500 ${
                  pillar.dark
                    ? "bg-primary/30"
                    : "bg-outline-variant/20 group-hover:bg-primary/40 group-hover:w-3/4"
                }`}
              ></div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

const TargetAudience = () => {
  const audiences = [
    {
      title: "Esteticistas",
      desc: "Que buscan elevar su ticket promedio ofreciendo diagnósticos científicos.",
    },
    {
      title: "Dermatólogos",
      desc: "Interesados en la armonización facial desde una perspectiva de proporciones áureas.",
    },
    {
      title: "Maquilladores",
      desc: "Que desean dominar la estructura ósea para trabajos editoriales y de lujo.",
    },
    {
      title: "Emprendedores",
      desc: "En el sector de la belleza que quieren crear una marca con autoridad técnica.",
    },
  ];

  return (
    <section className="py-32 bg-surface-container-low border-y border-outline-variant/15">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid lg:grid-cols-2 gap-24 items-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            <motion.h3
              variants={fadeUp}
              custom={0}
              className="text-5xl md:text-7xl font-headline italic mb-12 leading-tight"
            >
              Diseñado para la <br />
              <span className="text-primary not-italic">
                Elite del Sector.
              </span>
            </motion.h3>
            <motion.p
              variants={fadeUp}
              custom={0.1}
              className="text-secondary text-lg font-light leading-relaxed mb-12"
            >
              Este no es un curso de belleza convencional. Es una
              especialización técnica para profesionales que entienden que el
              conocimiento es el activo más valioso en el mercado de lujo.
            </motion.p>
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid sm:grid-cols-2 gap-8"
            >
              {audiences.map((item, i) => (
                <motion.div key={i} variants={fadeUp} className="space-y-3">
                  <div className="w-8 h-px bg-primary"></div>
                  <h5 className="text-[11px] font-bold uppercase tracking-widest text-on-surface">
                    {item.title}
                  </h5>
                  <p className="text-[10px] text-secondary leading-relaxed uppercase tracking-tighter">
                    {item.desc}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="relative"
          >
            <div className="aspect-[3/4] overflow-hidden rounded-2xl shadow-[var(--shadow-deep)]">
              <img
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=1000&auto=format&fit=crop"
                alt="Professional Workshop"
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-1000 img-zoom"
                referrerPolicy="no-referrer"
              />
            </div>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="absolute -top-8 -right-8 w-48 h-48 bg-primary p-8 flex items-center justify-center text-center rounded-2xl shadow-[var(--shadow-deep)]"
            >
              <span className="text-white text-[10px] font-bold uppercase tracking-[0.3em] leading-relaxed">
                Conocimiento que Transforma
              </span>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Modules = () => {
  const modules = [
    {
      title: "Fundamentos del Visagismo",
      topics: [
        "Historia y Evolución",
        "Psicología de la Imagen",
        "El Rostro como Identidad",
      ],
    },
    {
      title: "Mapeo Geométrico",
      topics: [
        "Proporción Áurea",
        "Análisis de Tercios",
        "Simetría vs Armonía",
      ],
    },
    {
      title: "Estructura Ósea",
      topics: [
        "Anatomía Facial",
        "Puntos de Tensión",
        "Volúmenes y Sombras",
      ],
    },
    {
      title: "Estrategia de Consulta",
      topics: [
        "Diagnóstico Elite",
        "Comunicación de Valor",
        "Cierre de Ventas High-Ticket",
      ],
    },
  ];

  return (
    <section className="py-32 md:py-48 bg-white">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-24"
        >
          <motion.span
            variants={fadeUp}
            custom={0}
            className="text-primary uppercase tracking-[0.4em] text-[10px] font-bold mb-4 block"
          >
            El Currículo
          </motion.span>
          <motion.h3
            variants={fadeUp}
            custom={0.1}
            className="text-5xl md:text-7xl font-headline italic"
          >
            Ingeniería del Aprendizaje
          </motion.h3>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={staggerContainer}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {modules.map((mod, i) => (
            <motion.div
              key={i}
              variants={fadeInScale}
              className="bg-white p-10 rounded-xl border border-outline-variant/15 shadow-[var(--shadow-subtle)] hover:shadow-[var(--shadow-elevated)] transition-all duration-500 group hover-lift"
            >
              <span className="text-primary/15 font-headline italic text-6xl block mb-8 group-hover:text-primary/30 transition-colors duration-500">
                0{i + 1}
              </span>
              <h4 className="text-xl font-headline italic mb-8 text-on-surface">
                {mod.title}
              </h4>
              <ul className="space-y-4">
                {mod.topics.map((topic, j) => (
                  <li
                    key={j}
                    className="flex items-center gap-3 text-[9px] uppercase tracking-widest text-secondary"
                  >
                    <div className="w-1.5 h-1.5 bg-primary rounded-full shrink-0"></div>
                    {topic}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

const Mentor = () => {
  return (
    <section className="py-32 md:py-48 bg-on-surface text-white overflow-hidden grain-overlay">
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="grid lg:grid-cols-2 gap-24 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="relative"
          >
            <div className="aspect-[4/5] overflow-hidden rounded-2xl border border-white/8 shadow-[var(--shadow-dark-elevated)]">
              <img
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1000&auto=format&fit=crop"
                alt="The Mentor"
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-1000 img-zoom"
                referrerPolicy="no-referrer"
              />
            </div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="absolute -bottom-8 -right-8 bg-white p-10 text-on-surface hidden md:block rounded-xl shadow-[var(--shadow-deep)]"
            >
              <div className="text-4xl font-headline italic">Dr. Marcus V.</div>
              <div className="text-[10px] font-bold uppercase tracking-widest text-primary mt-2">
                Fundador Método Visage
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="space-y-10"
          >
            <motion.span
              variants={fadeUp}
              custom={0}
              className="text-primary uppercase tracking-[0.5em] text-[10px] font-bold block"
            >
              La Mente Maestra
            </motion.span>
            <motion.h3
              variants={fadeUp}
              custom={0.1}
              className="text-5xl md:text-7xl font-headline italic leading-tight"
            >
              "Mi misión es devolverle <br />
              <span className="text-primary-container not-italic">
                el rigor a la belleza."
              </span>
            </motion.h3>
            <motion.p
              variants={fadeUp}
              custom={0.2}
              className="text-stone-400 text-lg font-light leading-relaxed italic"
            >
              Con más de 15 años de experiencia internacional, el Dr. Marcus ha
              desarrollado un sistema que fusiona la medicina estética con el
              diseño arquitectónico facial. Ha formado a miles de profesionales
              en 3 continentes, elevando el estándar de la industria.
            </motion.p>
            <motion.div
              variants={fadeUp}
              custom={0.3}
              className="pt-8 flex items-center gap-8"
            >
              <div className="w-16 h-16 rounded-2xl border border-white/15 flex items-center justify-center shadow-[var(--shadow-dark-card)]">
                <Sparkles className="w-6 h-6 text-primary" />
              </div>
              <div>
                <div className="text-sm font-bold uppercase tracking-widest">
                  Excelencia Comprobada
                </div>
                <div className="text-[10px] text-stone-500 uppercase tracking-widest mt-1">
                  Reconocimiento Internacional
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Transformation = () => {
  return (
    <section
      id="resultados"
      className="py-32 md:py-48 bg-surface-container-low overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 mb-16">
        <motion.h3
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-6xl font-headline text-center italic"
        >
          Resultados de Maestría
        </motion.h3>
      </div>
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.8 }}
        className="max-w-7xl mx-auto px-6 md:px-12"
      >
        <div className="flex flex-col lg:flex-row h-[500px] md:h-[700px] rounded-2xl overflow-hidden shadow-[var(--shadow-dramatic)]">
          <div className="flex-1 relative group overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1524504388940-b1c1722653e1?q=80&w=1000&auto=format&fit=crop"
              alt="Before"
              className="absolute inset-0 w-full h-full object-cover grayscale opacity-60 transition-transform duration-1000 group-hover:scale-105"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-on-background/20"></div>
            <div className="absolute bottom-12 left-12">
              <span className="text-white font-headline italic text-4xl">
                Antes
              </span>
              <p className="text-stone-300 uppercase tracking-[0.2em] text-[10px] mt-2">
                Visión convencional
              </p>
            </div>
          </div>
          <div className="w-px bg-white/20 hidden lg:block"></div>
          <div className="flex-1 relative group overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?q=80&w=1000&auto=format&fit=crop"
              alt="After"
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-on-surface/30 via-transparent to-transparent"></div>
            <div className="absolute bottom-12 left-12">
              <span className="text-white font-headline italic text-4xl">
                Después
              </span>
              <p className="text-primary-container uppercase tracking-[0.2em] text-[10px] mt-2">
                Maestría Visage Pro
              </p>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

const Experiences = () => {
  const items = [
    {
      icon: <Award className="w-6 h-6" />,
      title: "Certificación Oro",
      desc: "Aval internacional como especialista en visagismo técnico.",
    },
    {
      icon: <Group className="w-6 h-6" />,
      title: "Comunidad Privada",
      desc: "Acceso a networking con profesionales de alto nivel.",
    },
    {
      icon: <Sparkles className="w-6 h-6" />,
      title: "Mentoría Mensual",
      desc: "Sesiones en vivo para resolver casos complejos.",
    },
    {
      icon: <BookOpen className="w-6 h-6" />,
      title: "El Manual Visage",
      desc: "Guía física de 200 páginas con todos los wireframes.",
    },
  ];

  return (
    <section className="py-32 md:py-48">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-24"
        >
          <motion.h3
            variants={fadeUp}
            custom={0}
            className="text-4xl md:text-5xl font-headline italic mb-4"
          >
            Experiencias Exclusivas
          </motion.h3>
          <motion.p
            variants={fadeUp}
            custom={0.1}
            className="text-secondary tracking-[0.3em] uppercase text-[10px] font-bold"
          >
            Incluidas en tu formación elite
          </motion.p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={staggerContainer}
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {items.map((item, i) => (
            <motion.div
              key={i}
              variants={fadeInScale}
              className="p-10 bg-white rounded-xl shadow-[var(--shadow-card)] hover:shadow-[var(--shadow-deep)] transition-all duration-500 border-b-2 border-transparent hover:border-primary group hover-lift"
            >
              <div className="text-primary mb-6 transition-transform duration-300 group-hover:scale-110">
                {item.icon}
              </div>
              <h5 className="font-bold text-[11px] uppercase tracking-[0.1em] mb-4">
                {item.title}
              </h5>
              <p className="text-xs text-secondary leading-relaxed font-light">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

const Testimonials = () => {
  const reviews = [
    {
      name: "Carla Mendez",
      role: "Esteticista Senior",
      text: "Nunca vi la cara de mis clientes de esta forma. El retorno de inversión fue inmediato tras la primera consulta.",
    },
    {
      name: "Julian Rossi",
      role: "Dermatólogo",
      text: "La precisión técnica es lo que me faltaba para destacar en el mercado de lujo. Altamente recomendado.",
    },
    {
      name: "Sofia Benetti",
      role: "Maquilladora Editorial",
      text: "Este curso no es solo formación, es una experiencia estética de principio a fin. Vale cada centavo.",
    },
    {
      name: "Elena Varma",
      role: "Cosmetóloga",
      text: "El enfoque científico del visagismo ha elevado mis diagnósticos a otro nivel de profesionalismo.",
    },
  ];

  return (
    <section className="py-32 bg-on-surface overflow-hidden grain-overlay">
      <div className="relative z-10">
        <div className="flex gap-8 animate-marquee whitespace-nowrap py-10">
          {[...reviews, ...reviews].map((review, i) => (
            <div
              key={i}
              className="inline-block w-80 md:w-96 bg-white/[0.04] p-10 border border-white/8 shrink-0 whitespace-normal rounded-2xl shadow-[var(--shadow-dark-card)] hover:bg-white/[0.07] transition-colors duration-500"
            >
              <div className="text-primary mb-6 italic font-headline text-2xl md:text-3xl">
                "Excelente"
              </div>
              <p className="text-stone-400 text-sm font-light leading-relaxed mb-8">
                {review.text}
              </p>
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-xl bg-primary/15 flex items-center justify-center text-primary font-bold text-xs shadow-[var(--shadow-inner)]">
                  {review.name[0]}
                </div>
                <div>
                  <p className="text-white font-bold text-[10px] uppercase tracking-widest">
                    {review.name}
                  </p>
                  <p className="text-primary-container text-[9px] uppercase tracking-widest">
                    {review.role}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const FAQ = () => {
  const faqs = [
    {
      q: "¿Necesito experiencia previa?",
      a: "El método está diseñado tanto para principiantes que buscan una base sólida como para profesionales que desean especializarse en el segmento de lujo.",
    },
    {
      q: "¿El curso es 100% online?",
      a: "Sí, todas las lecciones están grabadas en alta definición, con sesiones de mentoría en vivo mensuales para resolución de casos.",
    },
    {
      q: "¿Recibiré un certificado?",
      a: "Al finalizar todos los módulos y aprobar el examen técnico, recibirás una certificación internacional avalada por el Método Visage Pro.",
    },
    {
      q: "¿Cuánto tiempo tengo acceso?",
      a: "El acceso es vitalicio. Podrás ver las lecciones y sus actualizaciones siempre que lo necesites.",
    },
  ];

  return (
    <section className="py-32 md:py-48 bg-surface-container-low overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid lg:grid-cols-12 gap-16 items-stretch">
          {/* Left Visual Element */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 hidden lg:grid grid-cols-2 bg-white shadow-[var(--shadow-deep)] border border-outline-variant/10 overflow-hidden rounded-2xl"
          >
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=1000&auto=format&fit=crop"
                alt="Visage Analysis"
                className="absolute inset-0 w-full h-full object-cover grayscale"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-primary/8"></div>
            </div>
            <div className="flex flex-col justify-between p-10 relative bg-white">
              <div className="font-headline text-3xl italic text-primary">
                V
              </div>

              <div className="absolute top-1/2 -translate-y-1/2 right-0 pr-4 z-0">
                <div className="writing-mode-vertical text-7xl md:text-8xl font-headline italic uppercase tracking-tighter text-on-surface/[0.04] leading-none select-none">
                  Visagismo
                </div>
              </div>

              <div className="space-y-6 relative z-10">
                <div className="text-[10px] font-bold uppercase tracking-[0.4em] text-on-surface">
                  In Black
                </div>
                <div className="flex items-center gap-4 pt-4 border-t border-outline-variant/15">
                  <div className="w-10 h-10 rounded-xl bg-primary/15 flex items-center justify-center text-primary font-bold text-xs">
                    JV
                  </div>
                  <div>
                    <div className="text-[9px] uppercase tracking-widest font-bold text-on-surface">
                      João Vitor Soares
                    </div>
                    <div className="text-[7px] uppercase tracking-widest text-secondary mt-0.5">
                      @joaovitorclinic
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right FAQ Content */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-80px" }}
              className="space-y-6 mb-16"
            >
              <motion.span
                variants={fadeUp}
                custom={0}
                className="text-primary uppercase tracking-[0.4em] text-[10px] font-bold block"
              >
                Soporte Elite
              </motion.span>
              <motion.h3
                variants={fadeUp}
                custom={0.1}
                className="text-4xl md:text-6xl font-headline italic"
              >
                Preguntas Frecuentes
              </motion.h3>
              <motion.p
                variants={fadeUp}
                custom={0.2}
                className="text-secondary text-sm font-light max-w-xl leading-relaxed"
              >
                Despeja tus dudas antes de dar el paso definitivo hacia tu
                maestría profesional en el arte del visagismo estratégico.
              </motion.p>
            </motion.div>

            <div className="space-y-5">
              {faqs.map((faq, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: 24 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{
                    delay: i * 0.1,
                    duration: 0.5,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                  viewport={{ once: true }}
                  className="p-8 bg-white border border-outline-variant/15 rounded-xl shadow-[var(--shadow-subtle)] hover:shadow-[var(--shadow-elevated)] transition-all duration-500 group"
                >
                  <h5 className="text-sm font-bold uppercase tracking-widest mb-4 flex items-center gap-4 group-hover:text-primary transition-colors duration-300">
                    <span className="text-primary font-headline italic text-xl">
                      Q.
                    </span>{" "}
                    {faq.q}
                  </h5>
                  <p className="text-secondary text-sm font-light leading-relaxed pl-10">
                    {faq.a}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const StickyCTA = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsVisible(window.scrollY > 800);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.div
      initial={{ y: 100 }}
      animate={{ y: isVisible ? 0 : 100 }}
      transition={{ type: "spring", damping: 20, stiffness: 200 }}
      className="fixed bottom-0 left-0 w-full z-[40] p-4 md:hidden"
    >
      <button className="w-full py-5 bg-primary text-white text-[11px] font-bold uppercase tracking-[0.3em] rounded-xl shadow-[var(--shadow-dramatic)]">
        Inscribirme Ahora
      </button>
    </motion.div>
  );
};

const Offer = () => {
  return (
    <section
      id="inscribirse"
      className="py-32 md:py-48 relative overflow-hidden bg-on-surface grain-overlay"
    >
      <div className="absolute inset-0 z-0 opacity-15">
        <img
          src="https://images.unsplash.com/photo-1515377905703-c4788e51af15?q=80&w=1000&auto=format&fit=crop"
          alt="Abstract Background"
          className="w-full h-full object-cover blur-sm"
          referrerPolicy="no-referrer"
        />
      </div>
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="grid lg:grid-cols-2 overflow-hidden rounded-3xl shadow-[var(--shadow-dramatic)] border border-white/8"
        >
          <div className="p-12 md:p-24 bg-on-surface/90 backdrop-blur-xl text-white">
            <motion.span
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-[10px] font-bold uppercase tracking-[0.4em] text-primary mb-8 block"
            >
              Inversión en Excelencia
            </motion.span>
            <h2 className="text-5xl md:text-7xl font-headline italic mb-12">
              Tu Futuro <br />
              <span className="not-italic text-primary-container">
                Comienza Aquí.
              </span>
            </h2>
            <div className="space-y-6 mb-12">
              {[
                "Acceso Vitalicio a la Plataforma",
                "Certificación Internacional Oro",
                "Mentorías Grupales en Vivo",
                "Manual de Wireframes (Digital)",
                "Comunidad de Networking Elite",
              ].map((text, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -16 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + i * 0.08 }}
                  className="flex items-center gap-4"
                >
                  <CheckCircle className="w-5 h-5 text-primary shrink-0" />
                  <span className="text-xs text-stone-300 uppercase tracking-[0.1em] font-light">
                    {text}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>
          <div className="p-12 md:p-24 bg-white flex flex-col justify-center text-center">
            <div className="mb-12">
              <span className="text-secondary line-through text-xl block mb-2">
                1.997€
              </span>
              <div className="flex items-baseline justify-center gap-2">
                <motion.span
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{
                    delay: 0.3,
                    type: "spring",
                    stiffness: 200,
                    damping: 15,
                  }}
                  className="text-7xl md:text-9xl font-headline text-on-surface"
                >
                  997€
                </motion.span>
                <span className="text-[11px] font-bold text-primary uppercase tracking-widest">
                  Pago Único
                </span>
              </div>
              <p className="text-secondary text-sm mt-6 font-light italic">
                O 12 cuotas de 97€ al mes
              </p>
            </div>
            <button className="w-full py-8 bg-primary text-white text-[12px] font-bold uppercase tracking-[0.4em] rounded-xl hover:bg-on-surface transition-all duration-500 shadow-[var(--shadow-deep)] hover:shadow-[var(--shadow-dramatic)]">
              Inscribirme Ahora
            </button>
            <div className="mt-8 flex items-center justify-center gap-4 opacity-40">
              <div className="h-px w-8 bg-on-surface"></div>
              <span className="text-[9px] uppercase tracking-widest font-bold">
                Garantía de 30 días
              </span>
              <div className="h-px w-8 bg-on-surface"></div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const FinalCTA = () => {
  return (
    <section className="py-32 bg-on-surface text-center relative grain-overlay">
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-white font-headline italic text-4xl md:text-6xl mb-12"
        >
          ¿Estás lista para{" "}
          <span className="text-primary not-italic">evolucionar?</span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.15, duration: 0.6 }}
          className="text-stone-400 text-lg font-light mb-12 max-w-xl mx-auto leading-relaxed"
        >
          Únete a la elite de visagistas y transforma tu carrera profesional hoy
          mismo.
        </motion.p>
        <motion.a
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.6 }}
          href="#"
          className="inline-block text-primary-container text-[10px] font-bold uppercase tracking-[0.5em] hover:text-primary transition-colors duration-300 border-b border-primary/30 pb-2"
        >
          Contáctanos vía WhatsApp
        </motion.a>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="bg-stone-950 py-20 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col md:flex-row justify-between items-center gap-12">
        <div className="font-headline text-xl text-white uppercase tracking-widest">
          MÉTODO VISAGE PRO
        </div>
        <div className="flex flex-wrap justify-center gap-8 text-[9px] uppercase tracking-[0.2em] text-stone-500 font-bold">
          <a
            href="#"
            className="hover:text-primary transition-colors duration-300"
          >
            Privacidad
          </a>
          <a
            href="#"
            className="hover:text-primary transition-colors duration-300"
          >
            Términos
          </a>
          <a
            href="#"
            className="hover:text-primary transition-colors duration-300"
          >
            Soporte
          </a>
          <a
            href="#"
            className="hover:text-primary transition-colors duration-300"
          >
            Instagram
          </a>
          <a
            href="#"
            className="hover:text-primary transition-colors duration-300"
          >
            LinkedIn
          </a>
        </div>
        <div className="text-[9px] uppercase tracking-[0.2em] text-stone-600 font-bold">
          © 2026 MÉTODO VISAGE PRO.
        </div>
      </div>
    </footer>
  );
};

export default function LandingPage() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <SocialProof />
      <Philosophy />
      <TargetAudience />
      <Pillars />
      <Modules />
      <Mentor />
      <Transformation />
      <Experiences />
      <Testimonials />
      <FAQ />
      <Offer />
      <FinalCTA />
      <Footer />
      <StickyCTA />
    </div>
  );
}
