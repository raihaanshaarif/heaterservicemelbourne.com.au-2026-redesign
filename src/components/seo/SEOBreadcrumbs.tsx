"use client";

import Link from "next/link";
import { JSONLDScript } from "./JSONLDScript";

export interface BreadcrumbItem {
  name: string;
  url: string;
}

interface SEOBreadcrumbsProps {
  items: BreadcrumbItem[];
  schema?: boolean;
}

export const SEOBreadcrumbs: React.FC<SEOBreadcrumbsProps> = ({
  items,
  schema = true,
}) => {
  // Generate JSON-LD BreadcrumbList schema
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };

  return (
    <>
      {schema && <JSONLDScript schema={breadcrumbSchema} id="breadcrumb-schema" />}
      <nav
        aria-label="Breadcrumb"
        className="breadcrumb-nav"
        style={{ marginBottom: "20px" }}
      >
        <ol
          style={{
            listStyle: "none",
            padding: 0,
            margin: 0,
            display: "flex",
            flexWrap: "wrap",
            gap: "8px",
          }}
        >
          {items.map((item, index) => (
            <li
              key={item.url}
              style={{
                display: "flex",
                alignItems: "center",
                gap: "8px",
              }}
            >
              {index > 0 && (
                <span
                  style={{
                    color: "#999",
                    margin: "0 4px",
                  }}
                >
                  /
                </span>
              )}
              {index === items.length - 1 ? (
                <span
                  style={{
                    color: "#666",
                    fontSize: "14px",
                  }}
                  itemProp="name"
                >
                  {item.name}
                </span>
              ) : (
                <Link
                  href={item.url}
                  style={{
                    color: "#0066cc",
                    textDecoration: "none",
                    fontSize: "14px",
                  }}
                  itemProp="url"
                >
                  {item.name}
                </Link>
              )}
            </li>
          ))}
        </ol>
      </nav>
    </>
  );
};
