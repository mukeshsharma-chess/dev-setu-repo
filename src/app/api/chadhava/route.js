
import { NextResponse } from "next/server";
import models from "@/models";

const { chadhava, chadhavaBanner, chadhavaFaqs, chadhavaPackages, pujaPerformed, recommendedChadawa } = models;

export async function GET() {
    try {
        const allChadhavas = await chadhava.findAll({
            include: [
                { model: chadhavaBanner },
                { model: chadhavaFaqs },
                { model: chadhavaPackages },
                { model: pujaPerformed },
                { model: recommendedChadawa }
            ],
        });


        return NextResponse.json({
            data: allChadhavas,
            status: 200,
        });
    } catch (err) {
        console.error("GET Error:", err);
        return NextResponse.json({ error: err.message }, { status: 500 });
    }
}



const newChadhava = await chadhava.create({
    title: body.title,
    slug: body.slug,
    ratingValue: body.ratingValue,
    ratingReviews: body.ratingReviews,
    specialDay: body.specialDay,
    location: body.location,
    date: body.date,
    pujaDetails: body.pujaDetails,
    templeHistory: body.templeHistory,

    chadhavaPackages: body.packages,
    recommendedChadawas: body.recommendedChadawa,   // plural
    chadhavaFaqs: body.faqs.map(f => ({
        question: f.title,
        answer: f.description,
        icon: f.icon ?? "",
    })),
    chadhavaBanners: body.images.map(img => ({
        image_url: Array.isArray(img) ? img[0] : img
    })),                                           // plural
    pujaPerformeds: body.pujaPerformedBy,          // plural
}, {
    include: [
        { model: chadhavaPackages },
        { model: recommendedChadawa },
        { model: chadhavaFaqs },
        { model: chadhavaBanner },
        { model: pujaPerformed },
    ],
});
