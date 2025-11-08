'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import {
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Github,
  Mail,
  MapPin,
  Phone,
  ArrowRight,
  Heart,
} from 'lucide-react';

const DEFAULT_FOOTER = {
  logoText: 'TestSite',
  companyDescription:
    'A simple test website showcasing modern web development with beautiful animations and clean design.',
  contactEmail: 'hello@testsite.com',
  contactPhone: '+1 (555) 123-4567',
  contactAddress: '123 Test Ave, Suite 100',
  newsletterTitle: 'Stay Updated',
  newsletterPlaceholder: 'Enter your email',
  newsletterDisclaimer: 'Get the latest updates. No spam, unsubscribe anytime.',
  section1Title: 'Product',
  section2Title: 'Company',
  section3Title: 'Resources',
  section4Title: 'Legal',
  copyrightText: '© 2024 TestSite. All rights reserved.',
  madeWithText: 'with modern tech',
  socialText: 'Follow us:',
  social1Href: 'https://twitter.com',
  social2Href: 'https://facebook.com',
  social3Href: 'https://instagram.com',
  social4Href: 'https://linkedin.com',
  social5Href: 'https://github.com',
  // Product Links
  linkFeatures: 'Features',
  linkFeaturesHref: '#features',
  linkPricing: 'Pricing',
  linkPricingHref: '#pricing',
  linkTemplates: 'Templates',
  linkTemplatesHref: '/templates',
  linkIntegrations: 'Integrations',
  linkIntegrationsHref: '/integrations',
  linkApi: 'API',
  linkApiHref: '/api',
  linkDocumentation: 'Documentation',
  linkDocumentationHref: '/docs',
  // Company Links
  linkAbout: 'About Us',
  linkAboutHref: '#about',
  linkBlog: 'Blog',
  linkBlogHref: '/blog',
  linkCareers: 'Careers',
  linkCareersHref: '/careers',
  linkPress: 'Press',
  linkPressHref: '/press',
  linkPartners: 'Partners',
  linkPartnersHref: '/partners',
  linkContact: 'Contact',
  linkContactHref: '#contact',
  // Resources Links
  linkHelp: 'Help Center',
  linkHelpHref: '/help',
  linkCommunity: 'Community',
  linkCommunityHref: '/community',
  linkTutorials: 'Tutorials',
  linkTutorialsHref: '/tutorials',
  linkWebinars: 'Webinars',
  linkWebinarsHref: '/webinars',
  linkCaseStudies: 'Case Studies',
  linkCaseStudiesHref: '/case-studies',
  linkStatus: 'Status',
  linkStatusHref: '/status',
  // Legal Links
  linkPrivacy: 'Privacy Policy',
  linkPrivacyHref: '/privacy',
  linkTerms: 'Terms of Service',
  linkTermsHref: '/terms',
  linkCookies: 'Cookie Policy',
  linkCookiesHref: '/cookies',
  linkGdpr: 'GDPR',
  linkGdprHref: '/gdpr',
  linkSecurity: 'Security',
  linkSecurityHref: '/security',
  linkCompliance: 'Compliance',
  linkComplianceHref: '/compliance',
  // Bottom Links
  linkSitemap: 'Sitemap',
  linkSitemapHref: '/sitemap',
  linkAccessibility: 'Accessibility',
  linkAccessibilityHref: '/accessibility',
  linkCookieSettings: 'Cookie Settings',
  linkCookieSettingsHref: '/cookies',
  linkSupport: 'Support',
  linkSupportHref: '/support',
} as const;

type FooterProps = Partial<typeof DEFAULT_FOOTER>;

