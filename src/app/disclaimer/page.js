import ViewerLayout from "@/components/viewer/viewer-layout"
import Icon from "@/components/icon"

export const metadata = {
  title: "Disclaimer - NextCodeHub",
  description: "Important disclaimer information for NextCodeHub. Read about the limitations, warranties, and use of our educational content and code examples.",
}

export default function DisclaimerPage() {
  return (
    <ViewerLayout>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h1 className="text-4xl sm:text-5xl font-extrabold text-heading mb-6">
          <span className="bg-gradient-to-r from-blog-primary via-blog-secondary to-blog-primary bg-clip-text text-transparent">
            Disclaimer
          </span>
        </h1>
        <p className="text-lg text-content-secondary mb-8">
          Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
        </p>

        <div className="bg-yellow-500/10 border border-yellow-500/30 rounded-xl p-6 mb-8">
          <div className="flex items-start space-x-3">
            <Icon name="alert-triangle" className="w-6 h-6 text-yellow-600 dark:text-yellow-500 flex-shrink-0 mt-1" />
            <div>
              <h2 className="font-bold text-heading mb-2">Important Notice</h2>
              <p className="text-content-secondary">
                Please read this disclaimer carefully before using NextCodeHub. By accessing and using this website, you accept and agree to be bound by the terms and provisions of this disclaimer.
              </p>
            </div>
          </div>
        </div>

        <div className="prose prose-lg max-w-none space-y-8">
          <section>
            <h2 className="text-2xl font-bold text-heading mb-4">1. General Information Disclaimer</h2>
            <p className="text-content-secondary leading-relaxed">
              The information provided on NextCodeHub is for general educational and informational purposes only. All content, including tutorials, articles, code examples, and other materials, is provided "as is" without any representations or warranties, express or implied.
            </p>
            <p className="text-content-secondary leading-relaxed">
              NextCodeHub makes no representations or warranties in relation to the accuracy, completeness, or suitability of the information and materials found or offered on this website for any particular purpose. You acknowledge that such information and materials may contain inaccuracies or errors, and we expressly exclude liability for any such inaccuracies or errors to the fullest extent permitted by law.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-heading mb-4">2. Educational Content Disclaimer</h2>
            <p className="text-content-secondary leading-relaxed">
              NextCodeHub provides educational content about web development, programming, and related technologies. While we strive to ensure the accuracy and quality of our tutorials:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-content-secondary mt-4">
              <li>We make no warranty that the content is error-free, up-to-date, or complete</li>
              <li>We do not guarantee that following our tutorials will result in any specific outcome</li>
              <li>We are not responsible for how you use or implement the information provided</li>
              <li>The content reflects best practices at the time of writing but technology evolves rapidly</li>
              <li>Different environments, configurations, and versions may produce different results</li>
            </ul>
            <p className="text-content-secondary leading-relaxed mt-4">
              All tutorials and code examples should be tested thoroughly in a development environment before being used in production systems.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-heading mb-4">3. Code Examples and Software Disclaimer</h2>
            <p className="text-content-secondary leading-relaxed">
              All code examples, scripts, and software provided on NextCodeHub are offered for educational purposes and should be used at your own risk:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-content-secondary mt-4">
              <li><strong>No Warranty:</strong> Code is provided "as is" without warranty of any kind, either expressed or implied</li>
              <li><strong>Testing Required:</strong> Always test code in a safe, controlled environment before production use</li>
              <li><strong>Security Considerations:</strong> We are not responsible for security vulnerabilities that may arise from implementing our code</li>
              <li><strong>Compatibility:</strong> Code may not work in all environments, versions, or configurations</li>
              <li><strong>Dependencies:</strong> Third-party libraries and packages may have their own licenses and terms</li>
              <li><strong>Updates:</strong> Code examples may become outdated as technologies evolve</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-heading mb-4">4. Professional Advice Disclaimer</h2>
            <p className="text-content-secondary leading-relaxed">
              The content on NextCodeHub is not a substitute for professional advice. We do not provide:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-content-secondary mt-4">
              <li>Professional IT consulting or system architecture advice</li>
              <li>Legal advice regarding software licenses, intellectual property, or compliance</li>
              <li>Security auditing or penetration testing services</li>
              <li>Career counseling or employment recommendations</li>
              <li>Financial advice regarding technology investments</li>
            </ul>
            <p className="text-content-secondary leading-relaxed mt-4">
              If you require professional advice in any of these areas, please consult with qualified professionals in the respective fields.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-heading mb-4">5. No Liability for Damages</h2>
            <p className="text-content-secondary leading-relaxed">
              To the maximum extent permitted by applicable law, NextCodeHub and its team members, contributors, and affiliates will not be liable for any damages whatsoever arising out of or related to the use of this website, including but not limited to:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-content-secondary mt-4">
              <li>Direct, indirect, incidental, punitive, or consequential damages</li>
              <li>Loss of profits, revenue, data, or use</li>
              <li>Business interruption or loss of business opportunities</li>
              <li>Damages resulting from bugs, errors, or security vulnerabilities in code examples</li>
              <li>System failures, data corruption, or hardware damage</li>
              <li>Costs of procurement of substitute goods or services</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-heading mb-4">6. Third-Party Content and Links</h2>
            <p className="text-content-secondary leading-relaxed">
              NextCodeHub may contain links to third-party websites, services, tools, or resources. We provide these links for convenience and informational purposes only:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-content-secondary mt-4">
              <li>We have no control over the content of third-party websites</li>
              <li>We do not endorse, verify, or guarantee third-party content</li>
              <li>We are not responsible for the availability, accuracy, or content of external sites</li>
              <li>Links do not imply any official endorsement or partnership</li>
              <li>We are not liable for any harm or damages related to third-party resources</li>
            </ul>
            <p className="text-content-secondary leading-relaxed mt-4">
              When you click on a third-party link, you leave our website and are subject to the terms and privacy policies of that external site.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-heading mb-4">7. Technology and Version Changes</h2>
            <p className="text-content-secondary leading-relaxed">
              Web development technologies evolve rapidly, and what is considered best practice today may change:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-content-secondary mt-4">
              <li>Tutorials may reference specific versions of libraries, frameworks, or tools</li>
              <li>Breaking changes in newer versions may make older tutorials incompatible</li>
              <li>Security vulnerabilities may be discovered in technologies we've covered</li>
              <li>Deprecated features may be used in older tutorials</li>
              <li>We cannot guarantee that all content will be updated to reflect the latest versions</li>
            </ul>
            <p className="text-content-secondary leading-relaxed mt-4">
              Always check official documentation for the most current information about any technology.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-heading mb-4">8. User Responsibility</h2>
            <p className="text-content-secondary leading-relaxed">
              As a user of NextCodeHub, you acknowledge and agree that:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-content-secondary mt-4">
              <li>You are solely responsible for your use of the information provided</li>
              <li>You must independently verify any information before relying on it</li>
              <li>You are responsible for implementing proper security measures</li>
              <li>You must ensure compliance with all applicable laws and regulations</li>
              <li>You are responsible for maintaining backups of your data and systems</li>
              <li>You accept all risks associated with implementing any code or techniques from this site</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-heading mb-4">9. Comments and User-Generated Content</h2>
            <p className="text-content-secondary leading-relaxed">
              Comments and contributions from users do not reflect the views of NextCodeHub:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-content-secondary mt-4">
              <li>We are not responsible for user-submitted content or comments</li>
              <li>User comments may contain inaccuracies or errors</li>
              <li>We do not endorse or verify information provided by users</li>
              <li>We reserve the right to remove any user content without notice</li>
              <li>Users are responsible for their own contributions</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-heading mb-4">10. Advertising and Affiliate Disclaimer</h2>
            <p className="text-content-secondary leading-relaxed">
              NextCodeHub may display advertisements and participate in affiliate programs:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-content-secondary mt-4">
              <li>We participate in the Google AdSense program</li>
              <li>We may earn commissions from affiliate links to products or services</li>
              <li>Advertisements do not constitute endorsements of products or services</li>
              <li>We are not responsible for the quality, accuracy, or safety of advertised products</li>
              <li>We have no control over advertiser content or practices</li>
            </ul>
            <p className="text-content-secondary leading-relaxed mt-4">
              Our affiliate relationships do not influence the content or recommendations we provide in our tutorials.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-heading mb-4">11. Fair Use Notice</h2>
            <p className="text-content-secondary leading-relaxed">
              NextCodeHub respects intellectual property rights. If you believe any content on our site infringes your copyright or other rights, please contact us immediately with details, and we will investigate and take appropriate action.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-heading mb-4">12. Changes to This Disclaimer</h2>
            <p className="text-content-secondary leading-relaxed">
              NextCodeHub reserves the right to modify this disclaimer at any time. Changes will be effective immediately upon posting to the website. Your continued use of the site after changes are posted constitutes your acceptance of the modified disclaimer.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-heading mb-4">13. Contact Information</h2>
            <p className="text-content-secondary leading-relaxed mb-4">
              If you have any questions or concerns about this disclaimer, please contact us:
            </p>
            <div className="bg-muted rounded-xl p-6">
              <p className="text-content-primary mb-2">
                <strong>Email:</strong>{" "}
                <a href="mailto:legal@nextcodehub.com" className="text-blog-primary hover:text-blog-secondary">
                  legal@nextcodehub.com
                </a>
              </p>
              <p className="text-content-primary">
                <strong>Website:</strong>{" "}
                <a href="/contact" className="text-blog-primary hover:text-blog-secondary">
                  Contact Form
                </a>
              </p>
            </div>
          </section>

          <section className="bg-gradient-to-r from-blog-primary/10 via-blog-secondary/10 to-blog-primary/10 rounded-2xl p-8 mt-12">
            <div className="flex items-start space-x-3">
              <Icon name="info" className="w-6 h-6 text-blog-primary flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-xl font-bold text-heading mb-4">Final Note</h3>
                <p className="text-content-secondary leading-relaxed mb-4">
                  This disclaimer is an integral part of our Terms of Service. By using NextCodeHub, you acknowledge that you have read, understood, and agree to be bound by this disclaimer.
                </p>
                <p className="text-content-secondary leading-relaxed">
                  We are committed to providing high-quality educational content, but we encourage you to always exercise caution, perform your own research, and test thoroughly before implementing any code or techniques in production environments.
                </p>
              </div>
            </div>
          </section>
        </div>
      </div>
    </ViewerLayout>
  )
}
