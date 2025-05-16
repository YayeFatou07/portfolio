import React from "react";
import MotionWrapper from "./MotionWrapper";
import { GlassCard } from "./ui/glass-card";
import { motion } from "framer-motion";

export default function FeaturesSection() {
  return (
    <section className="py-12 bg-gradient-to-b from-background to-muted/10">
      <div className="container max-w-4xl mx-auto px-6 md:px-4">
        {/* Section vide - à remplacer avec votre contenu */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {/* Ici vous pouvez ajouter vos nouveaux composants */}
        </div>
      </div>
    </section>
  );
}