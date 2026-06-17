import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactCompiler: true,
  async rewrites() {
    return {
      beforeFiles: [
        {
          source: '/',
          has: [
            {
              type: 'host',
              value: 'transcript.jaesonliang.com',
            },
          ],
          destination: '/Jaeson_Liang_academic_statement.pdf',
        },
        {
          source: '/',
          has: [
            {
              type: 'host',
              value: 'resume.jaesonliang.com',
            },
          ],
          destination: '/Jaeson_Liang_Resume.pdf',
        },
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
        has: [
          {
            type: 'host',
            value: 'transcript.jaesonliang.com',
          },
        ],
        headers: [
          {
            key: 'Content-Disposition',
            value: 'attachment; filename="Jaeson_Liang_academic_statement.pdf"',
          },
        ],
      },
      {
        source: '/',
        has: [
          {
            type: 'host',
            value: 'resume.jaesonliang.com',
          },
        ],
        headers: [
          {
            key: 'Content-Disposition',
            value: 'attachment; filename="Jaeson_Liang_Resume.pdf"',
          },
        ],
      },
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
      {
        source: '/Jaeson_Liang_Resume.pdf',
        headers: [
          {
            key: 'Content-Disposition',
            value: 'attachment; filename="Jaeson_Liang_Resume.pdf"',
          },
        ],
      },
    ];
  },
};

export default nextConfig;