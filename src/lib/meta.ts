export const meta = (title: string, description: string) => ({
  meta: [
    { title: `${title} | Sihle Kula National Park` },
    { name: "description", content: description },
    { property: "og:title", content: `${title} | Sihle Kula National Park` },
    { property: "og:description", content: description },
    { property: "og:type", content: "website" },
    { name: "twitter:card", content: "summary_large_image" },
  ],
});
