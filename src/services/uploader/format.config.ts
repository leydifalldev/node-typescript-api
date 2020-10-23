import { FormatConfig } from "./cloudinary.defs";

export const formatConfig:FormatConfig[] =  [
    {
      width: 400,
      gravity: "face", 
      crop: "fill",
      dpr: "3.0",
      effect: "sharpen"
    }
  ]
  // ProductSquareCard: [
  //   {
  //     width: 300,
  //     height: 300,
  //     crop: "scale",
  //     format: "jpg"
  //   },
  //   {
  //     width: 600,
  //     height: 600,
  //     crop: "scale",
  //     format: "jpg"
  //   }
  // ],
  // ProductRoundedCard: [
  //   {
  //     width: 300,
  //     height: 300,
  //     crop: "scale",
  //     format: "jpg",
  //   },
  //   {
  //     width: 600,
  //     height: 600,
  //     crop: "scale",
  //     format: "jpg",
  //   }
  // ],
  // ProductCardMedium: [
  //   {
  //     width: 400,
  //     height: 226,
  //     crop: "scale",
  //     format: "jpg",
  //   },
  //   {
  //     width: 700,
  //     height: 395,
  //     crop: "scale",
  //     format: "jpg",
  //   }
  // ],
  // Default: [
  //   {
  //     width: 400,
  //     height: 226,
  //     crop: "scale",
  //     format: "jpg",
  //   },
  //   {
  //     width: 700,
  //     height: 395,
  //     crop: "scale",
  //     format: "jpg",
  //   }
  // ]