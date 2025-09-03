import React, { useState } from "react";

const PRODUCTS = [
  { id: 1, name: "Diffuseur Zenova", price: 29.9, emoji: "💨" },
  { id: 2, name: "Lampe Zenova", price: 24.9, emoji: "🕯️" },
  { id: 3, name: "Pack Détente", price: 59.9, emoji: "🌿" },
];

export default function App() {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  const total = cart.reduce((acc, item) => acc + item.price, 0);

  return (
    <div className="bg-gradient-to-b from-green-50 to-white min-h-screen font-sans">
      <header className="text-center py-10 bg-green-100 shadow-md">
        <h1 className="text-4xl font-bold text-green-900">🌱 Zenova</h1>
        <p className="text-lg text-green-700 mt-2">
          Transformez votre maison en havre de paix
        </p>
      </header>

      <main className="max-w-5xl mx-auto px-6 py-10">
        <h2 className="text-2xl font-semibold text-green-800 mb-6 text-center">
          Nos Produits Zen
        </h2>
        <div className="grid md:grid-cols-3 gap-6">
          {PRODUCTS.map((p) => (
            <div key={p.id} className="border rounded-2xl shadow-md p-6 text-center hover:scale-105 transition-transform bg-white">
              <div className="text-5xl mb-3">{p.emoji}</div>
              <h3 className="font-semibold text-xl text-green-900">{p.name}</h3>
              <p className="text-green-700 mt-2">{p.price.toFixed(2)} €</p>
              <button onClick={() => addToCart(p)} className="mt-4 bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-xl">
                Ajouter au panier
              </button>
            </div>
          ))}
        </div>
      </main>

      <section className="max-w-3xl mx-auto px-6 py-10">
        <h2 className="text-xl font-semibold text-green-800 mb-4">🛒 Votre Panier</h2>
        {cart.length === 0 ? (
          <p className="text-gray-500">Votre panier est vide.</p>
        ) : (
          <div className="bg-green-50 rounded-xl p-6 shadow">
            <ul className="divide-y divide-green-200">
              {cart.map((item, idx) => (
                <li key={idx} className="py-2 flex justify-between">
                  <span>{item.name}</span>
                  <span>{item.price.toFixed(2)} €</span>
                </li>
              ))}
            </ul>
            <div className="flex justify-between font-semibold mt-4">
              <span>Total :</span>
              <span>{total.toFixed(2)} €</span>
            </div>
            <button onClick={() => (window.location.href = "https://checkout.stripe.com/c/pay_session_id")} className="mt-6 w-full bg-green-600 hover:bg-green-700 text-white py-3 rounded-xl">
              Passer commande
            </button>
            <p className="text-sm text-green-700 mt-2 text-center">
              Livraison offerte dès 59 €
            </p>
          </div>
        )}
      </section>

      <footer className="bg-green-100 text-center py-6 mt-10 text-green-700">
        © 2025 Zenova – Tous droits réservés
      </footer>
    </div>
  );
}