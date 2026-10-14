import leopard from "@/assets/hero-leopard.jpg";
import eagle from "@/assets/eagle.jpg";
import monkey from "@/assets/monkey.jpg";
import croc from "@/assets/croc.jpg";
import kudu from "@/assets/kudu.jpg";

export const SITE = {
  name: "Sihle Kula National Park",
  short: "Sihle Kula",
  city: "Stellenbosch, South Africa",
  slogan: "Wild at Heart. Close to You.",
  hours: "Daily 08:00 – 17:00",
  phone: "+27 21 000 0000",
  email: "hello@sihlekula.co.za",
};

export const PRICES = [
  { name: "Weekly Pass", price: "R250", note: "Unlimited entry for 7 days" },
  { name: "Members – Weekend", price: "Special discount", note: "Members save on Saturday & Sunday visits" },
  { name: "School & Group", price: "On request", note: "Contact us for group rates" },
];

export type Category = "Big Cats" | "Birds" | "Reptiles" | "Primates" | "Antelope";
export const ANIMALS: { name: string; cat: Category; img: string; fact: string; diet: string; status: string; featured?: boolean }[] = [
  { name: "African Leopard", cat: "Big Cats", img: leopard, featured: true, fact: "Leopards can haul prey twice their weight up a tree.", diet: "Carnivore – antelope, rodents, birds", status: "Vulnerable" },
  { name: "African Fish Eagle", cat: "Birds", img: eagle, fact: "Its call is known as the 'voice of Africa'.", diet: "Mostly fish", status: "Least Concern" },
  { name: "Nile Crocodile", cat: "Reptiles", img: croc, fact: "Can go months without eating.", diet: "Carnivore – fish, mammals", status: "Least Concern" },
  { name: "Vervet Monkey", cat: "Primates", img: monkey, fact: "Uses different alarm calls for eagles, snakes and leopards.", diet: "Omnivore – fruit, leaves, insects", status: "Least Concern" },
  { name: "Greater Kudu", cat: "Antelope", img: kudu, fact: "Males' spiral horns can grow to 1.8 m.", diet: "Herbivore – leaves, shoots", status: "Least Concern" },
];

export const ZOO_FACTS = `Zoo: ${SITE.name}, ${SITE.city}. Hours: ${SITE.hours}. Tickets: Weekly Pass R250 (unlimited entry 7 days); members get a special weekend discount; school/group rates on request. Show times: Leopard talk 10:00, Bird of prey flight 11:30, Crocodile feeding 13:00, Primate enrichment 14:30, Kudu walk 15:30. Map zones: Big Cat Ridge (north), Bird Valley (east), Reptile House (centre), Primate Forest (west), Antelope Plains (south). Experiences: feeding sessions, guided safaris, school trips, birthday parties, corporate team-building. Contact: ${SITE.phone}, ${SITE.email}.`;
