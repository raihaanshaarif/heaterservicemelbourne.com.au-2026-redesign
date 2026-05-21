import { FC } from "react";

interface JSONLDScriptProps {
  schema: Record<string, unknown>;
  id?: string;
}

/**
 * JSON-LD Schema Script Component
 * Server-rendered for SEO crawlers that disable JavaScript.
 * Usage: <JSONLDScript schema={generateLocalBusinessSchema()} />
 */
export const JSONLDScript: FC<JSONLDScriptProps> = ({ schema, id }) => {
  return (
    <script
      id={id || "json-ld-schema"}
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(schema),
      }}
    />
  );
};

/**
 * Multiple JSON-LD Schemas Script
 * Renders multiple structured data schemas
 */
export const MultipleJSONLDScripts: FC<{
  schemas: Array<{ schema: Record<string, unknown>; id: string }>;
}> = ({ schemas }) => {
  return (
    <>
      {schemas.map(({ schema, id }) => (
        <JSONLDScript key={id} schema={schema} id={id} />
      ))}
    </>
  );
};
