import React, { useState, useEffect } from 'react';
import { SectionHeader } from './SectionHeader';
import { ReviewCard } from './ReviewCard';

const reviews = [
  {
    name: "Arjun S.",
    role: "Security Lead",
    company: "TechShield",
    review: "निरीक्ष's AI-powered system caught sophisticated attacks that traditional security measures missed. Their 24/7 monitoring gives us peace of mind.",
    rating: 5,
    image: "https://api.dicebear.com/7.x/micah/svg?seed=1&backgroundColor=b975f5"
  },
  {
    name: "Priya M.",
    role: "IT Director",
    company: "CyberGuard",
    review: "Implementing निरीक्ष was the best decision for our cybersecurity. Their proactive approach and instant threat detection are outstanding.",
    rating: 5,
    image: "https://api.dicebear.com/7.x/micah/svg?seed=2&backgroundColor=b975f5"
  },
  {
    name: "Raj K.",
    role: "CISO",
    company: "SecureNet",
    review: "The level of protection and expertise we receive from निरीक्ष is exceptional. They've transformed our security infrastructure completely.",
    rating: 5,
    image: "https://api.dicebear.com/7.x/micah/svg?seed=3&backgroundColor=b975f5"
  },
  {
    name: "Meera R.",
    role: "Tech Lead",
    company: "DataFort",
    review: "निरीक्ष provides enterprise-grade security that's both powerful and easy to manage. Their support team is incredibly responsive.",
    rating: 5,
    image: "https://api.dicebear.com/7.x/micah/svg?seed=4&backgroundColor=b975f5"
  }
];

export function Reviews() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      nextSlide();
    }, 5000);

    return () => clearInterval(timer);
  }, [activeIndex]);

  const nextSlide = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setActiveIndex((prev) => (prev + 1) % reviews.length);
    setTimeout(() => setIsAnimating(false), 500);
  };

  const prevSlide = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setActiveIndex((prev) => (prev - 1 + reviews.length) % reviews.length);
    setTimeout(() => setIsAnimating(false), 500);
  };

  return (
    <section className="py-20 bg-gradient-to-b from-purple-50 to-white dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-4">
        <SectionHeader
          subtitle="CLIENT TESTIMONIALS"
          title="Trusted by Security Leaders"
          description="Hear from our clients about their experience with our cybersecurity solutions"
        />
        
        <div className="mt-16 relative">
          <div className="max-w-4xl mx-auto">
            <div className="relative overflow-hidden">
              <div 
                className="flex transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${activeIndex * 100}%)` }}
              >
                {reviews.map((review, index) => (
                  <div
                    key={index}
                    className="w-full flex-shrink-0 px-4"
                  >
                    <ReviewCard {...review} />
                  </div>
                ))}
              </div>
            </div>

            <div className="absolute top-1/2 -translate-y-1/2 left-0 right-0 flex justify-between px-4">
              <button
                onClick={prevSlide}
                className="w-12 h-12 rounded-full bg-white dark:bg-gray-800 shadow-lg flex items-center justify-center hover:bg-purple-50 dark:hover:bg-gray-700 transition-colors"
                disabled={isAnimating}
              >
                <span className="text-2xl text-purple-600 dark:text-purple-400">←</span>
              </button>
              <button
                onClick={nextSlide}
                className="w-12 h-12 rounded-full bg-white dark:bg-gray-800 shadow-lg flex items-center justify-center hover:bg-purple-50 dark:hover:bg-gray-700 transition-colors"
                disabled={isAnimating}
              >
                <span className="text-2xl text-purple-600 dark:text-purple-400">→</span>
              </button>
            </div>
          </div>

          <div className="flex justify-center mt-8 gap-3">
            {reviews.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  if (!isAnimating) {
                    setIsAnimating(true);
                    setActiveIndex(index);
                    setTimeout(() => setIsAnimating(false), 500);
                  }
                }}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === activeIndex
                    ? 'bg-purple-600 dark:bg-purple-400 w-6'
                    : 'bg-purple-200 dark:bg-gray-600'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
      
    </section>
  );
}