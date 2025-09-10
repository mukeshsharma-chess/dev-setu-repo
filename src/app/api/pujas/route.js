import { NextResponse } from "next/server";
import models from "@/models/index.js"; // sequelize models load karega

const { pujas, puja_packages, puja_offerings, puja_faqs, puja_images } = models;

//
// ✅ GET /api/pujas → sab pujas fetch karo
//
export async function GET() {
  try {
    const allPujas = await pujas.findAll({
      include: [puja_packages, puja_offerings, puja_faqs, puja_images],
    });
    return NextResponse.json(allPujas, { status: 200 });
  } catch (error) {
    console.error("GET Error:", error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

//
const newPuja = await pujas.create(
  {
    title: body.title,
    ratingValue: body.ratingValue,
    ratingReviews: body.ratingReviews,
    specialDay: body.specialDay,
    location: body.location,
    date: body.date,
    pujaDetails: body.pujaDetails,
    templeHistory: body.templeHistory,

    // map payload keys → association keys
    pujaPackages: body.packages,
    pujaOfferings: body.offerings.map(o => ({
      offeringName: o.title,
      offeringDescription: o.description,
    })),
    pujaFaqs: body.faqs.map(f => ({
      question: f.title,
      answer: f.description,
      icon: f.icon ?? "",
    })),
    pujaImages: body.images.map(img => ({
      image_url: img.url ?? "",
    })),
  },
  {
    include: [pujaPackages, pujaOfferings, pujaFaqs, pujaImages],
  }
);
