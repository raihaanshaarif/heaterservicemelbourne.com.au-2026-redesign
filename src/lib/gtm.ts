// GTM / dataLayer event helpers
// All events flow through GTM → GA4 + Google Ads via triggers set in GTM

function push(event: Record<string, unknown>) {
  if (typeof window !== "undefined") {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    (window as any).dataLayer = (window as any).dataLayer || [];
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    (window as any).dataLayer.push(event);
  }
}

/** Fire when a phone number link is clicked */
export function trackPhoneClick(location: string) {
  push({
    event: "phone_call_click",
    phone_number: "0405133761",
    click_location: location, // e.g. "header", "footer", "emergency_banner"
  });
}

/** Fire when the contact form is successfully submitted */
export function trackFormSubmission(formName: string) {
  push({
    event: "form_submission",
    form_name: formName, // e.g. "contact_form"
  });
}

/** Fire for Google Ads conversion — call this alongside trackFormSubmission */
export function trackAdsConversion(conversionLabel?: string) {
  push({
    event: "ads_conversion",
    conversion_label: conversionLabel ?? "contact_form_lead",
  });
}
