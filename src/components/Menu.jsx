import React from 'react';
import dishes from './Menu.json';

function Menu() {
  return (
    <div className="min-h-screen bg-gray-900 py-12">
      <div className="container mx-auto px-4">
        <h1 className="mb-12 text-center text-4xl font-extrabold tracking-tight text-amber-400">Exquisite Menu</h1>
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {dishes.map((dish) => (
            <div
              className="group relative overflow-hidden rounded-lg bg-black shadow-lg transition-all duration-300 hover:shadow-2xl hover:shadow-amber-400/50"
            >
              <div className="absolute inset-0 border-2 border-amber-400 opacity-50 transition-opacity duration-300 group-hover:opacity-100" />
              <div className="relative h-48 w-full overflow-hidden">
                <Image
                  src={dish.image}
                  alt={dish.name}
                  className="transition-transform duration-300 group-hover:scale-110"
                />
              </div>
              <div className="p-4">
                <h2 className="mb-2 text-xl font-semibold text-amber-400">{dish.name}</h2>
                <p className="mb-4 text-lg font-bold text-amber-500">${dish.price}</p>
                <p className="text-sm text-amber-300">{dish.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Menu;

