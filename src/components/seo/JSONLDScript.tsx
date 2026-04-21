"use client";

import Script from "next/script";
import { FC, ReactNode } from "react";

interface JSONLDScriptProps {
  schema: Record<string, any>;
  id?: string;
}

/**
 * JSON-LD Schema Script Component
 * Renders structured data for better SEO
 * Usage: <JSONLDScript schema={generateLocalBusinessSchema()} />
 */
export const JSONLDScript: FC<JSONLDScriptProps> = ({ schema, id }) => {
  return (
    <Script
      id={id || "json-ld-schema"}
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(schema),
      }}
      strategy="afterInteractive"
    />
  );
};

/**
 * Multiple JSON-LD Schemas Script
 * Renders multiple structured data schemas
 */
export const MultipleJSONLDScripts: FC<{
  schemas: Array<{ schema: Record<string, any>; id: string }>;
}> = ({ schemas }) => {
  return (
    <>
      {schemas.map(({ schema, id }) => (
        <JSONLDScript key={id} schema={schema} id={id} />
      ))}
    </>
  );
};
