import { NextSeo } from "next-seo";


const title = "Unite Hacks";
const description =
  "Unite Hacks is a 12-hour hackathon that will be held in-person on October 22nd 2022, at the Circuit Launch in Oakland, CA.";
const url = "https://unitehacks.com";


const Meta = () => {
  return(
    <>
      <NextSeo
        title={title}
        description={description}
        openGraph={{
          title,
          description,
          url,
          type: "website",
          images: [
            {
              url: `${url}/og1.png`,
              width: 1200,
              height: 630,
              alt: "Unite Hacks. An in-person hackathon in Oakland, CA. October 22nd, 2022",
              type: "image/png",
            },
          ],
        }}
        twitter={{
          cardType: "summary_large_image",
        }}
      />
    </>
  )
  }

export default Meta;