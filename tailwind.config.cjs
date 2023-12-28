import { color } from "framer-motion";

/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: ["class"],
    content: ["./pages/**/*.{ts,tsx,astro,md,mdx}", "./components/**/*.{ts,tsx,astro,md,mdx}", "./app/**/*.{ts,tsx,astro,md,mdx}", "./src/**/*.{ts,tsx,astro,md,mdx}"],
    theme: {
        container: {
            center: true,
            padding: "2rem",
            screens: {
                "2xl": "1400px"
            }
        },
        extend: {
            typography: ({ theme }) => ({
                base: {
                    css: {
                        color: theme("colors.surface.900"),
                        h1: {
                            color: theme("colors.surface.900")
                        },
                        h2: {
                            color: theme("colors.surface.900")
                        },
                        h3: {
                            color: theme("colors.surface.900")
                        },
                        h4: {
                            color: theme("colors.surface.900")
                        },
                        h5: {
                            color: theme("colors.surface.900")
                        },
                        h6: {
                            color: theme("colors.surface.900")
                        },
                        a: {
                            color: theme("colors.blue.500"),
                            backgroundColor: theme("colors.red.500"),
                            padding: "0.1rem 0.3rem",
                            borderRadius: "0.2rem",
                            fontWeight: "bold",
                            textDecoration: "none"
                        },
                        blockquote: {
                            color: theme("colors.surface.900"),
                            borderLeftColor: theme("colors.surface.600")
                        },
                        "ul > li::marker": {
                            color: theme("colors.surface.900")
                        },
                        "ol > li::marker": {
                            color: theme("colors.surface.900")
                        },
                        code: {
                            color: theme("colors.white")
                        },
                        pre: {
                            color: theme("colors.gray.200"),
                            backgroundColor: theme("colors.surface.700")
                        },
                        strong: {
                            color: theme("colors.surface.900")
                        },
                        th: {
                            color: theme("colors.surface.900")
                        },
                        thead: {
                            borderBottomColor: theme("colors.surface.900")
                        },
                        hr: {
                            borderColor: theme("colors.surface.900")
                        }
                    }
                },
                light: {
                    css: {
                        color: theme("colors.surface.50"),
                        h1: {
                            color: theme("colors.surface.50")
                        },
                        h2: {
                            color: theme("colors.surface.50")
                        },
                        h3: {
                            color: theme("colors.surface.50")
                        },
                        h4: {
                            color: theme("colors.surface.50")
                        },
                        h5: {
                            color: theme("colors.surface.50")
                        },
                        h6: {
                            color: theme("colors.surface.50")
                        },
                        a: {
                            color: theme("colors.blue.500"),
                            backgroundColor: theme("colors.red.500"),
                            padding: "0.1rem 0.3rem",
                            borderRadius: "0.2rem",
                            fontWeight: "bold",
                            textDecoration: "none"
                        },
                        blockquote: {
                            color: theme("colors.surface.50"),
                            borderLeftColor: theme("colors.surface.300")
                        },
                        "ul > li::marker": {
                            color: theme("colors.surface.50")
                        },
                        "ol > li::marker": {
                            color: theme("colors.surface.50")
                        },
                        code: {
                            color: theme("colors.black")
                        },
                        pre: {
                            color: theme("colors.gray.200"),
                            backgroundColor: theme("colors.surface.200")
                        },
                        strong: {
                            color: theme("colors.surface.50")
                        },
                        th: {
                            color: theme("colors.surface.50")
                        },
                        thead: {
                            borderBottomColor: theme("colors.surface.50")
                        },
                        hr: {
                            borderColor: theme("colors.surface.50")
                        }
                    }
                }
            }),
            colors: {
                text: {
                    50: "#f2f2f2",
                    100: "#e6e6e6",
                    200: "#cccccc",
                    300: "#b3b3b3",
                    400: "#999999",
                    500: "#808080",
                    600: "#666666",
                    700: "#4d4d4d",
                    800: "#333333",
                    900: "#1a1a1a",
                    950: "#0d0d0d"
                },
                surface: {
                    50: "#f2f2f2",
                    100: "#e6e6e6",
                    200: "#cccccc",
                    300: "#b3b3b3",
                    400: "#999999",
                    500: "#808080",
                    600: "#313131",
                    700: "#1f1f1f",
                    800: "#1c1c1c",
                    900: "#1a1a1a",
                    950: "#0d0d0d"
                },
                primary: {
                    100: "#f5dcdb",
                    200: "#ebb9b7",
                    300: "#e19793",
                    400: "#d7746f",
                    500: "#cd514b",
                    600: "#a4413c",
                    700: "#7b312d",
                    800: "#52201e",
                    900: "#29100f"
                },
                secondary: {
                    50: "#fce8e8",
                    100: "#f9d2d2",
                    200: "#f4a4a4",
                    300: "#ee7777",
                    400: "#e94949",
                    500: "#e31c1c",
                    600: "#b61616",
                    700: "#881111",
                    800: "#5b0b0b",
                    900: "#2d0606",
                    950: "#170303"
                },
                accent: {
                    100: "#d1f8ff",
                    200: "#a3f1ff",
                    300: "#75eaff",
                    400: "#47e3ff",
                    500: "#19dcff",
                    600: "#14b0cc",
                    700: "#0f8499",
                    800: "#0a5866",
                    900: "#052c33"
                }
            },
            keyframes: {
                "accordion-down": {
                    from: { height: 0 },
                    to: { height: "var(--radix-accordion-content-height)" }
                },
                "accordion-up": {
                    from: { height: "var(--radix-accordion-content-height)" },
                    to: { height: 0 }
                }
            },
            animation: {
                "accordion-down": "accordion-down 0.2s ease-out",
                "accordion-up": "accordion-up 0.2s ease-out"
            }
        }
    },
    plugins: [require("tailwindcss-animate"), require("daisyui"), require("@tailwindcss/typography")]
};
