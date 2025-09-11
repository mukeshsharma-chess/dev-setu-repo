import { NextResponse } from "next/server";
import models from "@/models";

const { chadhava, chadhavaBanner, chadhavaFaqs, chadhavaPackages, pujaPerformed, recommendedChadawa } = models;




export async function PUT(req, context) {
  try {
    const body = await req.json();
    const { params } = context;

    const updatedChadhava = await chadhava.findByPk(params.id);

    if (!updatedChadhava) {
      return NextResponse.json({ error: "Chadhava not found" }, { status: 404 });
    }

    // ✅ Update main table
    await updatedChadhava.update({
      title: body.title,
      slug: body.slug,
      ratingValue: body.ratingValue,
      ratingReviews: body.ratingReviews,
      specialDay: body.specialDay,
      location: body.location,
      date: body.date,
      pujaDetails: body.pujaDetails,
      templeHistory: body.templeHistory,
    });

    // ✅ Update banners
    if (body.images) {
      await chadhavaBanners.destroy({ where: { chadhavaId: updatedChadhava.id } });
      await chadhavaBanners.bulkCreate(
        body.images.map((img) => ({
          image_url: img,
          chadhavaId: updatedChadhava.id,
        }))
      );
    }

    // ✅ Update packages
    if (body.packages) {
      await chadhavaPackages.destroy({ where: { chadhavaId: updatedChadhava.id } });
      await chadhavaPackages.bulkCreate(
        body.packages.map((p) => ({
          ...p,
          chadhavaId: updatedChadhava.id,
        }))
      );
    }

    // ✅ Update recommended chadhawas
    if (body.recommendedChadawa) {
      await recommendedChadawas.destroy({ where: { chadhavaId: updatedChadhava.id } });
      await recommendedChadawas.bulkCreate(
        body.recommendedChadawa.map((r) => ({
          ...r,
          chadhavaId: updatedChadhava.id,
        }))
      );
    }

    // ✅ Update FAQs
    if (body.faqs) {
      await chadhavaFaqs.destroy({ where: { chadhavaId: updatedChadhava.id } });
      await chadhavaFaqs.bulkCreate(
        body.faqs.map((f) => ({
          icon: f.icon,
          question: f.title,
          answer: f.description,
          chadhavaId: updatedChadhava.id,
        }))
      );
    }

    // ✅ Update Puja Performed By (assuming only one)
    if (body.pujaPerformedBy) {
      await pujaPerformed.destroy({ where: { chadhavaId: updatedChadhava.id } });
      await pujaPerformed.create({
        ...body.pujaPerformedBy,
        chadhavaId: updatedChadhava.id,
      });
    }

    // ✅ Fetch back with associations
    const finalData = await chadhava.findByPk(updatedChadhava.id, {
      include: [chadhavaBanners, chadhavaPackages, recommendedChadawas, chadhavaFaqs, pujaPerformed],
    });

    return NextResponse.json({
      data: finalData,
      status: 200,
      message: "Chadhava updated successfully",
    });
  } catch (error) {
    console.error("PUT Error:", error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
