/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    KAKAO_REST_API_KEY: process.env.KAKAO_REST_API_KEY,
    KAKAO_JAVASCRIPT_KEY: process.env.KAKAO_JAVASCRIPT_KEY,
  },

  async rewrites() {
    return [
      // {
      //   source: `http://${process.env.GUIDELY_SERVER_BASE_URL}/path:`,
      //   destination: "/path:",
      // },
      {
        source: "/entrancePage",
        destination: "/entrancePage/entrancePage",
      },
      {
        source: "/npwd/reportPage",
        destination: "/npwd/reportPage/reportPage",
      },
      {
        source: "/npwd/myPage/myActionPage",
        destination: "/npwd/myPage/myActionPage/myActionPage",
      },
      {
        source: "/npwd/boardPage",
        destination: "/npwd/boardPage/boardPage",
      },
      {
        source: "/npwd/myPage",
        destination: "/npwd/myPage/myPage",
      },
      {
        source: "/npwd/myPage/badgePage",
        destination: "/npwd/myPage/badgePage/badgePage",
      },
      {
        source: "/npwd/myPage/myActionPage",
        destination: "/npwd/myPage/myActionPage/myActionPage",
      },
      {
        source: "/npwd/mapPage",
        destination: "/npwd/mapPage/mapPage",
      },

      {
        source: "/pwd/homePage",
        destination: "/pwd/homePage/homePage",
      },
      {
        source: "/pwd/signalPage",
        destination: "/pwd/signalPage/signalPage",
      },
      {
        source: "/pwd/reportSearchPage",
        destination: "/pwd/reportSearchPage/reportSearchPage",
      },

      {
        source: "/api/guidely/:path*",
        destination: `http://${process.env.GUIDELY_SERVER_BASE_URL}/:path*`,
      },

      {
        source: "/api/kakao/signIn",
        destination: `https://kauth.kakao.com/oauth/authorize?response_type=code&client_id=${process.env.KAKAO_CLIENT_ID}&redirect_uri=http://${process.env.GUIDELY_CLIENT_BASE_URL}/entrancePage`,
      },
      {
        source: "/api/kakao/map/searchByKeyword",
        destination: `https://dapi.kakao.com/v2/local/search/keyword`,
      },
      {
        source: "/api/kakao/map/addressByCoor",
        destination: `https://dapi.kakao.com/v2/local/geo/coord2address`,
      },
      // {
      //   source: "/api/kakao/map/load",
      //   destination: `//dapi.kakao.com/v2/maps/sdk.js?appkey=${process.env.KAKAO_JAVASCRIPT_KEY}&autoload=false`,
      // },
    ];
  },
};

module.exports = nextConfig;
