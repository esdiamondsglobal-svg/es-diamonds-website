import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Search,
  Menu,
  X,
  Gem,
  ShieldCheck,
  Globe2,
  MessageCircle,
  Star,
  ArrowRight,
  Phone,
  Mail,
  MapPin,
  Upload,
  GraduationCap,
  Landmark,
  Utensils,
  Crown,
  Sparkles,
  PenTool,
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const divisions = [
  {
    name: "ES Brass",
    subtitle: "Premium Brass Idols",
    description:
      "A dedicated collection for brass Hindu idols, spiritual decor and export-friendly devotional pieces.",
    icon: Landmark,
    image:
      "https://images.unsplash.com/photo-1609947017136-9daf32a5eb16?q=80&w=1200&auto=format&fit=crop",
  },
  {
    name: "ES Silvers",
    subtitle: "Silverware, Idols & Luxury Gifting",
    description:
      "Silver idols, utensils, bowls, spoons, cups, decor articles and handcrafted silver products for global buyers.",
    icon: Utensils,
    image:
      "https://images.unsplash.com/photo-1617038260897-41a1f14a8ca0?q=80&w=1200&auto=format&fit=crop",
  },
  {
    name: "ES Diamonds",
    subtitle: "Diamond Studded Idols & Jewellery",
    description:
      "High-value custom diamond-studded idols, jewellery pieces, watches and premium luxury creations.",
    icon: Gem,
    image:
      "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?q=80&w=1200&auto=format&fit=crop",
  },
];

const productCategories = [
  "Necklaces",
  "Pendant Sets",
  "Earrings",
  "Rings",
  "Bracelets",
  "Idols",
  "Silverware",
  "Utensils",
  "Watches",
  "Luxury Gifts",
];

const products = [
  {
    name: "Diamond Pendant Necklace Set",
    division: "ES Diamonds",
    category: "Pendant Sets",
    price: "Price on Request",
    image:
      "https://images.unsplash.com/photo-1601121141461-9d6647bca1ed?q=80&w=1200&auto=format&fit=crop",
    description: "Elegant pendant set crafted for modern global jewellery buyers.",
  },
  {
    name: "Diamond Studded Ganesh Idol",
    division: "ES Diamonds",
    category: "Idols",
    price: "Custom Quote",
    image:
      "https://images.unsplash.com/photo-1606293926075-69a00dbfde81?q=80&w=1200&auto=format&fit=crop",
    description: "Handcrafted devotional luxury idol with diamond-studded detailing.",
  },
  {
    name: "Premium Silver Bowl Set",
    division: "ES Silvers",
    category: "Silverware",
    price: "Price on Request",
    image:
      "https://images.unsplash.com/photo-1617038260897-41a1f14a8ca0?q=80&w=1200&auto=format&fit=crop",
    description: "Luxury silver bowl set for gifting, rituals and premium home use.",
  },
  {
    name: "Silver Spoon & Cup Set",
    division: "ES Silvers",
    category: "Utensils",
    price: "Price on Request",
    image:
      "https://images.unsplash.com/photo-1579656381226-5fc0f0100c3b?q=80&w=1200&auto=format&fit=crop",
    description: "Premium silver utensils designed for international gifting.",
  },
  {
    name: "Brass Hanuman Idol",
    division: "ES Brass",
    category: "Idols",
    price: "Price on Request",
    image:
      "https://images.unsplash.com/photo-1609947017136-9daf32a5eb16?q=80&w=1200&auto=format&fit=crop",
    description: "Export-ready brass idol with refined finishing and devotional appeal.",
  },
  {
    name: "Custom Diamond Ring",
    division: "ES Diamonds",
    category: "Rings",
    price: "Custom Quote",
    image:
      "https://images.unsplash.com/photo-1605100804763-247f67b3557e?q=80&w=1200&auto=format&fit=crop",
    description: "Bespoke ring with diamond, metal and size customisation.",
  },
];

