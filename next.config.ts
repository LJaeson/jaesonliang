import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactCompiler: true,
  async rewrites() {
    return {
      beforeFiles: [
        {
          source: '/',
          destination: '/Jaeson_Liang_academic_statement.pdf',
        },
      ],
    };
  },
  async headers() {
    return [
      {
        source: '/', 
        headers: [
          {
            key: 'Content-Disposition',
            value: 'attachment; filename="Jaeson_Liang_academic_statement.pdf"',
          },
        ],
      },
      {
        source: '/Jaeson_Liang_academic_statement.pdf', 
        headers: [
          {
            key: 'Content-Disposition',
            value: 'attachment; filename="Jaeson_Liang_academic_statement.pdf"',
          },
        ],
      },
    ];
  },
};

export default nextConfig;