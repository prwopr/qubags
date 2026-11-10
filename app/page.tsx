'use client';

import { useState } from 'react';

// Gıda Sektörünün Varyantları (Her birinin kendi fotoğrafları ve videosu var, sol yazı sabit kalacak)
const gidaVariants = [
  {
    id: 'bolmeli',
    name: 'Yiyecek & İçecek Bölmeli',
    images: ['/gida-bolmeli-1.jpg', '/gida-bolmeli-2.jpg', '/gida-bolmeli-3.jpg', '/gida-bolmeli-4.jpg'],
    video: '/gida-video-bolmeli.mp4'
  },
  {
    id: 'yiyecek',
    name: 'Sadece Yiyecek',
    images: ['/gida-yiyecek-1.jpg', '/gida-yiyecek-2.jpg', '/gida-yiyecek-3.jpg', '/gida-yiyecek-4.jpg'],
    video: '/gida-video-yiyecek.mp4'
  },
  {
    id: 'icecek',
    name: 'Sadece İçecek',
    images: ['/gida-icecek-1.jpg', '/gida-icecek-2.jpg', '/gida-icecek-3.jpg', '/gida-icecek-4.jpg'],
    video: '/gida-video-icecek.mp4'
  },
  {
    id: 'tatli',
    name: 'Tatlı ve Pasta',
    images: ['/gida-tatli-1.jpg', '/gida-tatli-2.jpg', '/gida-tatli-3.jpg', '/gida-tatli-4.jpg'],
    video: '/gida-video-tatli.mp4'
  },
  {
    id: 'pizza',
    name: 'Pizza',
    images: ['/gida-pizza-1.jpg', '/gida-pizza-2.jpg', '/gida-pizza-3.jpg', '/gida-pizza-4.jpg'],
    video: '/gida-video-pizza.mp4'
  },
  {
    id: 'moduler',
    name: 'Modüler Tabanlıklar',
    images: ['/gida-moduler-1.jpg', '/gida-moduler-2.jpg']
  }
];

// Diğer Sektörler
const otherSectors = [
  {
    id: 'eticaret',
    number: '02 / SEKTÖR',
    title: 'E-Ticaret & Kargo Çözümleri',
    description: 'Kargoda ürün açılması, hırsızlık ve sahte iade risklerini sıfıra indiren kurcalama kanıtlı özel kilit sistemli sevkiyat poşetleri.',
    features: [
      'Özel tek kullanımlık kilitli emniyet pimi mekanizması',
      'QR kod ve barkod entegrasyonuna uygun yüzey',
      'Açıldığını anında belli eden tamper-evident yapı'
    ],
    images: ['/eticaret-1.jpg', '/eticaret-2.jpg', '/eticaret-3.jpg', '/eticaret-4.jpg'],
    video: '/eticaret-video.mp4'
  },
  {
    id: 'medikal',
    number: '03 / SEKTÖR',
    title: 'Sağlık & Medikal Çözümleri',
    description: 'Laboratuvar numuneleri, reçeteli ilaç sevkiyatları ve steril hastane kitleri için üst düzey kilit güvencesi.',
    features: [
      'Steril ve tıbbi standartlara uygun malzeme yapısı',
      'Tek kullanımlık kilitli emniyet pimi ile güvenli transfer',
      'İzlenebilir seri numarası ve barkod entegrasyonu'
    ],
    images: ['/medikal-1.jpg', '/medikal-2.jpg', '/medikal-3.jpg', '/medikal-4.jpg'],
    video: '/medikal-video.mp4'
  },
  {
    id: 'giyim',
    number: '04 / SEKTÖR',
    title: 'Giyim & Tekstil Çözümleri',
    description: 'Lüks e-ticaret markaları ve butikler için şık unboxing (paket açılış) deneyimi sunan özel ambalaj çözümleri.',
    features: [
      'Kumaşı koruyan özel antistatik iç yüzey',
      'Tek kullanımlık kilitli emniyet pimi mekanizması',
      'Kolay iade ve güvenli kilit yapısı'
    ],
    images: ['/giyim-1.jpg', '/giyim-2.jpg', '/giyim-3.jpg', '/giyim-4.jpg'],
    video: '/giyim-video.mp4'
  },
  {
    id: 'evrak',
    number: '05 / SEKTÖR',
    title: 'Değerli Evrak Çözümleri',
    description: 'Noterler, bankalar, hukuk büroları ve resmi kurumlar için gizli sözleşmelerin ve hassas belgelerin güvenle taşınması.',
    features: [
      'Hassas belgeler için özel kilitli emniyet pimi yapısı',
      'QR kod ve seri numarası ile izlenebilir takip',
      'Belge bütünlüğünü koruyan kurcalama kanıtlı sistem'
    ],
    images: ['/evrak-1.jpg', '/evrak-2.jpg', '/evrak-3.jpg', '/evrak-4.jpg'],
    video: '/evrak-video.mp4'
  },
  {
    id: 'kuyumcu',
    number: '06 / SEKTÖR',
    title: 'Değerli Eşya & Kuyumculuk',
    description: 'Altın, mücevher, değerli saatler ve hassas parça taşımacılığında en üst düzey fiziksel güvenlik sağlayan ambalaj çözümü.',
    features: [
      'Değerli eşya ve mücevherat için özel kilit mekanizması',
      'Seri numaralı ve barkodlu takip sistemi',
      '%100 tamper-evident (kurcalama kanıtlı) kilit yapısı'
    ],
    images: ['/kuyumcu-1.jpg', '/kuyumcu-2.jpg', '/kuyumcu-3.jpg', '/kuyumcu-4.jpg'],
    video: '/kuyumcu-video.mp4'
  }
];