const educationPrograms = [
  {
    title: "Diamond Awareness Workshop",
    duration: "2–3 Days",
    description:
      "A practical beginner workshop for jewellery buyers, students and professionals who want to understand diamonds before buying or selling.",
  },
  {
    title: "Diamond Jewellery Buying Program",
    duration: "10 Days",
    description:
      "Designed for regular diamond jewellery buyers who want to understand 4Cs, certifications, pricing and smart buying decisions.",
  },
  {
    title: "Advanced Diamond Training Program",
    duration: "6 Weeks",
    description:
      "In-depth training covering diamond grading, assorting, valuation, sourcing, trading, jewellery certification and live market exposure.",
  },
  {
    title: "Corporate Training for Jewellery Showrooms",
    duration: "Custom Modules",
    description:
      "Sales, product knowledge, customer handling and diamond education training for jewellery showroom teams.",
  },
];

const diamondTypes = [
  "Natural Diamond",
  "Lab Grown Diamond",
  "Moissanite",
  "American Diamond",
];

const metals = [
  "Silver",
  "Brass",
  "9K Gold",
  "14K Gold",
  "18K Gold",
  "Rose Gold",
  "White Gold",
  "Yellow Gold",
];

export default function ESDiamondsGlobalWebsite() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [selectedDivision, setSelectedDivision] = useState("All");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedProduct, setSelectedProduct] = useState(products[0]);

  const filteredProducts = products.filter((product) => {
    const divisionMatch = selectedDivision === "All" || product.division === selectedDivision;
    const categoryMatch = selectedCategory === "All" || product.category === selectedCategory;
    return divisionMatch && categoryMatch;
  });

  return (
    <div className="min-h-screen bg-[#fbf8f1] text-[#17130c]">
      <header className="sticky top-0 z-50 border-b border-[#d8c690]/40 bg-[#fbf8f1]/90 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4">
          <div className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-full border border-[#c9a646] bg-white shadow-sm">
              <Gem className="h-6 w-6 text-[#b8942f]" />
            </div>
            <div>
              <h1 className="font-serif text-xl tracking-[0.18em] text-[#111]">
                ES DIAMONDS
              </h1>
              <p className="text-xs uppercase tracking-[0.28em] text-[#7a6a43]">
                Global Luxury Platform
              </p>
            </div>
          </div>

          <nav className="hidden items-center gap-7 text-xs uppercase tracking-[0.16em] text-[#4b432f] lg:flex">
            <a href="#divisions">ES Brands</a>
            <a href="#collections">Products</a>
            <a href="#education">Education</a>
            <a href="#custom-design">Create Design</a>
            <a href="#contact">Contact</a>
          </nav>

          <Button className="hidden rounded-full bg-[#111] px-6 text-white hover:bg-[#2c2416] md:flex">
            Global Enquiry
          </Button>

          <button className="lg:hidden" onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {menuOpen && (
          <div className="border-t border-[#d8c690]/40 px-5 py-5 lg:hidden">
            <div className="flex flex-col gap-4 text-sm uppercase tracking-[0.16em]">
              <a href="#divisions">ES Brands</a>
              <a href="#collections">Products</a>
              <a href="#education">Education</a>
              <a href="#custom-design">Create Design</a>
              <a href="#contact">Contact</a>
            </div>
          </div>
        )}
      </header>

      <section className="relative overflow-hidden">
        <div className="absolute right-[-120px] top-[-120px] h-96 w-96 rounded-full bg-[#d4af37]/10 blur-3xl" />
        <div className="absolute left-[-140px] bottom-[-160px] h-96 w-96 rounded-full bg-[#111]/5 blur-3xl" />

        <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 py-20 md:grid-cols-2 md:py-28">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <p className="mb-5 text-sm uppercase tracking-[0.35em] text-[#a47f1d]">
              India to the World
            </p>
            <h2 className="font-serif text-5xl leading-tight md:text-7xl">
              A Global Luxury Marketplace for Jewellery, Idols & Diamond Education
            </h2>
            <p className="mt-6 max-w-xl text-lg leading-8 text-[#5c523b]">
              ES Diamonds Global brings together premium brass idols, silverware, diamond-studded creations, custom jewellery design and diamond education under one luxury platform.
            </p>
            <div className="mt-9 flex flex-col gap-4 sm:flex-row">
              <Button className="rounded-full bg-[#111] px-8 py-6 text-white hover:bg-[#2c2416]">
                Explore Products <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button variant="outline" className="rounded-full border-[#b8942f] px-8 py-6 text-[#111]">
                Create Custom Design
              </Button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="rounded-[2rem] border border-[#d8c690]/60 bg-white p-3 shadow-2xl shadow-[#d4af37]/10">
              <img
                src="https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?q=80&w=1400&auto=format&fit=crop"
                alt="ES Diamonds global luxury marketplace"
                className="h-[520px] w-full rounded-[1.6rem] object-cover"
              />
            </div>
            <div className="absolute bottom-8 left-8 rounded-2xl bg-white/90 p-5 shadow-xl backdrop-blur-md">
              <p className="font-serif text-2xl">ES Diamonds Global</p>
              <p className="mt-1 text-sm text-[#6b6044]">
                Brass • Silver • Diamonds • Education
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      <section id="divisions" className="mx-auto max-w-7xl px-5 py-20">
        <div className="mb-12 text-center">
          <p className="text-sm uppercase tracking-[0.35em] text-[#a47f1d]">
            Three Luxury Divisions
          </p>
          <h3 className="mt-3 font-serif text-4xl md:text-5xl">
            Shop by ES Brand
          </h3>
        </div>

        <div className="grid gap-7 md:grid-cols-3">
          {divisions.map((division) => {
            const Icon = division.icon;
            return (
              <Card
                key={division.name}
                className="group overflow-hidden rounded-[2rem] border-[#d8c690]/50 bg-white shadow-sm transition hover:shadow-xl"
              >
                <div className="relative h-72 overflow-hidden">
                  <img
                    src={division.image}
                    alt={division.name}
                    className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
                  <div className="absolute bottom-5 left-5 right-5 text-white">
                    <Icon className="mb-3 h-7 w-7 text-[#d4af37]" />
                    <h4 className="font-serif text-3xl">{division.name}</h4>
                    <p className="mt-1 text-sm text-white/80">{division.subtitle}</p>
                  </div>
                </div>
                <CardContent className="p-6">
                  <p className="text-sm leading-7 text-[#6b6044]">
                    {division.description}
                  </p>
                  <Button
                    onClick={() => setSelectedDivision(division.name)}
                    className="mt-5 rounded-full bg-[#111] text-white hover:bg-[#2c2416]"
                  >
                    View {division.name}
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </section>

      <section id="collections" className="mx-auto max-w-7xl px-5 py-16">
        <div className="mb-10 flex flex-col justify-between gap-5 md:flex-row md:items-end">
          <div>
            <p className="text-sm uppercase tracking-[0.32em] text-[#a47f1d]">
              Product Catalogue
            </p>
            <h3 className="mt-3 font-serif text-4xl md:text-5xl">
              Global Product Listings
            </h3>
            <p className="mt-4 max-w-2xl text-[#6b6044]">
              Upload your product images and list them under necklaces, pendant sets, earrings, rings, idols, silverware, utensils and more.
            </p>
          </div>
          <div className="flex items-center gap-2 rounded-full border border-[#d8c690]/60 bg-white px-4 py-3">
            <Search className="h-4 w-4 text-[#9a8233]" />
            <span className="text-sm text-[#6b6044]">
              Inquiry-first luxury shopping
            </span>
          </div>
        </div>

        <div className="mb-5 flex gap-3 overflow-x-auto pb-2">
          {["All", ...divisions.map((d) => d.name)].map((division) => (
            <button
              key={division}
              onClick={() => setSelectedDivision(division)}
              className={`whitespace-nowrap rounded-full border px-5 py-3 text-sm transition ${
                selectedDivision === division
                  ? "border-[#111] bg-[#111] text-white"
                  : "border-[#d8c690] bg-white text-[#4b432f] hover:border-[#111]"
              }`}
            >
              {division}
            </button>
          ))}
        </div>

        <div className="mb-9 flex gap-3 overflow-x-auto pb-2">
          {["All", ...productCategories].map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`whitespace-nowrap rounded-full border px-5 py-3 text-sm transition ${
                selectedCategory === cat
                  ? "border-[#b8942f] bg-[#b8942f] text-white"
                  : "border-[#d8c690] bg-white text-[#4b432f] hover:border-[#b8942f]"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="grid gap-7 md:grid-cols-3">
          {filteredProducts.map((product) => (
            <Card
              key={product.name}
              className="group overflow-hidden rounded-[1.8rem] border-[#d8c690]/50 bg-white shadow-sm transition hover:shadow-xl"
            >
              <div className="overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="h-72 w-full object-cover transition duration-700 group-hover:scale-105"
                />
              </div>
              <CardContent className="p-6">
                <div className="mb-3 flex items-center justify-between gap-3">
                  <p className="text-xs uppercase tracking-[0.24em] text-[#a47f1d]">
                    {product.division}
                  </p>
                  <span className="rounded-full bg-[#fbf8f1] px-3 py-1 text-xs text-[#6b6044]">
                    {product.category}
                  </span>
                </div>
                <h4 className="font-serif text-2xl">{product.name}</h4>
                <p className="mt-3 text-sm leading-6 text-[#6b6044]">
                  {product.description}
                </p>
                <div className="mt-5 flex items-center justify-between">
                  <span className="font-medium text-[#111]">{product.price}</span>
                  <Button
                    onClick={() => setSelectedProduct(product)}
                    className="rounded-full bg-[#111] text-white hover:bg-[#2c2416]"
                  >
                    Enquire
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section id="education" className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-5">
          <div className="mb-12 flex flex-col justify-between gap-5 md:flex-row md:items-end">
            <div>
              <p className="text-sm uppercase tracking-[0.35em] text-[#a47f1d]">
                ES Diamonds Education
              </p>
              <h3 className="mt-3 font-serif text-4xl md:text-5xl">
                Workshops, Seminars & Diamond Training
              </h3>
              <p className="mt-4 max-w-3xl text-[#6b6044]">
                A dedicated education section for your diamond workshops, seminars, corporate trainings and advanced diamond programs in Indore and beyond.
              </p>
            </div>
            <GraduationCap className="h-12 w-12 text-[#b8942f]" />
          </div>

          <div className="grid gap-6 md:grid-cols-4">
            {educationPrograms.map((program) => (
              <Card
                key={program.title}
                className="rounded-[1.8rem] border-[#d8c690]/50 bg-[#fbf8f1] shadow-sm"
              >
                <CardContent className="p-6">
                  <Sparkles className="mb-5 h-6 w-6 text-[#b8942f]" />
                  <p className="mb-3 text-xs uppercase tracking-[0.22em] text-[#a47f1d]">
                    {program.duration}
                  </p>
                  <h4 className="font-serif text-2xl">{program.title}</h4>
                  <p className="mt-4 text-sm leading-7 text-[#6b6044]">
                    {program.description}
                  </p>
                  <Button className="mt-6 rounded-full bg-[#111] text-white hover:bg-[#2c2416]">
                    Enquire for Program
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="custom-design" className="bg-[#111] py-20 text-white">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 md:grid-cols-2">
          <div>
            <p className="text-sm uppercase tracking-[0.32em] text-[#d4af37]">
              Design Your Own Jewellery
            </p>
            <h3 className="mt-3 font-serif text-4xl md:text-5xl">
              Upload a Design, Create a Concept & Get an Estimate
            </h3>
            <p className="mt-6 max-w-xl leading-8 text-white/70">
              Customers can upload their jewellery reference, sketch, idol concept or product image. Your team can review the design, suggest stone and metal options, and send an estimate so the customer can compare prices before ordering.
            </p>

            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              <div className="rounded-3xl border border-white/10 bg-white/5 p-5">
                <Upload className="mb-3 text-[#d4af37]" />
                <h4 className="font-serif text-xl">Upload Reference</h4>
                <p className="mt-2 text-sm text-white/65">
                  Upload image, sketch or jewellery inspiration.
                </p>
              </div>
              <div className="rounded-3xl border border-white/10 bg-white/5 p-5">
                <PenTool className="mb-3 text-[#d4af37]" />
                <h4 className="font-serif text-xl">Get Estimate</h4>
                <p className="mt-2 text-sm text-white/65">
                  Compare pricing, metal, stones and making options.
                </p>
              </div>
            </div>
          </div>

          <Card className="rounded-[2rem] border-[#d4af37]/30 bg-[#fbf8f1] text-[#111]">
            <CardContent className="p-7">
              <h4 className="font-serif text-3xl">Custom Design Request</h4>
              <p className="mt-2 text-sm text-[#6b6044]">
                Selected product: {selectedProduct.name}
              </p>

              <div className="mt-6 grid gap-4">
                <input
                  className="rounded-2xl border border-[#d8c690] bg-white px-4 py-4 outline-none"
                  placeholder="Your Name"
                />
                <input
                  className="rounded-2xl border border-[#d8c690] bg-white px-4 py-4 outline-none"
                  placeholder="Phone / WhatsApp with Country Code"
                />
                <input
                  className="rounded-2xl border border-[#d8c690] bg-white px-4 py-4 outline-none"
                  placeholder="Email Address"
                />

                <select className="rounded-2xl border border-[#d8c690] bg-white px-4 py-4 outline-none">
                  <option>Product Type</option>
                  {productCategories.map((cat) => (
                    <option key={cat}>{cat}</option>
                  ))}
                </select>

                <select className="rounded-2xl border border-[#d8c690] bg-white px-4 py-4 outline-none">
                  <option>Select Diamond / Stone Type</option>
                  {diamondTypes.map((d) => (
                    <option key={d}>{d}</option>
                  ))}
                </select>

                <select className="rounded-2xl border border-[#d8c690] bg-white px-4 py-4 outline-none">
                  <option>Select Metal</option>
                  {metals.map((m) => (
                    <option key={m}>{m}</option>
                  ))}
                </select>

                <label className="flex cursor-pointer flex-col items-center justify-center rounded-2xl border border-dashed border-[#b8942f] bg-white px-4 py-8 text-center">
                  <Upload className="mb-3 h-7 w-7 text-[#b8942f]" />
                  <span className="font-medium">Upload Design Image</span>
                  <span className="mt-1 text-xs text-[#6b6044]">
                    JPG, PNG or PDF reference
                  </span>
                  <input type="file" className="hidden" />
                </label>

                <textarea
                  className="min-h-28 rounded-2xl border border-[#d8c690] bg-white px-4 py-4 outline-none"
                  placeholder="Mention your size, budget, country, delivery timeline and any custom details"
                />

                <Button className="rounded-full bg-[#111] py-6 text-white hover:bg-[#2c2416]">
                  Request Estimate <MessageCircle className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-20">
        <div className="grid gap-7 md:grid-cols-4">
          {[
            ["Global Ready", "Built for international product enquiries"],
            ["Custom Orders", "Every product can be made to order"],
            ["Expert Led", "Diamond education-backed guidance"],
            ["Premium Divisions", "Brass, silver, diamonds and education"],
          ].map(([title, text]) => (
            <div
              key={title}
              className="rounded-[1.7rem] border border-[#d8c690]/60 bg-white p-7 text-center shadow-sm"
            >
              <Star className="mx-auto mb-4 h-6 w-6 text-[#b8942f]" />
              <h4 className="font-serif text-2xl">{title}</h4>
              <p className="mt-2 text-sm text-[#6b6044]">{text}</p>
            </div>
          ))}
        </div>
      </section>

      <footer id="contact" className="border-t border-[#d8c690]/50 bg-white">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 py-14 md:grid-cols-3">
          <div>
            <h3 className="font-serif text-3xl tracking-[0.12em]">
              ES DIAMONDS GLOBAL
            </h3>
            <p className="mt-4 max-w-sm text-sm leading-7 text-[#6b6044]">
              A global luxury platform for brass idols, silverware, diamond-studded creations, custom jewellery and diamond education.
            </p>
          </div>
          <div className="space-y-4 text-sm text-[#4b432f]">
            <p className="flex items-center gap-3">
              <Phone className="h-4 w-4 text-[#b8942f]" /> +91-9111191190
            </p>
            <p className="flex items-center gap-3">
              <Phone className="h-4 w-4 text-[#b8942f]" /> +91-9111191125
            </p>
            <p className="flex items-center gap-3">
              <Mail className="h-4 w-4 text-[#b8942f]" /> www.esdiamondsglobal.com
            </p>
          </div>
          <div className="space-y-4 text-sm text-[#4b432f]">
            <p className="flex items-center gap-3">
              <MapPin className="h-4 w-4 text-[#b8942f]" /> Indore, Madhya Pradesh, India
            </p>
            <p className="uppercase tracking-[0.18em] text-[#a47f1d]">
              ES Brass • ES Silvers • ES Diamonds • Education
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
