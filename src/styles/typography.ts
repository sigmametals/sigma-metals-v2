import Typography from "typography";
import theme from "typography-theme-moraga";

theme.overrideThemeStyles = (styles, options) => ({
  'h1,h2,h3,h4,h5,h6': {
    marginTop: '0rem',
  },
  'a': {
    textDecoration: 'none',
    boxShadow: 'none',
  },
  'a:hover': {
    // color: "#2a6496",
    textDecoration: 'none',
  },
})

const typography = Typography(theme);

// Export helper functions
export const { scale, rhythm, options } = typography;
export default typography;