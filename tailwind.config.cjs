/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    screens: {
      'sm': '640px',
      'md': '768px',
      'lg': '1000px',
      'xl': '1366px',
    },

    extend: {
      colors: {
        
        primary: {
          DEFAULT: "#4F4F4F",
        },
        secondary: {
          DEFAULT: "#333333",
        },
        priceColor: {
          true: "#DB2C66",
          false: "#828282",
          success: "#2DD06E",
        },
        success: {
          DEFAULT:"#2DD06E",
        },
        danger: {
          DEFAULT:"#EA4335",
        },
        muted: {
          DEFAULT:"#828282",
          dark:"#BDBDBD",
        },
        secondaryBg: {
          DEFAULT:"#262626",
        },
        primaryBg: {
          DEFAULT:"#F5F5F5",
        },
        mutedBg: {
          DEFAULT:"#F2F2F2",
        },
        info: {
          DEFAULT:"#2D9CDB",
        },
        edit: {
          DEFAULT:"#3366FF",
        },



      },
      borderRadius: {
        btn: "50px",
        input: "50px",
        card: "10px"
      },

       fontFamily: {
        euclid: ['Roboto, sans-serif'],
        roboto: ['Roboto, sans-serif'],
        dmSans: ['DM Sans, sans-serif'],
      }, 

    },

    container: {
      center: true,
      padding: {
        DEFAULT: "15px",
        sm:"20px",
        md: "50px",
        lg:"75px"

      },
    },

  },
  plugins: [],
}
