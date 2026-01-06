
import React from 'react';
import { MOCK_USER, MOCK_ORDERS } from '../constants';

const Profile: React.FC = () => {
  return (
    <div className="mx-auto max-w-4xl px-4 py-16 flex flex-col gap-10">
      {/* Profile Header */}
      <div className="bg-white dark:bg-stone-800 rounded-3xl shadow-soft p-10 flex flex-col items-center text-center relative overflow-hidden border border-stone-100 dark:border-stone-700">
        <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-primary/10 to-transparent"></div>
        <div className="relative z-10 flex flex-col items-center w-full">
          <div className="relative mb-6 group cursor-pointer">
            <div className="size-36 rounded-full border-4 border-white dark:border-stone-800 shadow-xl overflow-hidden">
              <img src={MOCK_USER.avatar} alt="Avatar" className="w-full h-full object-cover" />
            </div>
            <button className="absolute bottom-2 right-2 bg-white dark:bg-stone-900 rounded-full p-2 shadow-lg border border-stone-100 dark:border-stone-700 hover:text-primary transition-colors">
              <span className="material-symbols-outlined text-lg">edit</span>
            </button>
          </div>
          
          <h1 className="text-3xl font-black mb-2">{MOCK_USER.name}</h1>
          <div className="flex flex-col sm:flex-row items-center gap-4 text-text-muted font-medium mb-6">
            <span className="flex items-center gap-2">
              <span className="material-symbols-outlined text-[18px]">mail</span>
              {MOCK_USER.email}
            </span>
            <span className="hidden sm:inline opacity-30">|</span>
            <span className="flex items-center gap-2">
              <span className="material-symbols-outlined text-[18px]">call</span>
              {MOCK_USER.phone}
            </span>
          </div>
          
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 text-primary text-xs font-black uppercase tracking-widest mb-10">
            <span className="material-symbols-outlined text-[18px]">verified</span>
            Member Setia
          </div>

          <div className="flex flex-col sm:flex-row w-full max-w-[500px] gap-4">
            <button className="flex-1 h-14 flex items-center justify-center gap-2 rounded-xl bg-stone-100 dark:bg-stone-900 font-bold hover:bg-stone-200 dark:hover:bg-stone-700 transition-all">
              <span className="material-symbols-outlined">settings</span>
              Edit Profil
            </button>
            <button className="flex-1 h-14 flex items-center justify-center gap-2 rounded-xl bg-primary text-white font-bold shadow-lg shadow-primary/25 hover:bg-primary-dark transition-all">
              <span className="material-symbols-outlined">logout</span>
              Keluar
            </button>
          </div>
        </div>
      </div>

      {/* Order History */}
      <div className="space-y-6">
        <div className="flex items-center justify-between px-2">
          <h3 className="text-2xl font-black">Riwayat Pesanan Terakhir</h3>
          <button className="text-primary font-bold hover:underline">Lihat Semua</button>
        </div>
        
        <div className="grid gap-4">
          {MOCK_ORDERS.map((order, idx) => (
            <div key={idx} className="bg-white dark:bg-stone-800 p-6 rounded-2xl shadow-soft border border-stone-100 dark:border-stone-700 flex flex-col sm:flex-row items-center justify-between gap-6 hover:scale-[1.01] transition-transform cursor-pointer">
              <div className="flex items-center gap-6 w-full sm:w-auto">
                <div className="size-20 shrink-0 bg-stone-100 dark:bg-stone-900 rounded-xl flex items-center justify-center">
                  <span className="material-symbols-outlined text-primary text-3xl">bakery_dining</span>
                </div>
                <div className="flex flex-col">
                  <p className="text-lg font-bold">Pesanan #{order.id}</p>
                  <div className="flex items-center gap-3 mt-1.5">
                    <span className="px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-wider bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400">
                      {order.status}
                    </span>
                    <p className="text-text-muted text-sm font-medium">{order.date} • Rp {order.total.toLocaleString('id-ID')}</p>
                  </div>
                </div>
              </div>
              <button className="w-full sm:w-auto px-8 py-3 rounded-xl border-2 border-primary text-primary font-bold hover:bg-primary hover:text-white transition-all">
                Pesan Lagi
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Profile;
