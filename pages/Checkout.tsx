
import React from 'react';
import { Link } from 'react-router-dom';
import { MOCK_USER } from '../constants';

const Checkout: React.FC = () => {
  return (
    <div className="mx-auto max-w-7xl px-4 md:px-10 py-12">
      <div className="mb-10 flex flex-col gap-4">
        <h1 className="text-4xl font-black tracking-tight">Selesaikan Pembayaran</h1>
        <p className="text-text-muted">Pastikan pesanan anda benar sebelum melanjutkan pembayaran.</p>
      </div>

      <div className="flex flex-col lg:flex-row gap-12">
        <div className="flex-1 space-y-8">
          {/* Address */}
          <section className="rounded-2xl bg-white dark:bg-stone-800 p-8 shadow-soft border border-stone-100 dark:border-stone-700">
            <div className="mb-6 flex items-center justify-between">
              <h3 className="text-xl font-bold">Alamat Pengiriman</h3>
              <button className="rounded-lg bg-stone-100 px-4 py-2 text-xs font-bold text-stone-700 hover:bg-stone-200 dark:bg-stone-700 dark:text-stone-300 transition-colors">
                Ubah
              </button>
            </div>
            <div className="flex items-start gap-5">
              <div className="flex size-12 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                <span className="material-symbols-outlined">location_on</span>
              </div>
              <div>
                <p className="text-lg font-bold">Rumah</p>
                <p className="mt-2 text-text-muted leading-relaxed dark:text-stone-400">
                  Jl. Merdeka No. 45, Bandung, Jawa Barat<br/>
                  (Rumah Pagar Hitam, Samping Minimarket)
                </p>
                <div className="mt-4 flex items-center gap-2 text-sm font-semibold text-stone-500">
                  <span className="material-symbols-outlined text-[18px]">call</span>
                  {MOCK_USER.phone}
                </div>
              </div>
            </div>
          </section>

          {/* Payment Methods */}
          <section className="rounded-2xl bg-white dark:bg-stone-800 p-8 shadow-soft border border-stone-100 dark:border-stone-700">
            <h3 className="mb-8 text-2xl font-bold">Metode Pembayaran</h3>
            <div className="grid grid-cols-1 gap-4">
              {[
                { id: 'ewallet', name: 'E-Wallet', desc: 'GoPay, OVO, ShopeePay, Dana', icon: 'account_balance_wallet', color: 'blue' },
                { id: 'bank', name: 'Transfer Bank (Virtual Account)', desc: 'BCA, Mandiri, BNI, BRI', icon: 'account_balance', color: 'green' },
                { id: 'qris', name: 'QRIS', desc: 'Scan QR code untuk pembayaran instan', icon: 'qr_code_scanner', color: 'red' },
                { id: 'cod', name: 'Tunai (COD)', desc: 'Bayar di tempat saat pesanan sampai', icon: 'payments', color: 'yellow' },
              ].map((p, i) => (
                <label key={p.id} className="group relative flex cursor-pointer items-center gap-5 rounded-xl border border-stone-100 p-5 transition-all hover:border-primary/40 has-[:checked]:border-primary has-[:checked]:bg-primary/5 dark:border-stone-700 dark:has-[:checked]:bg-primary/10">
                  <input defaultChecked={i === 0} className="size-5 border-2 border-stone-300 text-primary focus:ring-primary dark:bg-stone-900 dark:border-stone-600" name="payment" type="radio" />
                  <div className={`flex size-12 items-center justify-center rounded-xl bg-${p.color}-50 text-${p.color}-600 dark:bg-${p.color}-900/20 dark:text-${p.color}-400`}>
                    <span className="material-symbols-outlined text-[28px]">{p.icon}</span>
                  </div>
                  <div className="flex flex-1 flex-col">
                    <span className="font-bold text-lg">{p.name}</span>
                    <span className="text-sm text-text-muted">{p.desc}</span>
                  </div>
                  {i === 0 && <span className="material-symbols-outlined text-stone-400 group-hover:text-primary">expand_more</span>}
                </label>
              ))}
            </div>
          </section>
        </div>

        {/* Order Summary Sticky */}
        <div className="w-full lg:w-[420px]">
          <div className="sticky top-28 flex flex-col gap-8 rounded-2xl bg-white dark:bg-stone-800 p-8 shadow-xl border border-stone-100 dark:border-stone-700">
            <h3 className="text-2xl font-bold">Ringkasan Pesanan</h3>
            
            <div className="space-y-6 max-h-[300px] overflow-y-auto pr-2">
              {[
                { name: 'Roti Bakar Coklat Keju', price: 25000, options: 'Regular, Extra Keju', qty: 1 },
                { name: 'Es Teh Manis', price: 5000, options: 'Less Sugar', qty: 1 }
              ].map((item, idx) => (
                <div key={idx} className="flex gap-4">
                  <div className="size-16 shrink-0 overflow-hidden rounded-xl bg-stone-100 bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center">
                    <span className="material-symbols-outlined text-primary">bakery_dining</span>
                  </div>
                  <div className="flex flex-1 flex-col">
                    <div className="flex justify-between items-start">
                      <h4 className="font-bold text-sm leading-tight">{item.name}</h4>
                      <span className="text-sm font-bold ml-2 shrink-0">Rp {item.price.toLocaleString('id-ID')}</span>
                    </div>
                    <p className="text-xs text-text-muted mt-1">{item.options}</p>
                    <p className="mt-1 text-xs font-bold text-primary">x {item.qty}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="h-px bg-stone-100 dark:bg-stone-700"></div>

            <div className="space-y-3">
              <div className="flex justify-between text-sm text-text-muted">
                <span>Subtotal</span>
                <span className="font-semibold text-text-main dark:text-white">Rp 30.000</span>
              </div>
              <div className="flex justify-between text-sm text-text-muted">
                <span>Biaya Pengiriman</span>
                <span className="font-semibold text-text-main dark:text-white">Rp 10.000</span>
              </div>
              <div className="flex justify-between text-sm text-text-muted">
                <span>Biaya Layanan</span>
                <span className="font-semibold text-text-main dark:text-white">Rp 2.000</span>
              </div>
              <div className="flex justify-between text-sm text-green-600 font-bold">
                <span>Diskon Ongkir</span>
                <span>-Rp 5.000</span>
              </div>
            </div>

            <div className="h-px bg-stone-100 dark:bg-stone-700"></div>

            <div className="flex items-center justify-between">
              <span className="text-lg font-bold">Total Pembayaran</span>
              <span className="text-3xl font-black text-primary">Rp 37.000</span>
            </div>

            <button className="flex w-full items-center justify-center gap-3 rounded-xl bg-primary py-5 text-lg font-bold text-white shadow-xl shadow-primary/30 transition-all hover:bg-primary-dark hover:scale-[1.02] active:scale-95">
              <span>Bayar Sekarang</span>
              <span className="material-symbols-outlined text-xl">lock</span>
            </button>
            
            <div className="flex items-center justify-center gap-2 text-xs text-stone-400 font-medium">
              <span className="material-symbols-outlined text-[16px] text-green-500">verified_user</span>
              Pembayaran aman & terenkripsi
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
