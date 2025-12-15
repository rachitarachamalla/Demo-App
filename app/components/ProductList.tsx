"use client";

import { useState, useRef, useEffect } from "react";

export default function ProductList() {
  const [products, setProducts] = useState([
    { id: 1, name: "Laptop", price: 85000, image: "https://m.media-amazon.com/images/I/71pKJ+Mjd8L._AC_UY327_FMwebp_QL65_.jpg", qty: 0 },
    { id: 2, name: "Smartphone", price: 55000, image: "https://m.media-amazon.com/images/I/81pQfKZBmXL._AC_UY327_FMwebp_QL65_.jpg", qty: 0 },
    { id: 3, name: "Headphones", price: 3500, image: "https://m.media-amazon.com/images/I/71QdB7hDCAL._AC_UY327_FMwebp_QL65_.jpg", qty: 0 },
    { id: 4, name: "Smartwatch", price: 12000, image: "https://m.media-amazon.com/images/I/61zBJcICfFL._AC_UY327_FMwebp_QL65_.jpg", qty: 0 },
    { id: 5, name: "Camera", price: 45000, image: "https://m.media-amazon.com/images/I/71KO7VHuWuL._AC_UY327_FMwebp_QL65_.jpg", qty: 0 },
  ]);

  const [editingProduct, setEditingProduct] = useState<any | null>(null);
  const bottomRef = useRef<HTMLDivElement | null>(null);
  const shouldScrollRef = useRef(false);

  useEffect(() => {
  if (shouldScrollRef.current) {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
    shouldScrollRef.current = false;
  }
}, [products]);

  const updateQty = (id: number, amount: number) => {
    setProducts((prev) =>
      prev.map((p) =>
        p.id === id ? { ...p, qty: Math.max(p.qty + amount, 0) } : p
      )
    );
  };

const addProduct = () => {
  const newProduct = {
    id: Date.now(),
    name: `New Product ${products.length + 1}`,
    price: 1000,
    image: "/placeholder.png",
    qty: 0,
  };

  shouldScrollRef.current = true;
  setProducts((prev) => [...prev, newProduct]);
};

  const deleteProduct = (id: number) => {
    setProducts((prev) => prev.filter((p) => p.id !== id));
  };

  const saveEdit = () => {
    setProducts((prev) =>
      prev.map((p) => (p.id === editingProduct.id ? editingProduct : p))
    );
    setEditingProduct(null);
  };

  return (
    <div className="mt-10 w-full max-w-3xl mx-auto px-4">
      <h2 className="text-3xl font-bold mb-8 text-slate-800 tracking-tight">
        Product Catalog
      </h2>

      <div className="grid gap-6">
        {products.map((product) => (
          <div
            key={product.id}
            className="bg-white shadow-md p-5 rounded-xl  hover:bg-blue-100 dark:hover:bg-zinc-800  hover:shadow-lg  hover:-translate-y-1 transition-shadow"
          >
            {editingProduct?.id === product.id ? (
              <>
                <h3 className="text-lg font-semibold text-slate-700 mb-4">
                  Edit Product
                </h3>

                <div className="flex flex-col gap-3">
                  <input
                    type="text"
                    value={editingProduct.name}
                    onChange={(e) =>
                      setEditingProduct({ ...editingProduct, name: e.target.value })
                    }
                    className="border p-2 rounded w-full"
                  />

                  <input
                    type="number"
                    value={editingProduct.price}
                    onChange={(e) =>
                      setEditingProduct({ ...editingProduct, price: Number(e.target.value) })
                    }
                    className="border p-2 rounded w-full"
                  />

                  <input
                    type="text"
                    value={editingProduct.image}
                    onChange={(e) =>
                      setEditingProduct({ ...editingProduct, image: e.target.value })
                    }
                    className="border p-2 rounded w-full"
                  />

                  <div className="flex gap-3 mt-3 flex-wrap">
                    <button className="px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 transition" onClick={saveEdit}>
                      Save
                    </button>

                    <button className="px-4 py-2 bg-gray-300 rounded-md hover:bg-gray-400 transition" onClick={() => setEditingProduct(null)}>
                      Cancel
                    </button>
                  </div>
                </div>
              </>
            ) : (
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                
               
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-24 h-24 rounded-lg object-cover border border-slate-200 mx-auto sm:mx-0"
                />

           
                <div className="flex flex-col flex-1 px-2 text-center sm:text-left">
                  <span className="font-semibold text-slate-800 text-lg">
                    {product.name}
                  </span>
                  <span className="text-indigo-600 font-semibold">
                  Unit Price: ₹{product.price}
                  </span>
                  <span className="text-sm text-slate-500">
                  Quantity: {product.qty}
                  </span>

<span className="text-sm font-semibold text-green-600">
  Total: ₹{product.price * product.qty}
</span>
              
                </div>

                <div className="flex gap-2 items-center justify-center flex-wrap">
                  <button
                    onClick={() => updateQty(product.id, -1)}
                    className="px-3 py-1 rounded-full bg-slate-200 hover:bg-slate-300 transition"
                  >
                    −
                  </button>

                  <button
                    onClick={() => updateQty(product.id, 1)}
                    className="px-3 py-1 rounded-full bg-indigo-600 text-white hover:bg-indigo-700  transition "
                  >
                    +
                  </button>

                  <button
                    onClick={() => setEditingProduct(product)}
                    className="px-3 py-1 rounded-full bg-teal-500 text-white hover:bg-yellow-600 transition"
                  >
                    ✎
                  </button>

                  <button
                    onClick={() => deleteProduct(product.id)}
                    className="px-3 py-1 rounded-full bg-red-500 text-white hover:bg-red-600 transition"
                  >
                    🗑
                  </button>
                </div>

              </div>
            )}
          </div>
        ))}
      </div>
      <div ref={bottomRef} />

      <button
        onClick={addProduct}
        className="relative overflow-hidden group
                   mt-8 px-5 py-2 rounded-lg bg-indigo-700 text-white font-medium 
                   hover:bg-indigo-800  transition shadow-md w-full sm:w-auto 
                   px-5 py-2 bg-indigo-600 text-white rounded-lg hover:-translate-y-1  
                   "
      >  <span>➕  Add Product </span>
       <div className="absolute inset-0 -translate-x-full bg-gradient-to-r 
                  from-transparent via-white/40 to-transparent 
                  group-hover:translate-x-full 
                  transition-transform duration-700">
  </div>    
        
      </button>
     
    </div>
  );
}
