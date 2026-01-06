
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Login: React.FC = () => {
  const navigate = useNavigate();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    navigate('/');
  };

  return (
    <div className="min-h-screen w-full flex items-center justify-center p-4 md:p-8 bg-background-light dark:bg-background-dark">
      <div className="w-full max-w-6xl bg-white dark:bg-stone-800 rounded-3xl shadow-2xl overflow-hidden flex flex-col lg:flex-row min-h-[700px]">
        {/* Left Side */}
        <div className="hidden lg:flex w-1/2 relative bg-primary/5 p-12 overflow-hidden">
          <div className="absolute inset-0 z-0">
            <img 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDsLeqIfu1RwpJwv7M6n9o5V4-2tjPlrEghWvCZsU7hq3uEbS_YOnIpJ7kbGhfvsBbzQXAPYpV_dGNTFHOlW-sJN2FIivnJ2c15ZV0tI9NWX3mzhthzoxordfbSyB-BAZ_rXpBf8TtWbvCTwpskHtM-NMVTCy0suT-L5Ek1I1a5bKTK9DIYVXIo_W7LAJ31s0av4i8KOm7OUpTWKGS00uUqjf6OUemkI0Q2bP0_4Ie8BFbmO71hQxyeaPtMsKzJcWPJjR4xsrQ5uac"
              className="w-full h-full object-cover"
              alt="Toast"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent"></div>
          </div>
          <div className="relative z-10 mt-auto text-white">
            <h2 className="text-4xl font-extrabold leading-tight mb-4">Rasakan Kehangatan di Setiap Gigitan</h2>
            <p className="text-white/80 text-lg font-medium max-w-md leading-relaxed">
              Roti bakar premium dengan topping melimpah. Teman setia untuk momen santai Anda.
            </p>
            <div className="mt-10 flex items-center gap-5 backdrop-blur-xl bg-white/10 p-5 rounded-2xl border border-white/20 w-fit">
              <div className="flex -space-x-3">
                {[1, 2, 3].map(i => (
                  <div key={i} className="size-10 rounded-full border-2 border-primary bg-stone-200 overflow-hidden">
                    <img src={`https://picsum.photos/100/100?random=${i+10}`} alt="u" />
                  </div>
                ))}
              </div>
              <div>
                <div className="flex text-yellow-400">
                  {[1, 2, 3, 4, 5].map(i => <span key={i} className="material-symbols-outlined text-sm fill-current">star</span>)}
                </div>
                <p className="text-xs font-bold mt-1">Disukai oleh 10k+ Pelanggan</p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side */}
        <div className="w-full lg:w-1/2 p-8 md:p-16 lg:p-20 flex flex-col justify-center">
          <div className="max-w-[420px] mx-auto w-full">
            <div className="mb-12">
              <h1 className="text-4xl font-black mb-4 tracking-tight">Selamat Datang Kembali! 👋</h1>
              <p className="text-text-muted text-lg">Silakan masuk untuk menikmati kehangatan roti bakar kami.</p>
            </div>

            <form onSubmit={handleLogin} className="space-y-6">
              <div className="space-y-2">
                <label className="text-sm font-bold tracking-wide uppercase text-text-muted" htmlFor="email">Email</label>
                <div className="relative group">
                  <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-text-muted group-focus-within:text-primary transition-colors">
                    <span className="material-symbols-outlined">person</span>
                  </div>
                  <input 
                    className="w-full h-14 pl-12 pr-4 rounded-xl border border-stone-200 bg-stone-50 text-text-main focus:ring-4 focus:ring-primary/10 focus:border-primary transition-all duration-200" 
                    id="email" 
                    placeholder="Masukkan email anda" 
                    type="email" 
                    required 
                  />
                </div>
              </div>

              <div className="space-y-2">
                <div className="flex justify-between items-center">
                  <label className="text-sm font-bold tracking-wide uppercase text-text-muted" htmlFor="password">Password</label>
                  <button className="text-sm font-bold text-primary hover:text-primary-dark">Lupa Password?</button>
                </div>
                <div className="relative group">
                  <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-text-muted group-focus-within:text-primary transition-colors">
                    <span className="material-symbols-outlined">lock</span>
                  </div>
                  <input 
                    className="w-full h-14 pl-12 pr-12 rounded-xl border border-stone-200 bg-stone-50 text-text-main focus:ring-4 focus:ring-primary/10 focus:border-primary transition-all duration-200" 
                    id="password" 
                    placeholder="Masukkan password anda" 
                    type="password" 
                    required 
                  />
                  <button type="button" className="absolute inset-y-0 right-0 pr-4 flex items-center text-text-muted hover:text-text-main">
                    <span className="material-symbols-outlined">visibility_off</span>
                  </button>
                </div>
              </div>

              <button className="w-full h-14 bg-primary hover:bg-primary-dark text-white font-black text-lg rounded-xl shadow-xl shadow-primary/25 transition-all transform hover:-translate-y-1 active:translate-y-0 flex items-center justify-center gap-3">
                <span>Masuk Sekarang</span>
                <span className="material-symbols-outlined">login</span>
              </button>
            </form>

            <div className="relative my-10">
              <div className="absolute inset-0 flex items-center"><div className="w-full border-t border-stone-100 dark:border-stone-700"></div></div>
              <div className="relative flex justify-center"><span className="px-4 bg-white dark:bg-stone-800 text-sm font-bold text-text-muted uppercase tracking-widest">Atau masuk dengan</span></div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <button className="flex items-center justify-center gap-3 h-14 border-2 border-stone-100 dark:border-stone-700 rounded-xl hover:bg-stone-50 dark:hover:bg-stone-700 transition-all font-bold">
                <img src="https://www.svgrepo.com/show/475656/google-color.svg" className="h-6 w-6" alt="google" />
                Google
              </button>
              <button className="flex items-center justify-center gap-3 h-14 border-2 border-stone-100 dark:border-stone-700 rounded-xl hover:bg-stone-50 dark:hover:bg-stone-700 transition-all font-bold">
                <img src="https://www.svgrepo.com/show/448224/facebook.svg" className="h-6 w-6" alt="fb" />
                Facebook
              </button>
            </div>

            <p className="mt-12 text-center text-text-muted font-medium">
              Belum punya akun? <Link to="/" className="text-primary font-bold hover:underline">Daftar Sekarang</Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
