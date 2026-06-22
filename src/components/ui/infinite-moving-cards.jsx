"use client";

import { cn } from "@/lib/utils";

import {
  motion,
} from "framer-motion";

export const InfiniteMovingCards = ({
  items,
  direction = "left",
  speed = "slow",
  pauseOnHover = true,
  className,
}) => {
  
  const duration =
    speed === "fast"
      ? 20
      : speed === "normal"
      ? 35
      : 55;

  return (
    <div
      className={cn(
        "relative overflow-hidden",
        className
      )}
    >
      
      <motion.div
        animate={{
          x:
            direction === "left"
              ? ["0%", "-50%"]
              : ["-50%", "0%"],
        }}
        transition={{
          repeat: Infinity,
          duration,
          ease: "linear",
        }}
        className="flex w-max gap-6"
        whileHover={
          pauseOnHover
            ? {
                animationPlayState:
                  "paused",
              }
            : {}
        }
      >
        
        {[...items, ...items].map(
          (
            item,
            idx
          ) => (
            <div
              key={idx}
              className="relative w-[360px] overflow-hidden rounded-[30px] border border-red-100 bg-white p-6 shadow-lg transition-all duration-500 hover:-translate-y-1 hover:shadow-2xl hover:shadow-red-100/40"
            >
              
              {/* Background Glow */}
              <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-red-100/20 blur-3xl"></div>

              {/* Quote */}
              <p className="relative text-[15px] leading-7 text-[#475569]">
                {item.quote}
              </p>

              {/* Bottom */}
              <div className="relative mt-6 flex items-center gap-4">
                
                {/* Image */}
                <img
                  src={item.image}
                  alt={item.name}
                  className="h-14 w-14 rounded-full border-2 border-red-100 object-cover"
                />

                {/* Info */}
                <div>
                  
                  <h4 className="text-[17px] font-semibold text-[#071739]">
                    {item.name}
                  </h4>

                  <p className="mt-1 text-sm text-[#64748b]">
                    {item.title}
                  </p>
                </div>
              </div>

              {/* Bottom Line */}
              <div className="relative mt-5 h-[2px] w-16 rounded-full bg-gradient-to-r from-red-500 to-blue-600"></div>
            </div>
          )
        )}
      </motion.div>
    </div>
  );
};