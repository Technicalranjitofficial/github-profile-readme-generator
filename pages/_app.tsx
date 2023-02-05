import '@/styles/globals.css'
import SEO from '@bradgarropy/next-seo'
import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {
  return <>
   <SEO title="Github Profile Readme Generator" description="A tool for github profile readme generator"
    keywords={['generator','github','readme-generator','github readme generator','github-profile','github-readme']} icon="/github.ico" twitter={{
      image: "/homepage.png",
      site: "@technicalranjit",
      card: "summary",
  }}
  facebook={{
    image:"./homepage.png",
    type:"website",
    url:"https://github.com/Technicalranjitofficial/github-profile-readme-generator"
  }}

  />
  <Component {...pageProps} />
  </>
}
