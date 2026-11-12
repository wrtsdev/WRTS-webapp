import { useEffect } from 'react';

const portalId = '247477120';
const region = 'na2';
const formId = (import.meta.env.VITE_HUBSPOT_DECEMBER_DASH_FORM_ID || '').trim();

/**
 * December Dash uses its own HubSpot form, not the generic Join WRTS form.
 * Do not replace this with a custom unauthenticated CRM API call or infer
 * event interest from a page visit. The form must submit the canonical
 * wrts_challenge_interest field with value "December Dash 2026".
 */
export default function DecemberDashInterestForm() {
  useEffect(() => {
    if (!formId) return;
    const src = 'https://js-na2.hsforms.net/forms/embed/247477120.js';
    if (document.querySelector('script[data-wrts-hubspot]')) return;
    const script = document.createElement('script');
    script.src = src;
    script.defer = true;
    script.dataset.wrtsHubspot = 'true';
    document.body.appendChild(script);
  }, []);

  return (
    <section id="december-dash-interest" className="dashInterest" aria-labelledby="dash-interest-title">
      <div className="dashInterestIntro">
        <span className="eyebrow">December Dash 2026 · Virtual Movement</span>
        <h3 id="dash-interest-title">Interested in December Dash?</h3>
        <p>Run or walk from wherever you are. Tell us you'd like event updates,
          and we'll share confirmed details when they're available.</p>
        <p className="dashInterestNote">This is an interest form, not a race registration or purchase.</p>
      </div>
      {formId ? (
        <div className="hubspotWrap dashInterestForm">
          <div
            className="hs-form-frame"
            data-region={region}
            data-form-id={formId}
            data-portal-id={portalId}
          />
        </div>
      ) : (
        <p className="dashInterestPending" role="status">
          The December Dash interest form is being connected. Please check back for updates.
        </p>
      )}
    </section>
  );
}
