// import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { unstable_setRequestLocale } from "next-intl/server";
import { client } from "../../../../lib/contentful/client";

export const runtime = "edge";

async function getContentfulContent() {
  const res = await client.getEntries({
    content_type: "privacyPolicy",
  });

  return res.items;
}
export default async function PolitykaPrywatnosci({ params: { locale } }) {
  unstable_setRequestLocale(locale);

  const privacyPolicy = await getContentfulContent();

  return (
    <div className="pt-48">
      <section className="max-w-4xl mx-auto px-8 mb-16">
        <article>
          <h1>{privacyPolicy[0].fields.title}</h1>
          <div className="text-base leading-relaxed my-8">
            {/* {documentToReactComponents(privacyPolicy[0].fields.body)} */}
          </div>
        </article>
      </section>
    </div>
  );
}