export default function Footer(props: FooterProps) {
  const config = { ...DEFAULT_FOOTER, ...props };

  // Simplified footer sections structure
  const footerSections = [
    {
      title: config.section1Title,
      titleKey: 'section1Title',
      links: [
        {
          name: config.linkFeatures,
          href: config.linkFeaturesHref,
          nameKey: 'linkFeatures',
          hrefKey: 'linkFeaturesHref',
        },
        {
          name: config.linkPricing,
          href: config.linkPricingHref,
          nameKey: 'linkPricing',
          hrefKey: 'linkPricingHref',
        },
        {
          name: config.linkTemplates,
          href: config.linkTemplatesHref,
          nameKey: 'linkTemplates',
          hrefKey: 'linkTemplatesHref',
        },
      ],
    },
    {
      title: config.section2Title,
      titleKey: 'section2Title',
      links: [
        {
          name: config.linkAbout,
          href: config.linkAboutHref,
          nameKey: 'linkAbout',
          hrefKey: 'linkAboutHref',
        },
        {
          name: config.linkBlog,
          href: config.linkBlogHref,
          nameKey: 'linkBlog',
          hrefKey: 'linkBlogHref',
        },
        {
          name: config.linkContact,
          href: config.linkContactHref,
          nameKey: 'linkContact',
          hrefKey: 'linkContactHref',
        },
      ],
    },
    {
      title: config.section3Title,
      titleKey: 'section3Title',
      links: [
        {
          name: config.linkHelp,
          href: config.linkHelpHref,
          nameKey: 'linkHelp',
          hrefKey: 'linkHelpHref',
        },
        {
          name: config.linkCommunity,
          href: config.linkCommunityHref,
          nameKey: 'linkCommunity',
          hrefKey: 'linkCommunityHref',
        },
        {
          name: config.linkTutorials,
          href: config.linkTutorialsHref,
          nameKey: 'linkTutorials',
          hrefKey: 'linkTutorialsHref',
        },
      ],
    },
    {
      title: config.section4Title,
      titleKey: 'section4Title',
      links: [
        {
          name: config.linkPrivacy,
          href: config.linkPrivacyHref,
          nameKey: 'linkPrivacy',
          hrefKey: 'linkPrivacyHref',
        },
        {
          name: config.linkTerms,
          href: config.linkTermsHref,
          nameKey: 'linkTerms',
          hrefKey: 'linkTermsHref',
        },
        {
          name: config.linkSupport,
          href: config.linkSupportHref,
          nameKey: 'linkSupport',
          hrefKey: 'linkSupportHref',
        },
      ],
    },
  ];

  const socialLinks = [
    { name: 'Twitter', icon: Twitter, href: config.social1Href, hrefKey: 'social1Href' },
    { name: 'GitHub', icon: Github, href: config.social5Href, hrefKey: 'social5Href' },
  ];

  const bottomLinks = [
    {
      name: config.linkPrivacy,
      href: config.linkPrivacyHref,
      nameKey: 'linkPrivacy',
      hrefKey: 'linkPrivacyHref',
    },
    {
      name: config.linkTerms,
      href: config.linkTermsHref,
      nameKey: 'linkTerms',
      hrefKey: 'linkTermsHref',
    },
  ];

  return (
    <footer
      id="footer"
      data-editable="footer"
      className="bg-background border-t border-border/50 mt-20"
    >
      {/* Minimal Footer Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2 space-y-4">
            <div>
              <Link href="/" className="flex items-center space-x-2 mb-3">
                <div className="size-8 rounded-lg bg-gradient-to-br from-primary to-primary/60 flex items-center justify-center">
                  <span className="text-primary-foreground font-bold text-sm">
                    {config.logoText.charAt(0)}
                  </span>
                </div>
                <span className="font-bold text-lg" data-editable="logoText">
                  {config.logoText}
                </span>
              </Link>
              <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                <span data-editable="companyDescription">{config.companyDescription}</span>
              </p>
            </div>

            {/* Contact Info - Simplified */}
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-sm">
                <Mail className="size-3 text-primary flex-shrink-0" />
                <span className="text-muted-foreground" data-editable="contactEmail">
                  {config.contactEmail}
                </span>
              </div>
            </div>
          </div>

          {/* Footer Links - Simplified */}
          <div className="lg:col-span-3 grid grid-cols-2 md:grid-cols-4 gap-6">
            {footerSections.map((section, index) => (
              <div key={index} className="space-y-3">
                <h4 className="font-semibold text-sm" data-editable={section.titleKey}>
                  {section.title}
                </h4>
                <ul className="space-y-2">
                  {section.links.map((link, linkIndex) => (
                    <li key={linkIndex}>
                      <Link
                        href={link.href}
                        data-editable-href={link.hrefKey}
                        data-href={link.href}
                        className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-200"
                      >
                        <span data-editable={link.nameKey}>{link.name}</span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Bar - Simplified */}
      <div className="border-t border-border/50 bg-muted/10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-3">
            {/* Copyright */}
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <span data-editable="copyrightText">{config.copyrightText}</span>
              <span className="hidden sm:inline">•</span>
              <span className="hidden sm:inline flex items-center gap-1">
                Made <Heart className="size-3 text-red-500 fill-current" />
                <span data-editable="madeWithText">{config.madeWithText}</span>
              </span>
            </div>

            {/* Social Links - Minimal */}
            <div className="flex items-center gap-3">
              {socialLinks.map((social, index) => {
                const Icon = social.icon;
                return (
                  <Link
                    key={index}
                    href={social.href}
                    aria-label={social.name}
                    className="size-7 rounded-md bg-muted hover:bg-primary/20 flex items-center justify-center transition-colors duration-200 group"
                    data-editable-href={social.hrefKey}
                    data-href={social.href}
                  >
                    <Icon className="size-3 text-muted-foreground group-hover:text-primary transition-colors" />
                  </Link>
                );
              })}
            </div>
          </div>

          {/* Bottom Links - Minimal */}
          <div className="flex justify-center gap-4 mt-3 pt-3 border-t border-border/20">
            {bottomLinks.map((link, index) => (
              <Link
                key={index}
                href={link.href}
                data-editable-href={link.hrefKey}
                data-href={link.href}
                className="text-xs text-muted-foreground hover:text-foreground transition-colors"
              >
                <span data-editable={link.nameKey}>{link.name}</span>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
