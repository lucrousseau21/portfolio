/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',  // Génération d'un site statique
  distDir: 'out',
  images: {
    unoptimized: true,  // Désactive l'optimisation des images
  },   // Définit le dossier de sortie
};

export default nextConfig;