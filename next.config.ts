import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    // ⚠️ Mergear SOLO cuando alkia.cl resuelva y cargue con SSL.
    // panel.miasistia.cl NO pasa por este proyecto — no se ve afectado.
    return [
      {
        source: "/:path*",
        has: [{ type: "host", value: "miasistia.cl" }],
        destination: "https://alkia.cl/:path*",
        permanent: true, // 308
      },
      {
        source: "/:path*",
        has: [{ type: "host", value: "www.miasistia.cl" }],
        destination: "https://alkia.cl/:path*",
        permanent: true, // 308
      },
      {
        source: "/:path*",
        has: [{ type: "host", value: "www.alkia.cl" }],
        destination: "https://alkia.cl/:path*",
        permanent: true, // 308 — canónico sin www
      },
    ];
  },
};

export default nextConfig;
