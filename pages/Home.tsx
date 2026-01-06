
import React from 'react';
import { Link } from 'react-router-dom';
import { MENU_ITEMS } from '../constants';

const Home: React.FC = () => {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative overflow-hidden py-12 md:py-24">
        <div className="absolute -left-20 top-20 h-64 w-64 rounded-full bg-primary/5 blur-3xl"></div>
        <div className="absolute right-0 top-40 h-96 w-96 rounded-full bg-orange-200/20 blur-3xl dark:bg-orange-900/10"></div>
        
        <div className="mx-auto max-w-7xl px-6 flex flex-col lg:flex-row items-center gap-16">
          <div className="flex-1 flex flex-col gap-8 text-center lg:text-left z-10">
            <div className="inline-flex w-fit items-center gap-2 rounded-full border border-orange-100 bg-orange-50 px-4 py-1.5 text-xs font-bold text-primary dark:border-primary/20 dark:bg-primary/10 mx-auto lg:mx-0">
              <span className="material-symbols-outlined text-[16px]">local_fire_department</span>
              <span>Fresh from the Oven</span>
            </div>
            <h1 className="text-4xl font-extrabold leading-tight tracking-tight text-text-main dark:text-white md:text-5xl lg:text-7xl">
              Nikmati Kehangatan <br/>
              <span className="text-primary">Roti Bakar</span> Legendaris
            </h1>
            <p className="mx-auto max-w-lg text-lg text-text-muted dark:text-stone-400 lg:mx-0">
              Renyah di luar, lembut di dalam. Kami menghadirkan cita rasa otentik dengan berbagai pilihan topping premium untuk menemani momen santai Anda.
            </p>
            <div className="flex flex-col gap-4 sm:flex-row sm:justify-center lg:justify-start">
              <Link to="/cart" className="group flex h-14 items-center justify-center gap-2 rounded-xl bg-primary px-8 text-lg font-bold text-white shadow-xl shadow-primary/25 transition-all hover:bg-primary-dark hover:scale-[1.02] active:scale-95">
                Pesan Sekarang
                <span className="material-symbols-outlined transition-transform group-hover:translate-x-1">arrow_forward</span>
              </Link>
              <button className="flex h-14 items-center justify-center rounded-xl bg-white px-8 text-lg font-bold text-text-main shadow-sm ring-1 ring-stone-200 transition-all hover:bg-stone-50 hover:ring-stone-300 dark:bg-stone-800 dark:text-white dark:ring-stone-700">
                Lihat Menu
              </button>
            </div>
            
            <div className="mt-4 flex items-center justify-center gap-6 lg:justify-start">
              <div className="flex -space-x-3">
                {[1, 2, 3].map((i) => (
                  <div key={i} className="h-10 w-10 rounded-full border-2 border-white bg-stone-200 dark:border-stone-900 overflow-hidden">
                    <img src={`https://picsum.photos/100/100?random=${i}`} alt="user" className="w-full h-full object-cover" />
                  </div>
                ))}
                <div className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-white bg-stone-100 text-xs font-bold text-text-main dark:border-stone-900 dark:bg-stone-800 dark:text-white">
                  +1k
                </div>
              </div>
              <div className="flex flex-col text-left">
                <div className="flex text-yellow-500">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <span key={i} className="material-symbols-outlined text-[18px] fill-current">star</span>
                  ))}
                </div>
                <span className="text-xs font-medium text-text-muted">Pelanggan Puas</span>
              </div>
            </div>
          </div>

          <div className="flex-1 relative">
            <div className="aspect-square w-full max-w-[500px] lg:max-w-none relative">
              <div className="absolute inset-0 translate-y-6 scale-95 rounded-[3rem] bg-orange-100 dark:bg-orange-900/20"></div>
              <div className="relative h-full w-full overflow-hidden rounded-[2.5rem] shadow-2xl group cursor-pointer">
                <img 
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuA5961kO1m4UZ4kBjARWxU7YDu5KfowzrB2fdaduyAd8Yz9YX_Mcx71kutSWyzY9B99e4lnUL3OQLNTWeGSi3Jm0O-A7MvbPbl5z_wD1b1fWzbsxsKFW38G3FOs3-9IdwOfAgTQwxqfGmw3NEivAfs_cj_D6wWBH8KtM0uuXnxjF_mGlirWoJKv5SHaDZLduqyHh4txXyfLkDlnd3GR34B9LdRGBWVTDV5kTKUQZCcUzhFDGePHU5ILdfvw44d7_iUKIWJtI419LCw" 
                  alt="Roti Bakar Hero" 
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute bottom-6 left-6 right-6 flex items-center gap-4 rounded-2xl bg-white/90 p-4 shadow-lg backdrop-blur-sm dark:bg-stone-800/90 sm:w-auto sm:min-w-[240px]">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <span className="material-symbols-outlined">timer</span>
                  </div>
                  <div>
                    <p className="text-sm font-bold">Siap dalam 5 Menit</p>
                    <p className="text-xs text-text-muted">Layanan Cepat & Hangat</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 bg-white dark:bg-stone-900/30">
        <div className="mx-auto max-w-7xl px-6 grid grid-cols-1 gap-8 md:grid-cols-3">
          {[
            { icon: 'bakery_dining', title: 'Bahan Premium', desc: 'Roti gandum pilihan dan selai impor berkualitas tinggi.', color: 'bg-orange-100 text-primary' },
            { icon: 'favorite', title: 'Resep Keluarga', desc: 'Cita rasa otentik yang terjaga sejak tahun 2010.', color: 'bg-red-100 text-red-600' },
            { icon: 'savings', title: 'Harga Bersahabat', desc: 'Kenikmatan mewah dengan harga yang ramah di kantong.', color: 'bg-green-100 text-green-600' },
          ].map((f, i) => (
            <div key={i} className="flex flex-col items-center text-center p-8 rounded-2xl bg-background-light dark:bg-stone-800 border border-stone-100 dark:border-stone-700 hover:scale-[1.03] transition-transform">
              <div className={`mb-6 flex h-16 w-16 items-center justify-center rounded-full ${f.color}`}>
                <span className="material-symbols-outlined text-[32px]">{f.icon}</span>
              </div>
              <h3 className="mb-2 text-xl font-bold">{f.title}</h3>
              <p className="text-sm text-text-muted dark:text-stone-400">{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Popular Menu */}
      <section className="py-24 bg-background-light dark:bg-background-dark">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-16 flex flex-col items-center text-center">
            <span className="mb-2 text-sm font-bold uppercase tracking-[0.2em] text-primary">Menu Spesial</span>
            <h2 className="text-3xl font-extrabold sm:text-4xl lg:text-5xl">Varian Rasa Favorit</h2>
            <div className="mt-6 h-1 w-20 rounded-full bg-primary"></div>
          </div>
          
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {MENU_ITEMS.map((item) => (
              <div key={item.id} className="group relative flex flex-col rounded-2xl bg-white p-4 shadow-xl shadow-stone-200/50 transition-all hover:-translate-y-2 dark:bg-stone-800 dark:shadow-none border border-stone-100 dark:border-stone-700">
                <div className="relative mb-4 aspect-[4/3] w-full overflow-hidden rounded-xl bg-stone-100">
                  {item.tag && (
                    <div className="absolute right-3 top-3 z-10 rounded-full bg-white/90 px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-primary backdrop-blur-sm shadow-sm">
                      {item.tag}
                    </div>
                  )}
                  <img src={item.image} alt={item.name} className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110" />
                </div>
                <div className="flex flex-1 flex-col">
                  <div className="mb-2 flex items-center justify-between">
                    <h3 className="text-lg font-bold group-hover:text-primary transition-colors">{item.name}</h3>
                    <div className="h-3 w-3 rounded-full" style={{ backgroundColor: item.accentColor }}></div>
                  </div>
                  <p className="mb-4 text-sm text-text-muted dark:text-stone-400 line-clamp-2">{item.description}</p>
                  <div className="mt-auto flex items-center justify-between pt-4 border-t border-dashed border-stone-100 dark:border-stone-700">
                    <span className="text-lg font-bold text-primary">Rp {item.price.toLocaleString('id-ID')}</span>
                    <button className="flex h-10 w-10 items-center justify-center rounded-full bg-stone-50 text-text-main transition-all hover:bg-primary hover:text-white dark:bg-stone-700 dark:text-white">
                      <span className="material-symbols-outlined text-[20px]">add</span>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative overflow-hidden bg-primary px-6 py-24 text-center">
        <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/food.png')]"></div>
        <div className="relative z-10 mx-auto max-w-4xl flex flex-col items-center">
          <h2 className="mb-4 text-4xl font-extrabold text-white md:text-5xl">Lapar? Pesan Sekarang Juga!</h2>
          <p className="mb-10 max-w-lg text-orange-100 text-lg font-medium">
            Dapatkan promo spesial gratis ongkir untuk pemesanan pertama melalui website kami.
          </p>
          <div className="flex w-full max-w-md flex-col gap-3 sm:flex-row">
            <input 
              className="h-14 w-full flex-1 rounded-xl border-none bg-white px-6 text-text-main focus:ring-4 focus:ring-white/20" 
              placeholder="Masukkan email Anda" 
              type="email"
            />
            <button className="h-14 w-full rounded-xl bg-stone-900 px-8 font-bold text-white transition-all hover:bg-black sm:w-auto">
              Dapat Promo
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
