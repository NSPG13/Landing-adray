import Container from "@/components/ui/Container";
import { brandify } from "@/lib/utils";

export const metadata = {
    title: "Terms and Conditions",
};

export default function TermsAndConditionsPage() {
    return (
        <section className="pt-32 pb-24">
            <Container>
                <h1 className="t-h2 text-white-100 mb-4">Terms and Conditions</h1>
                <p className="t-p text-ad-muted mb-12">
                    Last updated: September 2025
                </p>

                <div className="space-y-10 max-w-3xl">
                    <div>
                        <h2 className="t-h4 text-white-100 mb-3">1. Acceptance of Terms</h2>
                        <p className="t-p text-ad-muted leading-relaxed">
                            {brandify("By accessing or using the Adray platform, website, and any associated services (collectively, the \"Services\"), you agree to be bound by these Terms and Conditions. If you do not agree to all terms, you must not use the Services.")}
                        </p>
                    </div>

                    <div>
                        <h2 className="t-h4 text-white-100 mb-3">2. Use of Services</h2>
                        <p className="t-p text-ad-muted leading-relaxed">
                            You agree to use the Services only for lawful purposes and in accordance
                            with these Terms. You are responsible for ensuring that your use of the
                            Services complies with all applicable laws, rules, and regulations.
                        </p>
                    </div>

                    <div>
                        <h2 className="t-h4 text-white-100 mb-3">3. Account Registration</h2>
                        <p className="t-p text-ad-muted leading-relaxed">
                            To access certain features, you may be required to create an account.
                            You agree to provide accurate information, maintain the security of your
                            account credentials, and promptly notify us of any unauthorized use.
                        </p>
                    </div>

                    <div>
                        <h2 className="t-h4 text-white-100 mb-3">4. Intellectual Property</h2>
                        <p className="t-p text-ad-muted leading-relaxed">
                            {brandify("All content, features, and functionality of the Services are owned by Adray and are protected by international copyright, trademark, and other intellectual property laws. You may not reproduce, distribute, or create derivative works without our express written permission.")}
                        </p>
                    </div>

                    <div>
                        <h2 className="t-h4 text-white-100 mb-3">5. Limitation of Liability</h2>
                        <p className="t-p text-ad-muted leading-relaxed">
                            {brandify("Adray shall not be liable for any indirect, incidental, special, consequential, or punitive damages resulting from your use of or inability to use the Services.")}
                        </p>
                    </div>

                    <div>
                        <h2 className="t-h4 text-white-100 mb-3">6. Termination</h2>
                        <p className="t-p text-ad-muted leading-relaxed">
                            We may terminate or suspend your access to the Services at any time,
                            without prior notice, for conduct that we believe violates these Terms
                            or is harmful to other users, us, or third parties.
                        </p>
                    </div>

                    <div>
                        <h2 className="t-h4 text-white-100 mb-3">7. Changes to Terms</h2>
                        <p className="t-p text-ad-muted leading-relaxed">
                            We reserve the right to modify these Terms at any time. We will notify
                            users of material changes by posting the updated Terms on this page.
                            Your continued use of the Services after changes constitutes acceptance.
                        </p>
                    </div>

                    <div>
                        <h2 className="t-h4 text-white-100 mb-3">8. Contact</h2>
                        <p className="t-p text-ad-muted leading-relaxed">
                            If you have any questions about these Terms, please contact us through
                            our website or at the contact information provided on the platform.
                        </p>
                    </div>
                </div>
            </Container>
        </section>
    );
}
