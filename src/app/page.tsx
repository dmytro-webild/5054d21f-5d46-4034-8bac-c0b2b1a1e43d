"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import ContactSplitForm from '@/components/sections/contact/ContactSplitForm';
import FaqBase from '@/components/sections/faq/FaqBase';
import FeatureCardTwentyOne from '@/components/sections/feature/FeatureCardTwentyOne';
import FooterCard from '@/components/sections/footer/FooterCard';
import HeroSplitDualMedia from '@/components/sections/hero/HeroSplitDualMedia';
import MetricSplitMediaAbout from '@/components/sections/about/MetricSplitMediaAbout';
import NavbarStyleFullscreen from '@/components/navbar/NavbarStyleFullscreen/NavbarStyleFullscreen';
import PricingCardOne from '@/components/sections/pricing/PricingCardOne';
import ProductCardThree from '@/components/sections/product/ProductCardThree';
import SocialProofOne from '@/components/sections/socialProof/SocialProofOne';
import TestimonialCardTwelve from '@/components/sections/testimonial/TestimonialCardTwelve';
import { CheckCircle, Crown, Facebook, Gift, HelpCircle, Instagram, MessageSquare, ShoppingBag, Star, Tag, Twitter, User, Zap } from "lucide-react";

export default function LandingPage() {
  return (
    <ThemeProvider
        defaultButtonVariant="hover-magnetic"
        defaultTextAnimation="reveal-blur"
        borderRadius="rounded"
        contentWidth="small"
        sizing="largeSmallSizeMediumTitles"
        background="noiseDiagonalGradient"
        cardStyle="outline"
        primaryButtonStyle="diagonal-gradient"
        secondaryButtonStyle="radial-glow"
        headingFontWeight="light"
    >
      <ReactLenis root>
  <div id="nav" data-section="nav">
      <NavbarStyleFullscreen
      navItems={[
        {
          name: "Home",          id: "#hero"},
        {
          name: "Products",          id: "#products"},
        {
          name: "Pricing",          id: "#pricing"},
        {
          name: "About",          id: "#about"},
        {
          name: "Contact",          id: "#contact"},
      ]}
      logoSrc="http://img.b2bpic.net/free-photo/packaging-from-cardboard-kefir-corrugated-cardboard-close-up_493343-29827.jpg"
      logoAlt="EcomShop Logo"
      brandName="EcomShop"
      bottomLeftText="Worldwide Shipping"
      bottomRightText="support@ecomshop.com"
      button={{
        text: "Shop Now",        href: "#products"}}
    />
  </div>

  <div id="hero" data-section="hero">
      <HeroSplitDualMedia
      background={{
        variant: "downward-rays-static-grid"}}
      title="Shop Smarter, Live Better"
      description="Discover a curated selection of high-quality products. From cutting-edge electronics to unique lifestyle items, find everything you need with ease and confidence."
      tag="EcomShop"
      tagIcon={ShoppingBag}
      tagAnimation="slide-up"
      buttons={[
        {
          text: "Explore Products",          href: "#products"},
        {
          text: "Learn More",          href: "#about"},
      ]}
      buttonAnimation="slide-up"
      mediaItems={[
        {
          imageSrc: "http://img.b2bpic.net/free-photo/online-shopping-happy-young-man-using-smartphone-plastic-credit-card-paying-internet-standing_1258-163168.jpg",          imageAlt: "Person shopping online with a mobile phone"},
        {
          imageSrc: "http://img.b2bpic.net/free-photo/pencils-sticky-note-near-assorted-food_23-2147866318.jpg",          imageAlt: "Various consumer products laid out"}
      ]}
      mediaAnimation="slide-up"
      rating={5}
      ratingText="Trusted by thousands of happy customers"
    />
  </div>

  <div id="about" data-section="about">
      <MetricSplitMediaAbout
      useInvertedBackground={false}
      title="Our Commitment to Quality"
      description="At EcomShop, we believe in delivering not just products, but an exceptional shopping experience. We meticulously select each item, ensuring it meets our high standards for quality, innovation, and value. Join our community of satisfied customers and discover the difference."
      metrics={[
        {
          value: "1M+",          title: "Happy Customers"},
        {
          value: "500+",          title: "Brands Partnered"},
        {
          value: "24/7",          title: "Customer Support"},
      ]}
      tag="About Us"
      tagIcon={Star}
      tagAnimation="blur-reveal"
      imageSrc="http://img.b2bpic.net/free-photo/asian-person-checking-warehouse-supplies-from-shelves-using-supply-chain-production-work-inventory-laptop-young-man-planning-shipment-startup-business-development_482257-63017.jpg"
      imageAlt="Warehouse logistics and e-commerce shipping facility"
      mediaAnimation="blur-reveal"
      metricsAnimation="blur-reveal"
    />
  </div>

  <div id="features" data-section="features">
      <FeatureCardTwentyOne
      useInvertedBackground={false}
      title="Seamless Shopping Experience"
      description="From intuitive browsing to secure checkout, every step is designed for your convenience. Enjoy fast shipping, easy returns, and dedicated customer support."
      tag="Our Advantages"
      tagIcon={CheckCircle}
      tagAnimation="slide-up"
      accordionItems={[
        {
          id: "1",          title: "Secure Payment Gateways",          content: "Shop with confidence knowing your transactions are protected by industry-leading encryption and secure payment processing. We support all major credit cards and popular digital wallets."},
        {
          id: "2",          title: "Fast & Reliable Shipping",          content: "We partner with top logistics providers to ensure your orders arrive quickly and safely. Track your package every step of the way, from our warehouse to your doorstep."},
        {
          id: "3",          title: "Hassle-Free Returns",          content: "Not completely satisfied with your purchase? Our straightforward return policy makes exchanges and refunds simple and stress-free. Your satisfaction is our priority."},
        {
          id: "4",          title: "24/7 Customer Support",          content: "Our dedicated support team is available around the clock to assist you with any questions, concerns, or issues. Get prompt and helpful assistance whenever you need it."},
      ]}
      imageSrc="http://img.b2bpic.net/free-photo/abstract-cybersecurity-concept-design_23-2151841675.jpg"
      imageAlt="Secure online payment processing illustration"
      mediaAnimation="blur-reveal"
      mediaPosition="right"
    />
  </div>

  <div id="products" data-section="products">
      <ProductCardThree
      animationType="slide-up"
      textboxLayout="default"
      gridVariant="four-items-2x2-equal-grid"
      useInvertedBackground={false}
      carouselMode="buttons"
      products={[
        {
          id: "p1",          name: "Smartwatch Pro",          price: "$299",          imageSrc: "http://img.b2bpic.net/free-photo/front-view-clock-wooden-table_23-2148281047.jpg",          imageAlt: "Sleek black smartwatch"},
        {
          id: "p2",          name: "Wireless Headphones",          price: "$199",          imageSrc: "http://img.b2bpic.net/free-photo/company-friends-having-fun-together-park-listening-music_285396-11157.jpg",          imageAlt: "White noise-cancelling headphones"},
        {
          id: "p3",          name: "Portable Power Bank",          price: "$49",          imageSrc: "http://img.b2bpic.net/free-photo/minimalist-tech-setup-with-old-hard-disk_58702-17223.jpg",          imageAlt: "Compact black power bank"},
        {
          id: "p4",          name: "Smart Home Speaker",          price: "$129",          imageSrc: "http://img.b2bpic.net/free-photo/woman-digital-disconnecting-home-by-listening-music-vinyl_23-2150037442.jpg",          imageAlt: "Minimalist smart home speaker"},
        {
          id: "p5",          name: "Ergonomic Wireless Mouse",          price: "$39",          imageSrc: "http://img.b2bpic.net/free-photo/designer-working-concentration-computers-people_1301-2064.jpg",          imageAlt: "Ergonomic wireless mouse"},
        {
          id: "p6",          name: "Premium Laptop Bag",          price: "$89",          imageSrc: "http://img.b2bpic.net/free-photo/elegant-businessman-with-bag_23-2148012934.jpg",          imageAlt: "Stylish professional laptop bag"},
      ]}
      title="Featured Products"
      description="Explore our best-selling items and new arrivals, hand-picked for their quality and popularity. Find your next favorite gadget or accessory."
      tag="Shop Now"
      tagIcon={Tag}
      tagAnimation="opacity"
    />
  </div>

  <div id="pricing" data-section="pricing">
      <PricingCardOne
      animationType="slide-up"
      textboxLayout="default"
      useInvertedBackground={false}
      carouselMode="buttons"
      plans={[
        {
          id: "standard",          badge: "Standard",          badgeIcon: User,
          price: "Free",          subtitle: "Basic features for everyone",          features: [
            "Access to core products",            "Standard shipping (5-7 days)",            "Email support"],
        },
        {
          id: "premium",          badge: "Premium",          badgeIcon: Zap,
          price: "$9.99/month",          subtitle: "Unlock exclusive benefits",          features: [
            "All Standard features",            "Exclusive product discounts",            "Expedited shipping (2-3 days)",            "Priority email & chat support"],
        },
        {
          id: "vip",          badge: "VIP",          badgeIcon: Crown,
          price: "$29.99/month",          subtitle: "Ultimate shopping experience",          features: [
            "All Premium features",            "Early access to new products",            "Free express shipping (1-2 days)",            "24/7 Phone & dedicated support",            "Personalized recommendations"],
        },
      ]}
      title="Choose Your Plan"
      description="Select the perfect plan that fits your shopping needs. Enjoy exclusive perks and enhanced services with our premium subscriptions."
      tag="Memberships"
      tagIcon={Gift}
      tagAnimation="opacity"
    />
  </div>

  <div id="testimonials" data-section="testimonials">
      <TestimonialCardTwelve
      useInvertedBackground={false}
      testimonials={[
        {
          id: "t1",          name: "Sarah J.",          imageSrc: "http://img.b2bpic.net/free-photo/arm-close-up-woman-with-shopping-bags_1098-2428.jpg",          imageAlt: "Sarah Johnson, a happy customer"},
        {
          id: "t2",          name: "Michael D.",          imageSrc: "http://img.b2bpic.net/free-photo/business-man-phone_23-2148018598.jpg",          imageAlt: "Michael David, a satisfied client"},
        {
          id: "t3",          name: "Emily R.",          imageSrc: "http://img.b2bpic.net/free-photo/smiley-woman-being-happy-about-her-shopping-spree-looking-up-with-copy-space_23-2148673301.jpg",          imageAlt: "Emily Roberts, unboxing her order"},
        {
          id: "t4",          name: "David K.",          imageSrc: "http://img.b2bpic.net/free-photo/smiling-people-dressed-smartly_1262-772.jpg",          imageAlt: "David Kim, a professional customer"},
        {
          id: "t5",          name: "Olivia M.",          imageSrc: "http://img.b2bpic.net/free-photo/young-international-couple-working-together-use-laptop_1157-29553.jpg",          imageAlt: "Olivia Miller, delighted with her purchase"},
        {
          id: "t6",          name: "James L.",          imageSrc: "http://img.b2bpic.net/free-photo/skilled-female-interior-designer-draws-sketches-ortable-tablet-with-stylus-listens-music-headphones-weras-neat-clothes-poses-outside-against-modern-city-buildings_273609-55148.jpg",          imageAlt: "James Lee, a satisfied tech user"},
      ]}
      cardTitle="What Our Customers Say"
      cardTag="Customer Stories"
      cardTagIcon={MessageSquare}
      buttons={[
        {
          text: "Read All Reviews",          href: "#testimonials"},
      ]}
      cardAnimation="slide-up"
    />
  </div>

  <div id="social-proof" data-section="social-proof">
      <SocialProofOne
      textboxLayout="default"
      useInvertedBackground={false}
      names={[
        "Google",        "Amazon",        "Shopify",        "FedEx",        "UPS",        "PayPal",        "Visa"]}
      title="Trusted by Leading Brands"
      description="Our commitment to excellence is reflected in the partnerships we've built with industry leaders. We ensure seamless integration and reliable service for every customer."
      tag="Partners"
      tagIcon={CheckCircle}
      tagAnimation="opacity"
      speed={50}
      showCard={true}
    />
  </div>

  <div id="faq" data-section="faq">
      <FaqBase
      textboxLayout="default"
      useInvertedBackground={false}
      faqs={[
        {
          id: "q1",          title: "What payment methods do you accept?",          content: "We accept all major credit cards (Visa, Mastercard, Amex), PayPal, and Apple Pay for your convenience and security."},
        {
          id: "q2",          title: "How long does shipping take?",          content: "Standard shipping typically takes 5-7 business days. Expedited options are available at checkout for faster delivery, ranging from 1-3 business days depending on your location."},
        {
          id: "q3",          title: "Can I return an item if I'm not satisfied?",          content: "Yes, we offer hassle-free returns within 30 days of purchase. Items must be in original condition with all packaging. Please visit our Returns Policy page for more details."},
        {
          id: "q4",          title: "Do you offer international shipping?",          content: "Currently, we ship to select countries. During checkout, you can check if we deliver to your region by entering your shipping address."},
      ]}
      title="Frequently Asked Questions"
      description="Find quick answers to the most common questions about our products, shipping, returns, and more. If you can't find what you're looking for, feel free to contact us directly."
      tag="Help Center"
      tagIcon={HelpCircle}
      tagAnimation="slide-up"
      faqsAnimation="blur-reveal"
    />
  </div>

  <div id="contact" data-section="contact">
      <ContactSplitForm
      useInvertedBackground={false}
      title="Get in Touch with Us"
      description="Have a question or need assistance? Our dedicated customer support team is here to help. Fill out the form below, and we'll get back to you as soon as possible."
      inputs={[
        {
          name: "name",          type: "text",          placeholder: "Your Name",          required: true,
        },
        {
          name: "email",          type: "email",          placeholder: "Your Email",          required: true,
        },
      ]}
      textarea={{
        name: "message",        placeholder: "Your Message",        rows: 5,
        required: true,
      }}
      imageSrc="http://img.b2bpic.net/free-photo/young-woman-talking-phone_23-2147859177.jpg"
      imageAlt="Customer service representative with a headset"
      mediaAnimation="opacity"
      mediaPosition="left"
      buttonText="Send Message"
    />
  </div>

  <div id="footer" data-section="footer">
      <FooterCard
      logoSrc="http://img.b2bpic.net/free-photo/packaging-from-cardboard-kefir-corrugated-cardboard-close-up_493343-29827.jpg"
      logoText="EcomShop"
      copyrightText="© 2024 EcomShop. All rights reserved."
      socialLinks={[
        {
          icon: Facebook,
          href: "#",          ariaLabel: "Facebook"},
        {
          icon: Twitter,
          href: "#",          ariaLabel: "Twitter"},
        {
          icon: Instagram,
          href: "#",          ariaLabel: "Instagram"},
      ]}
    />
  </div>
      </ReactLenis>
    </ThemeProvider>
  );
}
