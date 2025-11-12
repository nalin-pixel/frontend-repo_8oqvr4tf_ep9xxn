import React from 'react'
import { motion } from 'framer-motion'
import Spline from '@splinetool/react-spline'
import { Camera, Sparkles, Rocket, Palette, Clock3, ShieldCheck, Image as ImageIcon, Trophy, Star, ChevronRight } from 'lucide-react'

function App() {
  return (
    <div className="min-h-screen w-full bg-[#070711] text-white">
      {/* Navbar */}
      <header className="fixed top-0 inset-x-0 z-50 backdrop-blur-md/30">
        <div className="mx-auto max-w-7xl px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="h-9 w-9 rounded-md bg-gradient-to-br from-cyan-400 via-fuchsia-500 to-purple-500 animate-pulse" />
            <span className="text-lg font-semibold tracking-wide">NeonThumbs</span>
          </div>
          <nav className="hidden md:flex items-center gap-8 text-sm text-white/80">
            <a href="#services" className="hover:text-white transition">Services</a>
            <a href="#process" className="hover:text-white transition">Process</a>
            <a href="#gallery" className="hover:text-white transition">Gallery</a>
            <a href="#pricing" className="hover:text-white transition">Pricing</a>
          </nav>
          <a href="#cta" className="group inline-flex items-center gap-2 rounded-full bg-white/10 hover:bg-white/20 px-4 py-2 text-sm transition">
            Get a Quote
            <ChevronRight className="size-4 transition -translate-x-0 group-hover:translate-x-0.5" />
          </a>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative min-h-[100svh] overflow-hidden">
        {/* Spline 3D Scene */}
        <div className="absolute inset-0">
          <Spline scene="https://prod.spline.design/N8g2VNcx8Rycz93J/scene.splinecode" style={{ width: '100%', height: '100%' }} />
        </div>

        {/* Gradient and noise overlays (won't block 3D interaction) */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-[#070711]/20 via-[#070711]/40 to-[#070711]" />
        <div className="pointer-events-none absolute inset-0 [background-image:radial-gradient(60%_60%_at_50%_0%,rgba(11,255,255,0.15)_0%,transparent_60%)]" />

        {/* Hero Content */}
        <div className="relative z-10 pt-28 pb-24">
          <div className="mx-auto max-w-7xl px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/80 backdrop-blur">
              <Sparkles className="size-3.5 text-cyan-300" />
              Cinematic, click-magnet YouTube thumbnails
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.8 }}
              className="mt-6 text-5xl sm:text-6xl lg:text-7xl font-extrabold leading-[1.05] tracking-tight">
              Turn your ideas into
              <span className="ml-3 bg-gradient-to-r from-cyan-400 via-fuchsia-500 to-purple-400 bg-clip-text text-transparent">
                viral thumbnails
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="mt-5 max-w-2xl text-white/70 text-lg">
              Premium 3D compositions, cinematic lighting, and bold typography engineered to boost CTR for creators, brands, and agencies.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="mt-8 flex flex-col sm:flex-row gap-4">
              <a href="#gallery" className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-cyan-400 to-fuchsia-500 px-6 py-3 font-medium text-[#070711] shadow-lg shadow-cyan-500/20 hover:opacity-95 transition">
                View Gallery
              </a>
              <a href="#cta" className="inline-flex items-center justify-center rounded-full border border-white/15 bg-white/5 px-6 py-3 font-medium hover:bg-white/10 transition">
                Get Started
              </a>
            </motion.div>

            {/* Floating Stat Chips */}
            <div className="mt-12 grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-3xl">
              {[
                { icon: <Trophy className="size-4 text-yellow-300" />, label: 'Top creator clients' },
                { icon: <Star className="size-4 text-cyan-300" />, label: 'CTR-focused design' },
                { icon: <Clock3 className="size-4 text-fuchsia-300" />, label: '24-48h delivery' },
                { icon: <ShieldCheck className="size-4 text-emerald-300" />, label: 'Brand-safe workflow' },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-50px' }}
                  transition={{ delay: 0.1 * i, duration: 0.4 }}
                  className="flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-2 text-xs text-white/75">
                  {item.icon}
                  {item.label}
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="relative py-24">
        <div className="absolute inset-0 pointer-events-none [background:radial-gradient(60%_60%_at_50%_20%,rgba(100,0,255,0.15)_0%,transparent_70%)]" />
        <div className="mx-auto max-w-7xl px-6">
          <motion.h2
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-4xl font-bold">What we deliver</motion.h2>
          <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[{
              title: '3D Key Visuals',
              desc: 'Cinema-grade lighting, glossy materials, and dramatic depth for instant scroll-stopping impact.',
              icon: <Camera className="size-5" />,
            }, {
              title: 'Color & Typography',
              desc: 'Bold palettes with iridescent accents and ultra-readable type for any platform.',
              icon: <Palette className="size-5" />,
            }, {
              title: 'Speed & Scale',
              desc: 'Reliable 24–48h turnarounds and batch packages for teams & agencies.',
              icon: <Rocket className="size-5" />,
            }].map((card, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ delay: idx * 0.05 }}
                className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-6">
                <div className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition [background:radial-gradient(80%_80%_at_0%_0%,rgba(0,255,255,0.15),transparent)]" />
                <div className="flex items-center gap-3">
                  <div className="rounded-xl bg-white/10 p-2">{card.icon}</div>
                  <h3 className="text-lg font-semibold">{card.title}</h3>
                </div>
                <p className="mt-3 text-sm text-white/70">{card.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section id="process" className="relative py-24">
        <div className="mx-auto max-w-7xl px-6">
          <motion.h2
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-4xl font-bold">Seamless creative flow</motion.h2>

          <div className="mt-10 grid md:grid-cols-3 gap-6">
            {[
              { title: 'Brief', desc: 'Share your concept, brand assets, and references.' },
              { title: 'Design', desc: 'We build the 3D scene, lighting, and typography systems.' },
              { title: 'Deliver', desc: 'Receive layered exports ready for upload within 24–48h.' },
            ].map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="relative rounded-2xl border border-white/10 bg-white/5 p-6">
                <div className="absolute -top-3 -left-3 h-10 w-10 rounded-xl bg-gradient-to-br from-cyan-400 to-fuchsia-500 flex items-center justify-center text-[#070711] font-bold">{i + 1}</div>
                <h3 className="mt-6 text-lg font-semibold">{step.title}</h3>
                <p className="mt-2 text-sm text-white/70">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section id="gallery" className="relative py-24">
        <div className="absolute inset-0 pointer-events-none [background:radial-gradient(60%_60%_at_50%_80%,rgba(255,0,153,0.1)_0%,transparent_70%)]" />
        <div className="mx-auto max-w-7xl px-6">
          <motion.h2
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-4xl font-bold">Recent work</motion.h2>

          {/* Mock gallery grid using stylish placeholders */}
          <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[...Array(6)].map((_, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-[#0b0f1a] to-[#0a0716]">
                <div className="absolute inset-0 pointer-events-none [background:radial-gradient(120%_80%_at_20%_0%,rgba(0,255,255,0.15),transparent_60%),radial-gradient(80%_120%_at_80%_100%,rgba(255,0,153,0.15),transparent_60%)]" />
                <div className="aspect-[16/9]" />
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition flex items-end p-4 bg-gradient-to-t from-black/60 to-transparent">
                  <div className="flex items-center gap-2 text-xs text-white/80"><ImageIcon className="size-4" /> Thumbnail concept #{i + 1}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="relative py-24">
        <div className="mx-auto max-w-7xl px-6">
          <motion.h2
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-4xl font-bold">Simple, creator-friendly pricing</motion.h2>

          <div className="mt-10 grid md:grid-cols-3 gap-6">
            {[{
              name: 'Starter',
              price: '$59',
              features: ['1 thumbnail', '1 revision', '24–48h delivery'],
              highlight: false,
            }, {
              name: 'Creator',
              price: '$199',
              features: ['4 thumbnails', '4 revisions', 'Priority support'],
              highlight: true,
            }, {
              name: 'Agency',
              price: '$499',
              features: ['12 thumbnails', 'Unlimited revisions', 'Batch workflow'],
              highlight: false,
            }].map((p, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.05 }}
                className={`relative rounded-2xl border ${p.highlight ? 'border-cyan-400/50' : 'border-white/10'} bg-white/5 p-6`}
              >
                {p.highlight && (
                  <div className="absolute -top-3 right-4 rounded-full bg-gradient-to-r from-cyan-400 to-fuchsia-500 px-3 py-1 text-xs font-semibold text-[#070711]">Most Popular</div>
                )}
                <h3 className="text-lg font-semibold">{p.name}</h3>
                <div className="mt-2 text-4xl font-extrabold">{p.price}<span className="text-base text-white/50 font-medium"> / pack</span></div>
                <ul className="mt-4 space-y-2 text-sm text-white/80">
                  {p.features.map((f, i) => (
                    <li key={i} className="flex items-center gap-2">
                      <span className="inline-block h-1.5 w-1.5 rounded-full bg-gradient-to-r from-cyan-400 to-fuchsia-500" />
                      {f}
                    </li>
                  ))}
                </ul>
                <a href="#cta" className={`mt-6 inline-flex w-full items-center justify-center rounded-full px-4 py-2 font-medium transition ${p.highlight ? 'bg-gradient-to-r from-cyan-400 to-fuchsia-500 text-[#070711]' : 'border border-white/15 hover:bg-white/10'}`}>Get started</a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section id="cta" className="relative py-24">
        <div className="mx-auto max-w-5xl px-6">
          <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/5">
            <div className="absolute inset-0 pointer-events-none [background:radial-gradient(100%_100%_at_100%_0%,rgba(0,255,255,0.15),transparent_50%)]" />
            <div className="grid md:grid-cols-2">
              <div className="p-8 md:p-12">
                <h3 className="text-2xl md:text-3xl font-bold">Ready to boost your CTR?</h3>
                <p className="mt-2 text-white/70 text-sm">Tell us about your next video and we’ll send back a bespoke concept within 24 hours.</p>
                <form className="mt-6 space-y-3">
                  <input className="w-full rounded-xl border border-white/10 bg-black/30 px-4 py-3 text-sm placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-cyan-400/40" placeholder="Your name" />
                  <input className="w-full rounded-xl border border-white/10 bg-black/30 px-4 py-3 text-sm placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-cyan-400/40" placeholder="Email or Twitter @" />
                  <textarea rows={4} className="w-full rounded-xl border border-white/10 bg-black/30 px-4 py-3 text-sm placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-cyan-400/40" placeholder="Describe your video, audience, and any references" />
                  <button type="button" className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-cyan-400 to-fuchsia-500 px-6 py-3 font-medium text-[#070711]">
                    Submit brief
                  </button>
                </form>
              </div>
              <div className="relative min-h-[320px] p-8 md:p-12 flex items-center justify-center">
                <div className="absolute inset-0 pointer-events-none [background:radial-gradient(80%_80%_at_20%_50%,rgba(255,0,153,0.12),transparent_60%)]" />
                <div className="relative rounded-2xl border border-white/10 bg-black/30 p-6 w-full max-w-sm">
                  <div className="flex items-center gap-3">
                    <div className="rounded-xl bg-white/10 p-2"><Sparkles className="size-5 text-cyan-300" /></div>
                    <div>
                      <div className="text-sm font-semibold">What you get</div>
                      <div className="text-xs text-white/60">Design kit ready for upload</div>
                    </div>
                  </div>
                  <ul className="mt-4 space-y-2 text-sm text-white/80">
                    <li className="flex items-center gap-2"><span className="h-1.5 w-1.5 rounded-full bg-cyan-400" /> 3840x2160 hi-res thumbnail</li>
                    <li className="flex items-center gap-2"><span className="h-1.5 w-1.5 rounded-full bg-fuchsia-500" /> Source files on request</li>
                    <li className="flex items-center gap-2"><span className="h-1.5 w-1.5 rounded-full bg-purple-500" /> Color variants for A/B tests</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10">
        <div className="mx-auto max-w-7xl px-6 py-10 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-white/60">
          <div className="flex items-center gap-2">
            <div className="h-6 w-6 rounded-md bg-gradient-to-br from-cyan-400 to-fuchsia-500" />
            © {new Date().getFullYear()} NeonThumbs. All rights reserved.
          </div>
          <div className="flex items-center gap-6">
            <a href="#services" className="hover:text-white">Services</a>
            <a href="#gallery" className="hover:text-white">Gallery</a>
            <a href="#pricing" className="hover:text-white">Pricing</a>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
