import React from "react";
import Image from "next/image";
import ProductGrid from "../../components/ProductGrid";
import Header from "@/components/Header";
import ContactUs from "@/components/ContactUs";
import Map from "@/components/Map";
import Footer from "@/components/Footer";

const homeFurnishingItems = [
  { image: "/images/allImages/116138.jpg" },
  { image: "/images/allImages/116140.jpg" },
  { image: "/images/allImages/116142.jpg" },
  { image: "/images/allImages/129474.jpg" },
  { image: "/images/allImages/129475.jpg" },
  { image: "/images/allImages/141199.jpg" },
  { image: "/images/allImages/141202.jpg" },
  { image: "/images/allImages/20231108_121256.jpg" },
  { image: "/images/allImages/20231108_121303.jpg" },
  { image: "/images/allImages/20231108_204335.jpg" },
  { image: "/images/allImages/20231108_204344.jpg" },
  { image: "/images/allImages/20231111_185350.jpg" },
  { image: "/images/allImages/20240630_101003.jpg" },
  { image: "/images/allImages/20240630_101308.jpg" },
  { image: "/images/allImages/20240630_101323.jpg" },
  { image: "/images/allImages/IMG_20210329_133834.jpg" },
  { image: "/images/allImages/IMG_20210329_143640.jpg" },
  { image: "/images/allImages/IMG_20210329_143754.jpg" },
  { image: "/images/allImages/IMG_20210329_143817.jpg" },
  { image: "/images/allImages/IMG_20210620_105408.jpg" },
  { image: "/images/allImages/IMG_20210620_105604.jpg" },
  { image: "/images/allImages/IMG_20210813_201030.jpg" },
  { image: "/images/allImages/IMG_20210813_201131.jpg" },
  { image: "/images/allImages/IMG_20210904_180558.jpg" },
  { image: "/images/allImages/IMG_20210904_180637.jpg" },
  { image: "/images/allImages/IMG_20210904_180645.jpg" },
  { image: "/images/allImages/IMG_20211002_114419.jpg" },
  { image: "/images/allImages/IMG_20211024_105944.jpg" },
  { image: "/images/allImages/IMG_20211024_110019.jpg" },
  { image: "/images/allImages/IMG_20211024_110701.jpg" },
  { image: "/images/allImages/IMG_20211024_110955.jpg" },
  { image: "/images/allImages/IMG_20211024_112244.jpg" },
  { image: "/images/allImages/IMG_20211024_112731.jpg" },
  { image: "/images/allImages/IMG_20211024_113244.jpg" },
  { image: "/images/allImages/IMG_20211024_113329.jpg" },
  { image: "/images/allImages/IMG_20211024_113634.jpg" },
  { image: "/images/allImages/IMG_20211024_114000.jpg" },
  { image: "/images/allImages/IMG_20211024_114221.jpg" },
  { image: "/images/allImages/IMG_20211024_115037.jpg" },
  { image: "/images/allImages/IMG_20211024_115409.jpg" },
  { image: "/images/allImages/IMG_20211024_144149.jpg" },
  { image: "/images/allImages/IMG_20211024_144205.jpg" },
  { image: "/images/allImages/IMG_20220222_203934.jpg" },
  { image: "/images/allImages/IMG_20220222_203946.jpg" },
  { image: "/images/allImages/IMG_20220222_204002.jpg" },
  { image: "/images/allImages/IMG_20220222_204429.jpg" },
  { image: "/images/allImages/IMG_20220331_112204.jpg" },
  { image: "/images/allImages/IMG_20220331_131724.jpg" },
  { image: "/images/allImages/IMG_20220917_162207.jpg" },
  { image: "/images/allImages/IMG_20220917_162243.jpg" },
  { image: "/images/allImages/IMG_20220917_162314.jpg" },
  { image: "/images/allImages/IMG_20220917_162350.jpg" },
  { image: "/images/allImages/IMG_20221001_100233.jpg" },
  { image: "/images/allImages/IMG_20221001_163442.jpg" }
];


const title = "All Furnished Products"
const description = "All Furnished Products"

const ProductsGallery = () => {
  return (
    <div>
      {/* <Header /> */}

      <div className="py-12 mt-44 bg-white">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              {title}
            </h2>
            <div className="w-24 h-1 bg-gray-300 mx-auto mb-6"></div>
            <p className="text-gray-600 max-w-2xl mx-auto">{description}</p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
            {homeFurnishingItems.map((item, index) => (
              <div key={index} className="bg-white border border-gray-200">
                <div className="relative aspect-square p-4 flex items-center justify-center">
                  <Image
                    src={item.image}
                    alt="product"
                    fill
                    className="object-contain"
                    sizes="(max-width: 640px) 50vw, (max-width: 768px) 33vw, (max-width: 1024px) 25vw, 20vw"
                  />
                </div>

                {/* <div className="p-4 border-t border-gray-200">
                  <h3 className="font-medium text-gray-900">{item.name}</h3>
                </div> */}
              </div>
            ))}
          </div>
        </div>
      </div>
      
    </div>
  );
};

export default ProductsGallery;
