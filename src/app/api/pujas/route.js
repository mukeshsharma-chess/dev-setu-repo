import { NextResponse } from "next/server";
import models from "@/models/index.js"; // sequelize models load karega

const { pujas, pujaPackages, pujaOfferings, pujaFaqs, pujaImages } = models;

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


export async function POST(req) {
  try {
    const body = await req.json(); // parse incoming JSON body

    // Extract the common offerimg array from the 'offerings' object
    const commonOfferImages = body.offerings.offerimg || [];

    const newPuja = await pujas.create(
      {
        title: body.title,
        slug: body.slug, // Added slug field
        ratingValue: parseFloat(body.ratingValue), // Ensure ratingValue is a float
        ratingReviews: parseInt(body.ratingReviews), // Ensure ratingReviews is an integer
        specialDay: body.specialDay,
        location: body.location,
        date: new Date(body.date), // Ensure date is a proper Date object
        pujaDetails: body.pujaDetails,
        templeHistory: body.templeHistory,

        // map payload keys → association keys
        pujaPackages: body.packages.map(pkg => ({
          packImg: pkg.packImg,
          packageType: pkg.packageType,
          packagePrice: parseFloat(pkg.packagePrice) // Ensure price is a float
        })),
        pujaOfferings: body.offerings.offers.map(o => ({
          // Map each individual offering from 'offers' array
          title: o.title,
          Description: o.description,
          offerimg: commonOfferImages, // Assign the common array of images to each offering
        })),
        pujaFaqs: body.faqs.map(f => ({
          question: f.title, // Mapping 'title' from payload to 'question' in model
          answer: f.description, // Mapping 'description' from payload to 'answer' in model
          icon: f.icon ?? "",
        })),
        pujaImages: body.images.map(imgUrl => ({ // body.images is an array of strings, not objects
          imageUrl: imgUrl, // Directly use the URL string
        })),
      },
      {
        include: [pujaPackages, pujaOfferings, pujaFaqs, pujaImages],
      }
    );

    return NextResponse.json(
      { status: 200, data: newPuja },
    );
  } catch (error) {
    console.error("Error creating Puja:", error);
    return NextResponse.json(
      { status: "error", message: error.message },
      { status: 500 }
    );
  }
}