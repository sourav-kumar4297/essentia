import Banner from "../components/Banner";
import Text from "../components/Text";
import Link from "next/link";

export const metadata = {
  title: "Bespoke Furniture",
  description:
    "Custom furniture manufacturing and design by Essentia Environments.",
};

export default function FurnitureIndex() {
  const content = [
    <p key="1">
      Essentia Environments designs and manufactures bespoke furniture that is
      tailored to your space, lifestyle and aesthetic. Every piece is crafted in
      our own facility using premium materials and refined detailing.
    </p>,
    <p key="2">
      From sofas and beds to storage systems and workspaces, we balance
      proportion, comfort and practicality so your furniture feels luxurious and
      works beautifully every day.
    </p>,
    <ul key="3" className="ml-5 list-disc space-y-1 text-sm text-neutral-200">
      <li>Custom sofas, chairs and lounge seating</li>
      <li>Bedroom and wardrobe solutions</li>
      <li>Dining and bar furniture</li>
      <li>Office and study furniture</li>
      <li>Storage, media units and accent pieces</li>
    </ul>,
    <p key="4">
      Explore our{" "}
      <Link href="/furniture/indoor" className="underline underline-offset-4">
        Indoor Furniture
      </Link>{" "}
      and{" "}
      <Link href="/furniture/outdoor" className="underline underline-offset-4">
        Outdoor Furniture
      </Link>{" "}
      collections to see how we bring bespoke design to every part of your
      home.
    </p>,
  ];

  return (
    <>
      <Banner heading="Bespoke Furniture" image="/images/bespoke.webp" />
      <div className="container mx-auto px-6 py-12">
        <Text heading="Custom Furniture Manufacturing & Design" content={content} />
      </div>
    </>
  );
}
