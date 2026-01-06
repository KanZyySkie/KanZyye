
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { SIDE_ITEMS } from '../constants';

const Cart: React.FC = () => {
  const [items, setItems] = useState([
    { id: '1', name: 'Roti Bakar Coklat Keju', price: 25000, quantity: 1, image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDGVlNysqlqiIU0vjsCZRS7b5ewow4LPRTGSgY11Gil_Dbng4u6JNr6ME0mUMoKKo6zyuPFZe2BZQSodDr6esYmjTamBSfjOzka7_MlQ6r4Pk03WfO2_ALWLsL4f60fZLkiLg5CB1Ak5M2jnEVKJnONP8ohBZQiPQpe6KFQ6l11mHXSRHNhv67wYko68PKaTBCo8ycCUvDrjIlLQOxHHLCTOeW1GmKARqZyyiznKD_j11wZ14xAWvULEdnaowiBCcGOfHoL33M9GhY', options: 'Coklat Premium, Keju Cheddar' },
    { id: '2', name: 'Roti Bakar Kacang Susu', price: 22000, quantity: 2, image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAk4gm3K7UMIoHw2WVC5fTV6SBwK43U8DqUP1CWQF8SLSREKHFECtOWEE0UOxd5M4QPFTs2UIpM4iV5X9v7aYMwCazNwirmwFCbiXTHszMmuqULAhUVSDa-4TNtfAd2YRrcszvPcHvmH0DGzjVHhN7BZsPUuqNemHLt-N2XCkvK0Aw6_1Meyk4v5ai6iq6ksD_nVZocGYvgcEj8FNAIn4WbOvzPvYv5lO4fyr5er_4x8isbRYwnfQjJ7BkCPpRLuDLAIB8L68OOakQ', options: 'Selai Kacang, Susu Kental Manis' },
  ]);

  const subtotal = items.reduce((acc, item) => acc + (item.price * item.quantity), 0);
  const tax = subtotal * 0.1;
  const total = subtotal + tax;

  const updateQuantity = (id: string, delta: number) => {
    setItems(prev => prev.map(item => 
      item.id === id ? { ...item, quantity: Math.max(1, item.quantity + delta) } : item
    ));
  };

  const removeItem = (id: string) => {
    setItems(prev => prev.filter(item => item.id !== id));
  };

  return (
    <div className="mx-auto max-w-7xl px-4 md:px-10 py-12">
      <div className="mb-10 flex flex-col gap-4">
        <div className="flex items-center gap-2 text-sm font-medium text-text-muted">
          <Link to="/" className="hover:text-primary transition-colors">Beranda</Link>
          <span className="material-symbols-outlined text-[18px]">chevron_right</span>
          <span className="text-primary font-bold">Keranjang</span>
        </div>
        <h1 className="text-4xl font-black tracking-tight">Keranjang Belanja</h1>
        <p className="text-text-muted">Selesaikan pesanan Anda untuk menikmati kelezatan Roti Bakar kami.</p>
      </div>

      <div className="flex flex-col lg:flex-row gap-12 items-start">
        <div className="flex-1 w-full space-y-6">
          {items.map(item => (
            <div key={item.id} className="group flex flex-col sm:flex-row gap-6 bg-white dark:bg-stone-800 p-5 rounded-2xl shadow-soft border border-stone-100 dark:border-stone-700 transition-all hover:border-primary/20">
              <div className="h-32 w-full sm:w-32 shrink-0 overflow-hidden rounded-xl bg-stone-100">
                <img src={item.image} alt={item.name} className="h-full w-full object-cover" />
              </div>
              <div className="flex flex-1 flex-col justify-between py-1">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="text-xl font-bold">{item.name}</h3>
                    <p className="text-sm text-text-muted font-medium mt-1">Topping: {item.options}</p>
                  </div>
                  <button 
                    onClick={() => removeItem(item.id)}
                    className="h-10 w-10 flex items-center justify-center rounded-full text-text-muted hover:bg-red-50 hover:text-red-500 transition-all"
                  >
                    <span className="material-symbols-outlined">delete</span>
                  </button>
                </div>
                <div className="mt-6 flex items-center justify-between">
                  <span className="text-xl font-bold text-primary">Rp {item.price.toLocaleString('id-ID')}</span>
                  <div className="flex items-center gap-4 bg-stone-50 dark:bg-stone-900 rounded-full p-1.5 border border-stone-100 dark:border-stone-800">
                    <button 
                      onClick={() => updateQuantity(item.id, -1)}
                      className="h-8 w-8 flex items-center justify-center rounded-full bg-white dark:bg-stone-800 shadow-sm transition-colors hover:text-primary"
                    >
                      <span className="material-symbols-outlined text-sm">remove</span>
                    </button>
                    <span className="w-6 text-center font-bold text-sm">{item.quantity}</span>
                    <button 
                      onClick={() => updateQuantity(item.id, 1)}
                      className="h-8 w-8 flex items-center justify-center rounded-full bg-primary text-white shadow-sm hover:bg-primary-dark transition-colors"
                    >
                      <span className="material-symbols-outlined text-sm">add</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}

          {/* Recommendations */}
          <div className="mt-12">
            <h3 className="text-xl font-bold mb-6">Mungkin Anda Suka</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
              {SIDE_ITEMS.map(item => (
                <div key={item.id} className="bg-white dark:bg-stone-800 p-4 rounded-xl border border-stone-100 dark:border-stone-700 flex flex-col gap-3 shadow-soft">
                  <div className="aspect-[4/3] w-full overflow-hidden rounded-lg bg-stone-50">
                    <img src={item.image} alt={item.name} className="h-full w-full object-cover" />
                  </div>
                  <div>
                    <p className="font-bold text-sm line-clamp-1">{item.name}</p>
                    <p className="text-xs text-text-muted mt-1">Rp {item.price.toLocaleString('id-ID')}</p>
                    <button className="mt-3 w-full py-2 rounded-lg border-2 border-primary text-primary text-xs font-bold transition-all hover:bg-primary hover:text-white">
                      Tambah
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Summary */}
        <div className="w-full lg:w-[400px] shrink-0 sticky top-28">
          <div className="bg-white dark:bg-stone-800 p-8 rounded-2xl shadow-xl border border-stone-100 dark:border-stone-700 flex flex-col gap-8">
            <h3 className="text-2xl font-bold">Ringkasan Pesanan</h3>
            
            <div className="space-y-4">
              <label className="text-xs font-bold text-text-muted uppercase tracking-widest">Kode Promo</label>
              <div className="flex gap-2">
                <div className="relative flex-1">
                  <span className="absolute left-3 top-1/2 -translate-y-1/2 text-text-muted material-symbols-outlined text-[20px]">local_offer</span>
                  <input 
                    className="w-full rounded-xl border border-stone-200 bg-stone-50 dark:bg-stone-900 dark:border-stone-700 py-3 pl-11 pr-4 text-sm focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all" 
                    placeholder="Masukkan kode"
                  />
                </div>
                <button className="bg-stone-900 dark:bg-stone-700 text-white px-6 rounded-xl text-sm font-bold transition-all hover:bg-black">
                  Gunakan
                </button>
              </div>
            </div>

            <div className="h-px bg-stone-100 dark:bg-stone-700"></div>

            <div className="space-y-4">
              <div className="flex justify-between text-sm">
                <span className="text-text-muted">Subtotal ({items.reduce((a, b) => a + b.quantity, 0)} item)</span>
                <span className="font-semibold">Rp {subtotal.toLocaleString('id-ID')}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-text-muted">Pajak (10%)</span>
                <span className="font-semibold">Rp {tax.toLocaleString('id-ID')}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-green-600 font-bold">Diskon</span>
                <span className="text-green-600 font-bold">- Rp 0</span>
              </div>
            </div>

            <div className="h-px bg-stone-100 dark:bg-stone-700"></div>

            <div className="flex justify-between items-center">
              <span className="text-lg font-bold">Total Pembayaran</span>
              <span className="text-3xl font-black text-primary">Rp {total.toLocaleString('id-ID')}</span>
            </div>

            <Link to="/checkout" className="flex w-full items-center justify-center gap-2 rounded-xl bg-primary py-5 text-lg font-bold text-white shadow-xl shadow-primary/20 transition-all hover:bg-primary-dark hover:scale-[1.02] active:scale-95 group">
              <span>Lanjut ke Pembayaran</span>
              <span className="material-symbols-outlined transition-transform group-hover:translate-x-1">arrow_forward</span>
            </Link>
            
            <p className="text-center text-xs text-text-muted font-medium">
              Dengan melanjutkan, Anda menyetujui <a href="#" className="underline hover:text-primary">Syarat & Ketentuan</a> kami.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
