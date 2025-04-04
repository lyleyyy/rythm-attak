/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack(config) {
    config.module.rules.push({
      test: /\.(mp3|wav|ogg|aac)$/i,
      use: {
        loader: "file-loader",
        options: {
          name: "[name].[hash].[ext]",
          outputPath: "audios/",
        },
      },
    });

    return config;
  },

  images: {
    remotePatterns: [
      {
        protocol: "https",
        // hostname: "lh3.googleusercontent.com",
        hostname: "**",
        // port: "",
        // pathname: "/a/**",
        // search: "",
      },
      // {
      //   protocol: "https",
      //   hostname: "rzybqapngtswcbfvwpgw.supabase.co",
      //   port: "",
      //   pathname: "/storage/v1/object/sign/track_cover/**",
      //   search: "",
      // },
    ],
  },
  reactStrictMode: true,
};

export default nextConfig;
