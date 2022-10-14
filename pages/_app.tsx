import "../styles/globals.css";
import type { AppProps } from "next/app";

function MyApp({ Component, pageProps }: AppProps) {
  if (process.env.NEXT_PUBLIC_API_MOCKING === "enabled") {
    import("../mocks");
  }
  return <Component {...pageProps} />;
}

export default MyApp;
