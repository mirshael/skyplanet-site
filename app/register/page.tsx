import React from 'react';

export default function RegisterPage() {
  return (
    <div className="min-h-screen bg-cover bg-center flex items-center justify-center" style={{ backgroundImage: "url('/background.jpg')" }}>
      <div className="bg-blue-950 bg-opacity-80 p-8 rounded-2xl shadow-lg max-w-lg w-full">
        <h2 className="text-white text-3xl font-bold mb-6 text-center">Регистрация в Sky Planet</h2>
        <form className="space-y-4">
          <input type="email" placeholder="E-mail" className="w-full p-2 rounded bg-white text-black" />
          <div className="flex gap-4">
            <input type="text" placeholder="Имя" className="w-full p-2 rounded bg-white text-black" />
            <input type="text" placeholder="Фамилия" className="w-full p-2 rounded bg-white text-black" />
          </div>
          <div className="flex gap-4">
            <input type="text" placeholder="VATSIM ID" className="w-full p-2 rounded bg-white text-black" />
            <input type="text" placeholder="IVAO ID" className="w-full p-2 rounded bg-white text-black" />
          </div>
          <input type="text" placeholder="Аэропорт" className="w-full p-2 rounded bg-white text-black" />
          <textarea placeholder="Опыт в симуляторе" className="w-full p-2 rounded bg-white text-black" rows={3} />
          <button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold p-2 rounded">ЗАРЕГИСТРИРОВАТЬ</button>
        </form>
      </div>
    </div>
  );
}
