import React, { useState } from "react";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css"; // استفاده از استایل‌های پیش‌فرض

import { galleryCarts } from "../data/localData"; // فرضاً اینجا داده‌های تصویر از یک فایل داده محلی وارد شده است

function GalleryCars() {
  const [isOpen, setIsOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const openGallery = (index) => {
    setCurrentIndex(index);
    setIsOpen(true);
  };

  const closeGallery = () => {
    setIsOpen(false);
  };

  const handleOverlayClick = (event) => {
    if (event.target === event.currentTarget) {
      // بررسی می‌کنیم که کلیک روی زمینه سیاه بوده است، نه روی عکس
      closeGallery();
    }
  };

  const images = galleryCarts.map((item) => ({
    original: item.image,
    thumbnail: item.image,
    description: item.title, // اگر اطلاعات توضیحاتی دارید
  }));

  return (
    <div className="w-[330px] justify-center md:w-[1200px] grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 md:gap-10 relative mt-9 rounded-lg cursor-pointer">
      {galleryCarts.map((item, index) => (
        <img
          key={item.id}
          className="lg:w-[400px] w-[300px] m-4 h-[300px] object-cover rounded-2xl"
          src={item.image}
          alt={item.title} // اگر اطلاعات عنوانی دارید
          onClick={() => openGallery(index)}
        />
      ))}

      {isOpen && (
        <div className="fixed top-0 left-0 w-full h-full z-50">
          <div
            className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-90 flex justify-center items-center"
            onClick={handleOverlayClick} // تنظیم کلیک بر روی زمینه سیاه
          >
            <div className="relative">
              <span
                className="absolute top-4 right-4 text-white cursor-pointer"
                onClick={closeGallery}
              >
                Close
              </span>
              <ImageGallery
                items={images}
                startIndex={currentIndex}
                showThumbnails={false}
                showFullscreenButton={false}
                showPlayButton={false}
                showNav={true}
                onClose={closeGallery}
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default GalleryCars;
