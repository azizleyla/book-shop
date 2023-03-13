import "../styles/globals.css";
import type { AppProps } from "next/app";
import Layout from "../components/layout";
import "swiper/css";
import "swiper/css/navigation";


import { MutationCache, QueryCache, QueryClient, QueryClientProvider } from "@tanstack/react-query";

const mutationCache = new MutationCache({
  onError: (error, _variables, _context, mutation) => {
     // If this mutation has an onError defined, skip this
     if (mutation.options.onError) return;

     // any error handling code...
     console.error(error);
  }
});

const queryCache = new QueryCache({
  onError: (error, _query) => {
     console.log(error);
  }
})


const queryClient = new QueryClient({
  defaultOptions: {
     queries: {
        refetchOnWindowFocus: false,
     },
  },
  mutationCache,
  queryCache,
});


export default function App({ Component, pageProps }: AppProps) {
  return (
    <QueryClientProvider client={queryClient}>
    <Layout>
      <Component {...pageProps} />
    </Layout>
    </QueryClientProvider>
  );
}
