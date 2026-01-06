
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="w-full bg-white dark:bg-background-dark border-t border-stone-100 dark:border-stone-800 pt-16 pb-8 px-6 lg:px-10">
      <div className="mx-auto max-w-7xl grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-4">
        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary text-white">
              <span className="material-symbols-outlined text-[18px]">bakery_dining</span>
            </div>
            <span className="text-lg font-bold">Galuh Binangkit</span>
          </div>
          <p className="text-sm text-text-muted dark:text-stone-400 leading-relaxed">
            Menyajikan kehangatan roti bakar terbaik sejak 2010. Dibuat dengan cinta dan bahan berkualitas untuk keluarga Indonesia.
          </p>
          <div className="flex gap-4 mt-2">
            <a href="#" className="h-10 w-10 flex items-center justify-center rounded-full bg-stone-100 text-stone-600 hover:bg-primary hover:text-white transition-colors dark:bg-stone-800 dark:text-stone-400">
              <span className="material-symbols-outlined">public</span>
            </a>
            <a href="#" className="h-10 w-10 flex items-center justify-center rounded-full bg-stone-100 text-stone-600 hover:bg-primary hover:text-white transition-colors dark:bg-stone-800 dark:text-stone-400">
              <span className="material-symbols-outlined">smartphone</span>
            </a>
          </div>
        </div>

        <div className="flex flex-col gap-4">
          <h4 className="text-base font-bold">Tautan Cepat</h4>
          <ul className="flex flex-col gap-3 text-sm text-text-muted dark:text-stone-400">
            <li><a href="#" className="hover:text-primary transition-colors">Beranda</a></li>
            <li><a href="#" className="hover:text-primary transition-colors">Menu Favorit</a></li>
            <li><a href="#" className="hover:text-primary transition-colors">Promo Terbaru</a></li>
            <li><a href="#" className="hover:text-primary transition-colors">Lokasi Outlet</a></li>
          </ul>
        </div>

        <div className="flex flex-col gap-4">
          <h4 className="text-base font-bold">Hubungi Kami</h4>
          <ul className="flex flex-col gap-4 text-sm text-text-muted dark:text-stone-400">
            <li className="flex items-start gap-3">
              <span className="material-symbols-outlined text-primary text-[20px]">location_on</span>
              <span>Jl. Raya Roti Bakar No. 123,<br/>Bandung, Jawa Barat</span>
            </li>
            <li className="flex items-center gap-3">
              <span className="material-symbols-outlined text-primary text-[20px]">call</span>
              <span>+62 812 3456 7890</span>
            </li>
          </ul>
        </div>

        <div className="flex flex-col gap-4">
          <h4 className="text-base font-bold">Jam Operasional</h4>
          <ul className="flex flex-col gap-3 text-sm">
            <li className="flex justify-between">
              <span className="text-text-muted dark:text-stone-400">Senin - Jumat</span>
              <span className="font-bold">16:00 - 23:00</span>
            </li>
            <li className="flex justify-between">
              <span className="text-text-muted dark:text-stone-400">Sabtu - Minggu</span>
              <span className="font-bold">16:00 - 00:00</span>
            </li>
          </ul>
        </div>
      </div>
      <div className="mx-auto max-w-7xl mt-16 pt-8 border-t border-stone-100 dark:border-stone-800 text-center text-sm text-text-muted dark:text-stone-500">
        <p>© 2024 Roti Bakar Galuh Binangkit. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
