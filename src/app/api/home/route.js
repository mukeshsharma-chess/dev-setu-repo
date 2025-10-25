//src/app/api/home/route.js

import { NextResponse } from "next/server";
import models from "@/models/index.js"; 

// const { pujas, pujaBanners, chadhava, chadhavaBanner } = models;

// export async function GET() {
//   try {
//     // Pujas fetch
//     const pujaData = await pujas.findAll({
//       where: { isActive: true, isActiveOnHome: true },
//       attributes: ["id", "title", "slug"],
//       include: [
//         {
//           model: pujaBanners,
//           where: { position: 1 },
//           attributes: ["id", "image_url", "position", "type"],
//         },
//       ],
//     });

//     const pujaCard = await pujas.findAll({
//       where: { isActive: true, isActiveOnHome: false },
//       attributes: ["id", "title", "slug", "sub_title", "location", "date"],
//       include: [
//         {
//           model: pujaBanners,
//           where: { position: 1 },
//           attributes: ["id", "image_url", "position", "type"],
//         },
//       ],
//         limit: 3,
//         order: [["date", "DESC"]],
//     });

//     // Chadhavas fetch
//     const chadhavaData = await chadhava.findAll({
//       where: { isActive: true, isActiveOnHome: true },
//       attributes: ["id", "title", "slug"],
//       include: [
//         {
//           model: chadhavaBanner,
//           where: { position: 1 },
//           attributes: ["id", "image_url", "position", "type"],
//         },
//       ],
//     });

//     const chadhavaCard = await chadhava.findAll({
//       where: { isActive: true, isActiveOnHome: false },
//       attributes: ["id", "title", "slug", "sub_title", "chadhava_details", "date"],
//       include: [
//         {
//           model: chadhavaBanner,
//           where: { position: 1 },
//           attributes: ["id", "image_url", "position", "type"],
//         },
//       ],
//         limit: 3,
//         order: [["date", "DESC"]],
//     });

//     // Map data and rename pujaBanners / chadhavaBanners to banners
//     const formattedPujaData = pujaData.map(p => ({
//       id: p.id,
//       title: p.title,
//       slug: p.slug,
//       banners: p.pujaBanners || [],
//       type: "puja"
//     }));

//     const formattedChadhavaData = chadhavaData.map(c => ({
//       id: c.id,
//       title: c.title,
//       slug: c.slug,
//       banners: c.chadhavaBanners || [],
//       type: "chadhava"
//     }));

//     return NextResponse.json({
//       status: 200,
//       message: "Home page data fetched successfully",
//       data: { heroBanner: [...formattedPujaData, ...formattedChadhavaData], 
//           pujaCard: pujaCard, 
//           chadhavaCard: chadhavaCard
//       },
//     }, { status: 200 });

//   } catch (error) {
//     console.error("Error fetching home data:", error);
//     return NextResponse.json(
//       { status: 500, error: "Internal Server Error" },
//       { status: 500 }
//     );
//   }
// }


// app/api/home/route.js

import { NextResponse } from "next/server";
import models from "@/models/index.js";

const { pujas, pujaBanners, chadhava, chadhavaBanner } = models;

// CORS headers helper
function corsHeaders() {
  return {
    "Access-Control-Allow-Origin": "*", // Prod: frontend URL
    "Access-Control-Allow-Methods": "GET,POST,OPTIONS",
    "Access-Control-Allow-Headers": "Content-Type,Authorization",
  };
}

// Handle OPTIONS (preflight)
export async function OPTIONS() {
  return NextResponse.json(null, { status: 204, headers: corsHeaders() });
}

// GET Home Data
export async function GET() {
  try {
    const pujaData = await pujas.findAll({
      where: { isActive: true, isActiveOnHome: true },
      attributes: ["id", "title", "slug"],
      include: [
        {
          model: pujaBanners,
          where: { position: 1 },
          required: false, // important
          attributes: ["id", "image_url", "position", "type"],
        },
      ],
    });

    const pujaCard = await pujas.findAll({
      where: { isActive: true, isActiveOnHome: false },
      attributes: ["id", "title", "slug", "sub_title", "location", "date"],
      include: [
        {
          model: pujaBanners,
          where: { position: 1 },
          required: false,
          attributes: ["id", "image_url", "position", "type"],
        },
      ],
      limit: 3,
      order: [["date", "DESC"]],
    });

    const chadhavaData = await chadhava.findAll({
      where: { isActive: true, isActiveOnHome: true },
      attributes: ["id", "title", "slug"],
      include: [
        {
          model: chadhavaBanner,
          where: { position: 1 },
          required: false,
          attributes: ["id", "image_url", "position", "type"],
        },
      ],
    });

    const chadhavaCard = await chadhava.findAll({
      where: { isActive: true, isActiveOnHome: false },
      attributes: ["id", "title", "slug", "sub_title", "chadhava_details", "date"],
      include: [
        {
          model: chadhavaBanner,
          where: { position: 1 },
          required: false,
          attributes: ["id", "image_url", "position", "type"],
        },
      ],
      limit: 3,
      order: [["date", "DESC"]],
    });

    // Format data
    const formattedPujaData = pujaData.map((p) => ({
      id: p.id,
      title: p.title,
      slug: p.slug,
      banners: p.pujaBanners || [],
      type: "puja",
    }));

    const formattedChadhavaData = chadhavaData.map((c) => ({
      id: c.id,
      title: c.title,
      slug: c.slug,
      banners: c.chadhavaBanners || [],
      type: "chadhava",
    }));

    return NextResponse.json(
      {
        status: 200,
        message: "Home page data fetched successfully",
        data: {
          heroBanner: [...formattedPujaData, ...formattedChadhavaData],
          pujaCard,
          chadhavaCard,
        },
      },
      { status: 200, headers: corsHeaders() }
    );
  } catch (error) {
    console.error("Error fetching home data:", error);
    return NextResponse.json(
      { status: 500, error: "Internal Server Error" },
      { status: 500, headers: corsHeaders() }
    );
  }
}