export default function Home() {
  const [activeGidaTab, setActiveGidaTab] = useState(0);
  const [gidaImageIndices, setGidaImageIndices] = useState<{ [key: number]: number }>({
    0: 0, 1: 0, 2: 0, 3: 0, 4: 0, 5: 0
  });
  const [gidaMode, setGidaMode] = useState<'photo' | 'video'>('photo');

  const [activeIndices, setActiveIndices] = useState<{ [key: string]: number }>({
    eticaret: 0, medikal: 0, giyim: 0, evrak: 0, kuyumcu: 0
  });
  const [mediaModes, setMediaModes] = useState<{ [key: string]: 'photo' | 'video' }>({
    eticaret: 'photo', medikal: 'photo', giyim: 'photo', evrak: 'photo', kuyumcu: 'photo'
  });

  const currentGida = gidaVariants[activeGidaTab];
  const currentGidaImgIdx = gidaImageIndices[activeGidaTab] ?? 0;

  const handleNext = (id: string, total: number) => {
    setActiveIndices(prev => ({ ...prev, [id]: (prev[id] + 1) % total }));
  };

  const handlePrev = (id: string, total: number) => {
    setActiveIndices(prev => ({ ...prev, [id]: (prev[id] - 1 + total) % total }));
  };

  const handleSelect = (id: string, index: number) => {
    setActiveIndices(prev => ({ ...prev, [id]: index }));
  };

  return (
    <div className="bg-[#f5f5f7] text-[#1d1d1f] antialiased selection:bg-[#0071e3] selection:text-white min-h-screen">
      
      {/* ÜST MENÜ */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-200/60">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <a href="#" className="flex items-center space-x-2.5 group">
            <div className="w-8 h-8 rounded-lg bg-[#1d1d1f] flex items-center justify-center text-white shadow-sm group-hover:scale-105 transition-transform">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2.2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"></path>
              </svg>
            </div>
            <span className="text-xl font-bold tracking-widest text-[#1d1d1f]">QUBAGS</span>
          </a>

          <nav className="hidden md:flex space-x-6 text-sm font-medium text-[#86868b]">
            <a href="#gida" className="hover:text-[#1d1d1f] transition-colors">Gıda</a>
            <a href="#eticaret" className="hover:text-[#1d1d1f] transition-colors">E-Ticaret</a>
            <a href="#medikal" className="hover:text-[#1d1d1f] transition-colors">Medikal</a>
            <a href="#giyim" className="hover:text-[#1d1d1f] transition-colors">Giyim</a>
            <a href="#evrak" className="hover:text-[#1d1d1f] transition-colors">Evrak</a>
            <a href="#kuyumcu" className="hover:text-[#1d1d1f] transition-colors">Kuyumcu</a>
          </nav>

          <a href="#iletisim" className="bg-[#1d1d1f] text-white px-4 py-2 rounded-full text-sm font-medium hover:bg-black transition-all">
            İletişim
          </a>
        </div>
      </header>

      {/* HERO ALANI */}
      <section className="pt-32 pb-20 px-6 text-center max-w-4xl mx-auto">
        <div className="flex justify-center items-center gap-3 mb-4">
          <span className="bg-[#e8e8ed] text-[#1d1d1f] text-xs font-semibold px-3 py-1 rounded-full uppercase tracking-wider">
            Ön Lansman Yakında
          </span>
          <span className="bg-amber-100 text-amber-800 text-xs font-bold px-3 py-1 rounded-full border border-amber-200">
            🔒 Patent Pending
          </span>
        </div>
        <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-[#1d1d1f] mb-6">
          Mükemmel Güvenlik. <br /><span className="text-[#86868b]">Akıllı Ambalaj Devrimi.</span>
        </h1>
        <p className="text-lg md:text-xl text-[#86868b] max-w-2xl mx-auto mb-10 leading-relaxed">
          Kurcalama kanıtlı (tamper-evident) kilit mekanizması ve QR entegrasyonuyla paketleriniz artık %100 güvende. Gelişmelerden haberdar olmak için bizimle iletişime geçin.
        </p>
        <div className="flex justify-center">
          <a href="#gida" className="bg-[#0071e3] text-white px-8 py-3.5 rounded-full font-medium hover:bg-blue-600 transition-all shadow-sm">
            Koleksiyonu İncele
          </a>
        </div>
      </section>

      {/* SEKTÖRLER LİSTESİ */}
      <main className="max-w-6xl mx-auto px-6 space-y-24 pb-24">
        
        {/* 1. GIDA SEKTÖRÜ */}
        <section id="gida" className="bg-white rounded-3xl p-8 md:p-12 shadow-sm border border-gray-200/60">
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-4 mb-8 pb-6 border-b border-gray-100">
            <div>
              <div className="flex items-center space-x-3 mb-2 flex-wrap gap-y-2">
                <span className="bg-[#e8e8ed] text-[#1d1d1f] text-xs font-bold px-3 py-1 rounded-full">01 / SEKTÖR</span>
                <span className="text-xs font-bold text-amber-800 bg-amber-50 px-3 py-1 rounded-full border border-amber-200">🔒 Patent Pending</span>
                <span className="text-xs font-semibold text-amber-600 bg-amber-50 px-3 py-1 rounded-full">Yakında</span>
              </div>
              <h2 className="text-3xl font-bold tracking-tight">Paket Servis & Gıda Çözümleri</h2>
            </div>
            
            <div className="flex flex-wrap gap-1.5 bg-[#f5f5f7] p-1.5 rounded-2xl border border-gray-200">
              {gidaVariants.map((variant, idx) => (
                <button
                  key={variant.id}
                  onClick={() => setActiveGidaTab(idx)}
                  className={`px-3 py-2 rounded-xl text-xs font-semibold transition-all ${activeGidaTab === idx ? 'bg-white text-[#1d1d1f] shadow-sm' : 'text-[#86868b] hover:text-[#1d1d1f]'}`}
                >
                  {variant.name}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div className="space-y-6">
              <p className="text-[#86868b] leading-relaxed">
                Restoran zincirleri ve kurye teslimatları için özel olarak geliştirilmiş sızdırmaz, hijyenik ve tek kullanımlık kilitli emniyet pimi yapısı. Müşterinize ilk dokunan siz olun.
              </p>
              <ul className="space-y-2 text-sm font-medium text-[#1d1d1f]">
                <li className="flex items-center">✓ %100 sızdırmaz ve gıda temas onaylı yapı</li>
                <li className="flex items-center">✓ Tek kullanımlık kilitli emniyet pimi mekanizması</li>
                <li className="flex items-center">✓ Hızlı açma perforasyon çizgisi ve QR entegrasyonu</li>
              </ul>
              <div className="pt-4">
                <a href="#iletisim" className="inline-block bg-[#1d1d1f] text-white px-5 py-2.5 rounded-full text-sm font-medium hover:bg-black transition-all">İletişim</a>
              </div>
            </div>

            <div className="space-y-3">
              {currentGida.id !== 'moduler' && (
                <div className="flex justify-center bg-[#f5f5f7] p-1 rounded-xl border border-gray-200 mb-2">
                  <button 
                    onClick={() => setGidaMode('photo')}
                    className={`flex-1 py-1.5 text-xs font-semibold rounded-lg transition-all ${gidaMode === 'photo' ? 'bg-white text-[#1d1d1f] shadow-sm' : 'text-[#86868b] hover:text-[#1d1d1f]'}`}
                  >
                    📸 Fotoğraf Galerisi
                  </button>
                  <button 
                    onClick={() => setGidaMode('video')}
                    className={`flex-1 py-1.5 text-xs font-semibold rounded-lg transition-all ${gidaMode === 'video' ? 'bg-white text-[#1d1d1f] shadow-sm' : 'text-[#86868b] hover:text-[#1d1d1f]'}`}
                  >
                    🎬 3D Animasyon Videosu
                  </button>
                </div>
              )}

              {gidaMode === 'photo' || currentGida.id === 'moduler' ? (
                <>
                  <div className="bg-[#f5f5f7] rounded-2xl h-64 flex items-center justify-center border border-gray-200 overflow-hidden relative shadow-sm group p-4">
                    <img src={currentGida.images[currentGidaImgIdx]} alt={currentGida.name} className="w-full h-full object-contain transition-all duration-300" />
                    
                    <button onClick={() => {
                      const total = currentGida.images.length;
                      const newIdx = (currentGidaImgIdx - 1 + total) % total;
                      setGidaImageIndices(prev => ({ ...prev, [activeGidaTab]: newIdx }));
                    }} className="absolute left-3 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white text-[#1d1d1f] p-2 rounded-full shadow-md opacity-0 group-hover:opacity-100 transition-opacity focus:outline-none">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7"></path></svg>
                    </button>
                    <button onClick={() => {
                      const total = currentGida.images.length;
                      const newIdx = (currentGidaImgIdx + 1) % total;
                      setGidaImageIndices(prev => ({ ...prev, [activeGidaTab]: newIdx }));
                    }} className="absolute right-3 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white text-[#1d1d1f] p-2 rounded-full shadow-md opacity-0 group-hover:opacity-100 transition-opacity focus:outline-none">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7"></path></svg>
                    </button>
                  </div>

                  <div className={currentGida.images.length === 2 ? "flex justify-center" : "grid grid-cols-3 gap-3"}>
                    {currentGida.images.slice(1).map((img, imgIdx) => {
                      const actualIndex = imgIdx + 1;
                      return (
                        <div key={imgIdx} onClick={() => {
                          setGidaImageIndices(prev => ({ ...prev, [activeGidaTab]: actualIndex }));
                        }} className={`cursor-pointer bg-[#f5f5f7] rounded-xl h-24 ${currentGida.images.length === 2 ? 'w-32' : 'w-full'} flex items-center justify-center border overflow-hidden relative transition-colors p-2 ${currentGidaImgIdx === actualIndex ? 'border-[#0071e3] ring-1 ring-[#0071e3]' : 'border-gray-200 hover:border-gray-400'}`}>
                          <img src={img} className="w-full h-full object-contain" />
                        </div>
                      );
                    })}
                  </div>

                  {currentGida.id === 'moduler' && (
                    <p className="text-center text-sm font-medium text-[#86868b] mt-2">
                      Yüklü alımlarda özel modüler tabanlık seçenekleri
                    </p>
                  )}
                </>
              ) : (
                <div className="bg-[#f5f5f7] rounded-2xl h-64 flex flex-col items-center justify-center border border-gray-200 overflow-hidden relative shadow-sm p-2">
                  <video src={currentGida.video} controls playsInline className="w-full h-full object-contain rounded-xl shadow-inner" />
                </div>
              )}
            </div>
          </div>
        </section>

        {/* 2. DİĞER SEKTÖRLER */}
        {otherSectors.map((sector, index) => {
          const currentIdx = activeIndices[sector.id];
          const isEven = index % 2 === 1;
          const currentMode = mediaModes[sector.id] || 'photo';

          return (
            <section key={sector.id} id={sector.id} className="bg-white rounded-3xl p-8 md:p-12 shadow-sm border border-gray-200/60 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
              
              <div className={`space-y-6 ${isEven ? 'lg:order-2' : ''}`}>
                <div className="flex items-center space-x-3 flex-wrap gap-y-2">
                  <span className="bg-[#e8e8ed] text-[#1d1d1f] text-xs font-bold px-3 py-1 rounded-full">{sector.number}</span>
                  <span className="text-xs font-bold text-amber-800 bg-amber-50 px-3 py-1 rounded-full border border-amber-200">🔒 Patent Pending</span>
                  <span className="text-xs font-semibold text-amber-600 bg-amber-50 px-3 py-1 rounded-full">Yakında</span>
                </div>
                <h2 className="text-3xl font-bold tracking-tight">{sector.title}</h2>
                <p className="text-[#86868b] leading-relaxed">{sector.description}</p>
                <ul className="space-y-2 text-sm font-medium text-[#1d1d1f]">
                  {sector.features.map((feat, fIdx) => (
                    <li key={fIdx} className="flex items-center">✓ {feat}</li>
                  ))}
                </ul>
                <div className="pt-4">
                  <a href="#iletisim" className="inline-block bg-[#1d1d1f] text-white px-5 py-2.5 rounded-full text-sm font-medium hover:bg-black transition-all">İletişim</a>
                </div>
              </div>

              <div className={`space-y-3 ${isEven ? 'lg:order-1' : ''}`}>
                <div className="flex justify-center bg-[#f5f5f7] p-1 rounded-xl border border-gray-200 mb-2">
                  <button 
                    onClick={() => setMediaModes(prev => ({ ...prev, [sector.id]: 'photo' }))}
                    className={`flex-1 py-1.5 text-xs font-semibold rounded-lg transition-all ${currentMode === 'photo' ? 'bg-white text-[#1d1d1f] shadow-sm' : 'text-[#86868b] hover:text-[#1d1d1f]'}`}
                  >
                    📸 Fotoğraf Galerisi
                  </button>
                  <button 
                    onClick={() => setMediaModes(prev => ({ ...prev, [sector.id]: 'video' }))}
                    className={`flex-1 py-1.5 text-xs font-semibold rounded-lg transition-all ${currentMode === 'video' ? 'bg-white text-[#1d1d1f] shadow-sm' : 'text-[#86868b] hover:text-[#1d1d1f]'}`}
                  >
                    🎬 3D Animasyon Videosu
                  </button>
                </div>

                {currentMode === 'photo' ? (
                  <>
                    <div className="bg-[#f5f5f7] rounded-2xl h-64 flex items-center justify-center border border-gray-200 overflow-hidden relative shadow-sm group p-4">
                      <img src={sector.images[currentIdx]} alt={sector.title} className="w-full h-full object-contain transition-all duration-300" />
                      
                      <button onClick={() => handlePrev(sector.id, sector.images.length)} className="absolute left-3 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white text-[#1d1d1f] p-2 rounded-full shadow-md opacity-0 group-hover:opacity-100 transition-opacity focus:outline-none">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7"></path></svg>
                      </button>
                      <button onClick={() => handleNext(sector.id, sector.images.length)} className="absolute right-3 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white text-[#1d1d1f] p-2 rounded-full shadow-md opacity-0 group-hover:opacity-100 transition-opacity focus:outline-none">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7"></path></svg>
                      </button>
                    </div>

                    <div className="grid grid-cols-3 gap-3">
                      {sector.images.slice(1).map((img, imgIdx) => {
                        const actualIndex = imgIdx + 1;
                        return (
                          <div key={imgIdx} onClick={() => handleSelect(sector.id, actualIndex)} className={`cursor-pointer bg-[#f5f5f7] rounded-xl h-24 flex items-center justify-center border overflow-hidden relative transition-colors p-2 ${currentIdx === actualIndex ? 'border-[#0071e3] ring-1 ring-[#0071e3]' : 'border-gray-200 hover:border-gray-400'}`}>
                            <img src={img} className="w-full h-full object-contain" />
                          </div>
                        );
                      })}
                    </div>
                  </>
                ) : (
                  <div className="bg-[#f5f5f7] rounded-2xl h-64 flex flex-col items-center justify-center border border-gray-200 overflow-hidden relative shadow-sm p-2">
                    <video src={sector.video} controls playsInline className="w-full h-full object-contain rounded-xl shadow-inner" />
                  </div>
                )}
              </div>

            </section>
          );
        })}
      </main>

      {/* FOOTER */}
      <footer id="iletisim" className="bg-white border-t border-gray-200 py-16 px-6">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <h2 className="text-2xl font-bold tracking-tight">Qubags Ailesine Katılın</h2>
          <p className="text-[#86868b] text-sm max-w-md mx-auto">
            Erken erişim, toplu sipariş veya kurumsal iş birlikleri için doğrudan bizimle iletişime geçebilirsiniz.
          </p>
          <div className="inline-block bg-[#f5f5f7] px-6 py-3 rounded-2xl border border-gray-200">
            <span className="text-xs text-[#86868b] block uppercase tracking-wider mb-1">Kurumsal İletişim E-Posta</span>
            <a href="mailto:qubags.iletisim@gmail.com" className="text-[#0071e3] font-semibold hover:underline text-lg">qubags.iletisim@gmail.com</a>
          </div>
          <div className="pt-8 border-t border-gray-100 text-xs text-[#86868b] flex flex-col md:flex-row justify-center items-center gap-4">
            <p>&copy; 2026 Qubags. Tüm hakları saklıdır. Patent Pending.</p>
          </div>
        </div>
      </footer>

    </div>
  );
}