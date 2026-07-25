import React from "react";
import { useNavigate } from "react-router";
import Navbar from "../components/Navbar";
import {
  Zap,
  Package,
  Users,
  Star,
  Truck,
  ShieldCheck,
  Heart,
  ArrowRight,
} from "lucide-react";

const stats = [
  { icon: Package, value: "20K+", label: "Products" },
  { icon: Users, value: "50K+", label: "Happy Customers" },
  { icon: Star, value: "4.9", label: "Avg. Rating" },
  { icon: Truck, value: "99%", label: "On-time Delivery" },
];

const values = [
  {
    icon: ShieldCheck,
    title: "Trust",
    desc: "Every product is verified for quality and authenticity before listing.",
  },
  {
    icon: Truck,
    title: "Speed",
    desc: "We obsess over delivery times so your orders arrive when promised.",
  },
  {
    icon: Heart,
    title: "Community",
    desc: "Built around real customer feedback, not just business metrics.",
  },
  {
    icon: Star,
    title: "Quality",
    desc: "We curate the best — no filler, no junk, just great products.",
  },
];

const team = [
  { initial: "D", name: "Deepanshu Singhal", role: "Founder & CEO", color: "bg-lime-400 text-black" },
  { initial: "D", name: "Deepanshu Singhal", role: "Head of Product", color: "bg-blue-500 text-white" },
  { initial: "D", name: "Deepanshu Singhal", role: "Lead Engineer", color: "bg-purple-500 text-white" },
  { initial: "D", name: "Deepanshu Singhal", role: "Design Director", color: "bg-pink-500 text-white" },
];

const About = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-[#0B0B0B]">
      <Navbar />

      <div className="mx-auto max-w-5xl px-8 py-16">
        {/* Hero */}
        <div className="flex flex-col items-center text-center">
          <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-lime-400">
            <Zap size={30} className="fill-black text-black" />
          </div>

          <h1 className="mt-6 text-5xl font-extrabold text-white">
            About <span className="text-lime-400">SkyMart</span>
          </h1>

          <p className="mt-4 max-w-xl text-gray-400">
            SkyMart is a next-generation e-commerce platform built to make
            online shopping fast, fair, and enjoyable — for everyone.
          </p>
        </div>

        {/* Stats */}
        <div className="mt-12 grid grid-cols-2 gap-4 md:grid-cols-4">
          {stats.map(({ icon: Icon, value, label }) => (
            <div
              key={label}
              className="rounded-2xl border border-gray-800 px-4 py-8 text-center"
            >
              <Icon size={22} className="mx-auto text-lime-400" />
              <p className="mt-4 text-2xl font-extrabold text-white">
                {value}
              </p>
              <p className="mt-1 text-sm text-gray-500">{label}</p>
            </div>
          ))}
        </div>

        {/* Our Story */}
        <div className="mt-8 rounded-2xl border border-gray-800 p-8">
          <h2 className="text-2xl font-extrabold text-white">Our Story</h2>

          <p className="mt-5 leading-relaxed text-gray-400">
            SkyMart started in 2022 as a small side project — two engineers
            tired of bloated, slow e-commerce experiences. We asked
            ourselves: what if shopping online was actually{" "}
            <em className="text-gray-300">enjoyable</em>?
          </p>

          <p className="mt-4 leading-relaxed text-gray-400">
            Three years later, SkyMart serves over 50,000 customers across
            the country. We stock electronics, fashion, jewelry, and everyday
            essentials — all at prices that don't require a second mortgage.
          </p>

          <p className="mt-4 leading-relaxed text-gray-400">
            We're still the same team at heart: obsessed with speed,
            transparency, and making you feel good about every purchase you
            make here.
          </p>
        </div>

        {/* What We Stand For */}
        <h2 className="mt-16 text-center text-3xl font-extrabold text-white">
          What We Stand For
        </h2>

        <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2">
          {values.map(({ icon: Icon, title, desc }) => (
            <div
              key={title}
              className="flex gap-4 rounded-2xl border border-gray-800 p-6"
            >
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-lime-400/10">
                <Icon size={20} className="text-lime-400" />
              </div>
              <div>
                <h3 className="font-bold text-white">{title}</h3>
                <p className="mt-1 text-sm leading-relaxed text-gray-400">
                  {desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Meet the Team */}
        <h2 className="mt-16 text-center text-3xl font-extrabold text-white">
          Meet the Team
        </h2>

        <div className="mt-8 grid grid-cols-2 gap-6 md:grid-cols-4">
          {team.map(({ initial, name, role, color }) => (
            <div
              key={name}
              className="rounded-2xl border border-gray-800 p-6 text-center"
            >
              <div
                className={`mx-auto flex h-14 w-14 items-center justify-center rounded-2xl text-xl font-bold ${color}`}
              >
                {initial}
              </div>
              <p className="mt-4 font-bold text-white">{name}</p>
              <p className="mt-1 text-sm text-gray-500">{role}</p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-16 rounded-2xl border border-gray-800 p-12 text-center">
          <h2 className="text-3xl font-extrabold text-white">
            Ready to shop?
          </h2>
          <p className="mt-3 text-gray-400">
            Explore thousands of products at unbeatable prices.
          </p>

          <button
            onClick={() => navigate("/shop")}
            className="mt-6 inline-flex items-center gap-2 rounded-full bg-lime-400 px-6 py-3 font-bold text-black transition-all duration-300 hover:bg-lime-300"
          >
            Browse Products
            <ArrowRight size={18} />
          </button>
        </div>
      </div>

      {/* Footer */}
      <footer className="border-t border-gray-800 py-8 text-center">
        <p className="text-lg font-extrabold text-lime-400">SkyMart</p>
        <p className="mt-1 text-sm text-gray-500">
          © 2025 SkyMart • Built with React + Redux + TanStack Query
        </p>
      </footer>
    </div>
  );
};

export default About;