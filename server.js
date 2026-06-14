export default function PhotographerPortfolio() {
  const portfolioItems = [
    { title: "Mariage", image: "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?q=80&w=1200&auto=format&fit=crop" },
    { title: "Portrait", image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1200&auto=format&fit=crop" },
    { title: "Événement", image: "https://images.unsplash.com/photo-1505236858219-8359eb29e329?q=80&w=1200&auto=format&fit=crop" },
    { title: "Vidéo Pro", image: "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?q=80&w=1200&auto=format&fit=crop" }
  ];

  const services = [
    "Photographie",
    "Vidéographie",
    "Drone",
    "Montage",
    "Shooting Studio",
    "Création de contenu"
  ];

  return (
    <div className="min-h-screen bg-black text-white font-sans">
      {/* Navbar */}
      <header className="fixed top-0 w-full z-50 bg-black/80 backdrop-blur border-b border-yellow-700/30">
        <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">
          <h1 className="text-2xl font-bold tracking-widest text-yellow-500">LENSART.</h1>
          <nav className="hidden md:flex gap-8 text-sm uppercase">
            <a href="#home" className="hover:text-yellow-500">Accueil</a>
            <a href="#portfolio" className="hover:text-yellow-500">Portfolio</a>
            <a href="#services" className="hover:text-yellow-500">Services</a>
            <a href="#contact" className="hover:text-yellow-500">Contact</a>
          </nav>
          <button className="bg-yellow-500 text-black px-4 py-2 rounded-2xl font-semibold hover:scale-105 transition">
            Réserver
          </button>
        </div>
      </header>

      {/* Hero */}
      <section
        id="home"
        className="h-screen flex items-center bg-cover bg-center"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(0,0,0,.85), rgba(0,0,0,.4)), url('https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?q=80&w=1600&auto=format&fit=crop')"
        }}
      >
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-center">
          <div>
            <p className="uppercase tracking-[0.3em] text-yellow-500 mb-4">Photographe & Vidéaste Professionnel</p>
            <h2 className="text-5xl md:text-7xl font-bold leading-tight mb-6">
              Je capture vos <span className="text-yellow-500">moments</span>, vos histoires.
            </h2>
            <p className="text-lg text-gray-300 mb-8">
              Mariages, événements, branding, clips et contenus premium qui marquent.
            </p>
            <div className="flex gap-4 flex-wrap">
              <button className="bg-yellow-500 text-black px-6 py-3 rounded-2xl font-semibold">Voir Portfolio</button>
              <button className="border border-white px-6 py-3 rounded-2xl">Me contacter</button>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio */}
      <section id="portfolio" className="py-24 px-6 max-w-7xl mx-auto">
        <h3 className="text-4xl font-bold text-center mb-4">Portfolio</h3>
        <div className="w-24 h-1 bg-yellow-500 mx-auto mb-12"></div>
        <div className="grid md:grid-cols-4 gap-6">
          {portfolioItems.map((item, index) => (
            <div key={index} className="group relative overflow-hidden rounded-3xl shadow-2xl">
              <img
                src={item.image}
                alt={item.title}
                className="h-80 w-full object-cover group-hover:scale-110 transition duration-500"
              />
              <div className="absolute inset-0 bg-black/50 flex items-end p-4">
                <h4 className="text-xl font-semibold">{item.title}</h4>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Services */}
      <section id="services" className="py-24 bg-zinc-950 px-6">
        <div className="max-w-7xl mx-auto">
          <h3 className="text-4xl font-bold text-center mb-12">Services</h3>
          <div className="grid md:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <div
                key={index}
                className="border border-yellow-700/30 rounded-3xl p-8 hover:border-yellow-500 hover:-translate-y-2 transition"
              >
                <h4 className="text-2xl font-semibold text-yellow-500 mb-3">{service}</h4>
                <p className="text-gray-400">
                  Une prestation professionnelle conçue pour valoriser votre image et raconter votre histoire.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About */}
      <section className="py-24 px-6 max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        <img
          src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1200&auto=format&fit=crop"
          alt="Photographe"
          className="rounded-3xl shadow-2xl h-[500px] w-full object-cover"
        />
        <div>
          <h3 className="text-4xl font-bold mb-6">À propos</h3>
          <p className="text-gray-300 text-lg leading-relaxed mb-6">
            Passionné par l’image et la narration visuelle, je transforme chaque projet en expérience mémorable grâce à une approche artistique moderne.
          </p>
          <div className="grid grid-cols-2 gap-4 text-lg">
            <div><span className="text-yellow-500 font-bold">8+</span> ans d’expérience</div>
            <div><span className="text-yellow-500 font-bold">250+</span> projets</div>
            <div><span className="text-yellow-500 font-bold">200+</span> clients</div>
            <div><span className="text-yellow-500 font-bold">15+</span> récompenses</div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-24 bg-zinc-950 px-6">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-10">
          <div>
            <h3 className="text-4xl font-bold mb-6">Contactez-moi</h3>
            <p className="text-gray-400 mb-4">Discutons de votre projet photo ou vidéo.</p>
            <p>Email : contact@lensart.com</p>
            <p>Téléphone : +243 XXX XXX XXX</p>
          </div>
          <form className="space-y-4">
            <input className="w-full p-4 rounded-2xl bg-black border border-gray-700" placeholder="Nom" />
            <input className="w-full p-4 rounded-2xl bg-black border border-gray-700" placeholder="Email" />
            <textarea className="w-full p-4 rounded-2xl bg-black border border-gray-700 h-32" placeholder="Votre message"></textarea>
            <button className="w-full bg-yellow-500 text-black py-4 rounded-2xl font-bold">
              Envoyer
            </button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-yellow-700/20 py-6 text-center text-gray-500">
        © 2026 LENSART. Tous droits réservés.
      </footer>
    </div>
  );
}
