import Link from 'next/link';

export const metadata = {
  title: "Terms of Service - NextCodeHub",
  description: "Terms and conditions for using NextCodeHub calculators and tools.",
};

export default function TermsOfServicePage() {
  return (
    <div className="bg-gray-50 min-h-screen py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl shadow-sm border border-gray-100 p-8 md:p-12">
          
          <div className="border-b border-gray-100 pb-8 mb-8 text-center">
            <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 tracking-tight mb-4">
              Terms of Service
            </h1>
            <p className="text-gray-500">Last updated: April 18, 2026</p>
          </div>

          <div className="space-y-8 text-gray-600 leading-relaxed">
            
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Acceptance of Terms</h2>
              <p className="mb-4">
                By accessing and using NextCodeHub ("the Website"), you accept and agree to be bound by the terms and provisions of this agreement. If you do not agree to abide by these Terms of Service, please do not use this Website.
              </p>
              <p>
                We reserve the right to modify these terms at any time. Your continued use of the Website following the posting of changes constitutes your acceptance of such changes.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Use License</h2>
              <p className="mb-4">
                Permission is granted to temporarily download one copy of the materials (tutorials, code examples, articles) on NextCodeHub for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license you may not:
              </p>
              <ul className="list-disc pl-6 space-y-2 mb-4">
                <li>Modify or copy the materials for commercial purposes</li>
                <li>Use the materials for any commercial purpose or public display</li>
                <li>Attempt to decompile or reverse engineer any software contained on the Website</li>
                <li>Remove any copyright or other proprietary notations from the materials</li>
                <li>Transfer the materials to another person or "mirror" the materials on any other server</li>
              </ul>
              <p>
                All code examples provided in our tutorials are available for educational purposes and may be used in your personal or commercial projects with proper attribution to NextCodeHub.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">3. Intellectual Property Rights</h2>
              <p className="mb-4">
                The content, organization, graphics, design, compilation, magnetic translation, digital conversion, and other matters related to the Website are protected under applicable copyrights, trademarks, and other proprietary rights. The copying, redistribution, use, or publication by you of any such matters or any part of the Website is strictly prohibited.
              </p>
              <p>
                All trademarks, service marks, and trade names are proprietary to NextCodeHub or other respective owners that have granted NextCodeHub the right and license to use such marks.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">4. User Conduct and Responsibilities</h2>
              <p className="mb-4">When using the Website, you agree to:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Provide accurate, current, and complete information when commenting or contacting us</li>
                <li>Not impersonate any person or entity or misrepresent your affiliation with any person or entity</li>
                <li>Not engage in any activity that interferes with or disrupts the Website or servers</li>
                <li>Not post or transmit any content that is unlawful, harmful, threatening, abusive, harassing, defamatory, vulgar, obscene, or otherwise objectionable</li>
                <li>Not upload or transmit viruses or any other type of malicious code</li>
                <li>Not collect or store personal data about other users without their express consent</li>
                <li>Not violate any applicable local, state, national, or international law</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Educational Disclaimer</h2>
              <p className="mb-4">
                NextCodeHub provides educational content and tutorials for learning purposes. While we strive for accuracy and quality, we make no representations or warranties of any kind about the completeness, accuracy, reliability, suitability, or availability of the information, products, services, or related graphics contained on the Website.
              </p>
              <p>
                Any reliance you place on such information is strictly at your own risk. We strongly recommend testing all code examples in a safe development environment before deploying to production systems.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Third-Party Links and Resources</h2>
              <p className="mb-4">
                The Website may contain links to third-party websites or services that are not owned or controlled by NextCodeHub. We have no control over, and assume no responsibility for, the content, privacy policies, or practices of any third-party websites or services.
              </p>
              <p>
                You acknowledge and agree that NextCodeHub shall not be responsible or liable, directly or indirectly, for any damage or loss caused or alleged to be caused by or in connection with the use of any such content, goods, or services available on or through any such websites or services.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">7. Limitation of Liability</h2>
              <p className="mb-4">
                In no event shall NextCodeHub, nor its directors, employees, partners, agents, suppliers, or affiliates, be liable for any indirect, incidental, special, consequential, or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Your access to or use of or inability to access or use the Website</li>
                <li>Any conduct or content of any third party on the Website</li>
                <li>Any content obtained from the Website</li>
                <li>Unauthorized access, use, or alteration of your transmissions or content</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">8. Indemnification</h2>
              <p className="mb-4">
                You agree to defend, indemnify, and hold harmless NextCodeHub and its licensee and licensors, and their employees, contractors, agents, officers, and directors, from and against any and all claims, damages, obligations, losses, liabilities, costs or debt, and expenses (including but not limited to attorney's fees), resulting from or arising out of:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Your use and access of the Website</li>
                <li>Your violation of any term of these Terms of Service</li>
                <li>Your violation of any third party right, including without limitation any copyright, property, or privacy right</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">9. Comments and User-Generated Content</h2>
              <p className="mb-4">
                If you post comments or submit content to the Website, you grant NextCodeHub a non-exclusive, royalty-free, perpetual, irrevocable, and fully sublicensable right to use, reproduce, modify, adapt, publish, translate, create derivative works from, distribute, and display such content throughout the world in any media.
              </p>
              <p>
                You represent and warrant that you own or control all rights to the content you post and that the content does not violate these Terms of Service or any applicable law.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">10. Account Termination</h2>
              <p className="mb-4">
                We reserve the right to terminate or suspend access to the Website immediately, without prior notice or liability, for any reason whatsoever, including without limitation if you breach the Terms of Service.
              </p>
              <p>
                All provisions of the Terms of Service which by their nature should survive termination shall survive termination, including, without limitation, ownership provisions, warranty disclaimers, indemnity, and limitations of liability.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">11. Advertising and Monetization</h2>
              <p className="mb-4">
                NextCodeHub may display advertisements and sponsorships to support the free availability of our content. We use third-party advertising companies to serve ads when you visit the Website. These companies may use information about your visits to this and other websites in order to provide advertisements about goods and services of interest to you.
              </p>
              <p>
                We participate in the Google AdSense program. For more information about how Google uses data when you use our Website, please see our Privacy Policy and Google's Privacy & Terms.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">12. Changes to Content</h2>
              <p>
                We reserve the right at any time and from time to time to modify, discontinue, temporarily or permanently, the Website (or any part thereof) with or without notice. You agree that NextCodeHub shall not be liable to you or to any third party for any modification, suspension, or discontinuance of the Website.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">13. Governing Law</h2>
              <p className="mb-4">
                These Terms shall be governed and construed in accordance with the laws of the United States, without regard to its conflict of law provisions. Our failure to enforce any right or provision of these Terms will not be considered a waiver of those rights.
              </p>
              <p>
                If any provision of these Terms is held to be invalid or unenforceable by a court, the remaining provisions of these Terms will remain in effect.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">14. Severability</h2>
              <p>
                If any provision of these Terms of Service is found to be unenforceable or invalid, that provision will be limited or eliminated to the minimum extent necessary so that these Terms of Service will otherwise remain in full force and effect and enforceable.
              </p>
            </section>

            <section className="bg-[var(--color-primary-50)] p-6 rounded-2xl border border-[var(--color-primary-100)] text-[var(--color-primary-900)] my-8">
              <h2 className="text-2xl font-bold mb-3">Agreement</h2>
              <p>
                By using NextCodeHub, you acknowledge that you have read these Terms of Service and agree to be bound by them. If you do not agree with any part of these terms, you must not use our Website. Thank you for being a part of the NextCodeHub community!
              </p>
            </section>

            <section className="bg-gray-50 p-6 rounded-2xl border border-gray-100">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">15. Contact Information</h2>
              <p className="mb-4">If you have any questions about these Terms of Service, please contact us:</p>
              <ul className="space-y-3">
               
                <li className="flex items-center gap-3">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--color-primary-500)" strokeWidth="2"><circle cx="12" cy="12" r="10"></circle><line x1="2" y1="12" x2="22" y2="12"></line><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path></svg>
                  <span><strong>Website:</strong> <Link href="/contact" className="text-[var(--color-primary-600)] hover:underline">Contact Form</Link></span>
                </li>
              </ul>
            </section>

          </div>
        </div>
      </div>
    </div>
  );
}