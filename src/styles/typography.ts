import Typography from "typography";
import moraga from "typography-theme-moraga";

moraga.overrideThemeStyles = (styles, options) => ({
  "a:hover": {
    color: "#2a6496",
    textDecoration: "none",
  },
})

const typography = Typography(moraga);

// Export helper functions
export const { scale, rhythm, options } = typography;
export default typography;