export const typography = {
  // Headings
  heading: {
    primary: "font-great-vibes font-bold text-5xl md:text-7xl mb-4",
    secondary: "font-great-vibes text-5xl md:text-6xl text-rose-800 mb-8",
    tertiary: "font-great-vibes text-3xl md:text-4xl text-rose-800 mb-2",
  },

  // Body Text
  body: {
    large: "font-cormorant text-lg md:text-2xl leading-relaxed",
    medium: "font-playfair text-xl text-gray-800 font-medium",
    regular: "font-cormorant text-xl md:text-2xl text-gray-700",
    small: "font-cormorant text-base text-gray-600",
  },

  // Special Text
  special: {
    label: "font-cormorant text-base md:text-xl mt-1 font-light",
    caption: "font-cormorant text-base text-gray-600/80",
    highlight: "font-playfair text-xl text-gray-900",
    subtitle: "font-tangerine text-3xl md:text-4xl mb-8 md:mb-12 tracking-wide",
    counter: "font-playfair text-3xl md:text-5xl font-bold",
    ornament: "font-great-vibes text-3xl md:text-4xl text-rose-800",
  },

  // Buttons
  button: {
    primary:
      "px-4 py-2 bg-rose-700 text-white rounded-lg font-cormorant hover:bg-rose-800 transition-colors flex items-center gap-2 shadow-md",
    secondary:
      "px-4 py-2 bg-white/80 text-rose-700 rounded-lg font-cormorant hover:bg-white transition-colors flex items-center gap-2 shadow-md",
  },

  // Decorative Elements
  decorative: {
    divider: "w-32 h-0.5 bg-rose-800/50 mx-auto my-4",
    ornament: "font-great-vibes text-3xl md:text-4xl text-rose-800",
  },
} as const;
