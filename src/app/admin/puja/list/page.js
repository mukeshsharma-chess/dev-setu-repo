"use client";

import { requestPujaDataAction } from "@/redux/actions/pujasAction";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

export default function PujasPage() {
  const [packages, setPackages] = useState(null);
  const [offering, setOffering] = useState(null);
  const [faqs, setFAQs] = useState(null);
  const [images, setImages] = useState(null);
  const [editingId, setEditingId] = useState(null);

  const dispatch = useDispatch();
  const { pujaData } = useSelector((state) => state.puja);

  useEffect(() => {
    dispatch(requestPujaDataAction());
  }, [dispatch]);

  const handleEdit = (puja) => {
    setEditingId(puja.id);
  };

  const handleMouseOver = (value, data) => {
    if (value === "Packeges") setPackages(data);
    else if (value === "Offerings") setOffering(data);
    else if (value === "Faqs") setFAQs(data);
    else if (value === "Images") setImages(data);
  };

  const handleDelete = (id) => {
    console.log("delete", id);
  };

  return (
    <div className="flex">
      {/* ===== Sidebar ===== */}
      <aside className="fixed left-0 top-0 h-screen w-56 bg-gray-900 text-white p-4 shadow-lg">
        <h2 className="text-xl font-bold mb-6">Dev Setu</h2>
        <nav className="space-y-3">
          <a href="/puja" className="block hover:bg-gray-700 p-2 rounded">
            Puja
          </a>
          <a href="/puja/list" className="block hover:bg-gray-700 p-2 rounded">
            Puja List
          </a>
          <a href="/chadhava" className="block hover:bg-gray-700 p-2 rounded">
            Chadava
          </a>
        </nav>
      </aside>

      {/* ===== Main Content ===== */}
      <main className="ml-56 flex-1">
        {/* Navbar */}
        <header className="sticky top-0 bg-white border-b shadow z-40 flex justify-between items-center p-4">
          <h1 className="text-xl font-bold">Puja List</h1>
          <button className="bg-red-500 text-white px-4 py-2 rounded">
            Logout
          </button>
        </header>

        {/* Page Content */}
        <div className="p-6">
          <div className="overflow-x-auto">
            <table className="min-w-full border border-gray-200 text-sm md:text-base">
              <thead>
                <tr className="bg-green-500 text-white">
                  <th className="p-2 border">Title</th>
                  <th className="p-2 border">Slug</th>
                  <th className="p-2 border">Date</th>
                  <th className="p-2 border">Rating</th>
                  <th className="p-2 border">Special Day</th>
                  <th className="p-2 border">Location</th>
                  <th className="p-2 border">Puja Details</th>
                  <th className="p-2 border">Temple History</th>
                  <th className="p-2 border">Packages</th>
                  <th className="p-2 border">Offerings</th>
                  <th className="p-2 border">FAQs</th>
                  <th className="p-2 border">Banners</th>
                  <th className="p-2 border">Action</th>
                </tr>
              </thead>
              <tbody>
                {pujaData?.map((puja) => (
                  <tr
                    key={puja.id}
                    className="text-center border hover:bg-gray-50 transition"
                  >
                    <td className="p-2 border whitespace-nowrap">{puja.title}</td>
                    <td className="p-2 border whitespace-nowrap">{puja.slug}</td>
                    <td className="p-2 border">{puja.date}</td>
                    <td className="p-2 border">
                      {puja.ratingValue} ({puja.ratingReviews})
                    </td>
                    <td className="p-2 border">{puja.specialDay}</td>
                    <td className="p-2 border whitespace-nowrap">{puja.location}</td>
                    <td className="p-2 border max-w-xs truncate">
                      {puja.pujaDetails}
                    </td>
                    <td className="p-2 border max-w-xs truncate">
                      {puja.templeHistory}
                    </td>
                    <td
                      className="p-2 border cursor-pointer text-blue-600"
                      onMouseOver={() =>
                        handleMouseOver("Packeges", puja.pujaPackages)
                      }
                      onMouseLeave={() => setPackages(null)}
                    >
                      Packages
                    </td>
                    <td
                      className="p-2 border cursor-pointer text-blue-600"
                      onMouseOver={() =>
                        handleMouseOver("Offerings", puja.pujaOfferings)
                      }
                      onMouseLeave={() => setOffering(null)}
                    >
                      Offerings
                    </td>
                    <td
                      className="p-2 border cursor-pointer text-blue-600"
                      onMouseOver={() => handleMouseOver("Faqs", puja.pujaFaqs)}
                      onMouseLeave={() => setFAQs(null)}
                    >
                      FAQs
                    </td>
                    <td
                      className="p-2 border cursor-pointer text-blue-600"
                      onMouseOver={() => handleMouseOver("Images", puja.pujaImages)}
                      onMouseLeave={() => setImages(null)}
                    >
                      Images
                    </td>
                    <td className="p-2 border space-x-2">
                      <button
                        className="bg-blue-500 text-white px-2 py-1 rounded text-sm"
                        onClick={() => handleEdit(puja)}
                      >
                        Edit
                      </button>
                      <button
                        className="bg-red-500 text-white px-2 py-1 rounded text-sm"
                        onClick={() => handleDelete(puja.id)}
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </main>
    </div>
  );
}
