/** @type {import("snowpack").SnowpackUserConfig } */
module.exports = {
  mount: {
    src: "/",
  },
  packageOptions: {
    external: [
      "crypto",
      "events",
      "fs",
      "http",
      "https",
      "net",
      "os",
      "path",
      "stream",
      "tls",
      "url",
      "zlib",
    ],
  },
};
