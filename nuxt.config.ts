// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
				devtools: { enabled: true },
				modules: [
				 "@nuxtjs/tailwindcss",
				 "@nuxtjs/color-mode",
				 "@nuxt/image",
				 "@pinia/nuxt",
				 "nuxt-icon",
				],
				colorMode: {
								preference: "cupcake", // default theme
								dataValue: "theme", // activate data-theme in <html> tag
								classSuffix: "",
				},
				// imports: {
				// 	dirs: ["stores"]
				// },
				pinia: {
    storesDirs: ['./stores/**', './custom-folder/stores/**'],
  },
});