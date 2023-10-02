import React from 'react';
import Layout from '@theme/Layout';
import HeroSection from '../components/HeroSection';
import CustomersSection from '../components/CustomersSection';
import DeveloperCommunitySection from '../components/DeveloperCommunitySection';
import FeatureSection from '../components/FeatureSection';
import SectionLayout from '../components/SectionLayout';

const Icon3 = require('../../static/img/home-buildingblocks.svg').default;
const Flow = require('../../static/img/home/flow.png').default;
const Format = require('../../static/img/home/format.png').default;
const Platform = require('../../static/img/home/platform.png').default;

const title = 'Reality World';
const description = 'Creating an intelligent reality with AI';

const IndexPage = () => {
  return (
    <Layout title={title} description={description}>
      <HeroSection
        title="Creating an intelligent reality with AI"
        description=""
        image="/img/home-hero.svg"
        buttons={[
          {
            title: 'Whitepaper',
            href: 'https://realityworld.com/docs',
            className: 'button--primary',
          },
          {
            title: 'Get Started',
            href: '',
            className: 'button--primary button--outline',
          },
        ]}
      />

      <CustomersSection />

      <FeatureSection
        title="Let everyone can write AI agent"
        btnLink="https://realityworld.com"
        btnText="Read More"
        image={Icon3}
        direction="right"
      >
        <p>
          We have curated a list of awesome open-source developer security
          tools.
        </p>
        <p>
          It includes security principles and controls relevant to popular
          compliance certifications (like ISO27001, SOC2, MVSP, etc.)
        </p>
      </FeatureSection>

      <FeatureSection
        title="An agent format standard"
        btnLink="https://realityworld.com"
        btnText="Read More"
        image={Icon3}
        direction="left"
      >
        <p>
          We have curated a list of awesome open-source developer security
          tools.
        </p>
        <p>
          It includes security principles and controls relevant to popular
          compliance certifications (like ISO27001, SOC2, MVSP, etc.)
        </p>
      </FeatureSection>

      <FeatureSection
        title="A platform & VM to run agent from anyone"
        btnLink="https://realityworld.com"
        btnText="Read More"
        image={Icon3}
        direction="right"
      >
        <p>
          We have curated a list of awesome open-source developer security
          tools.
        </p>
        <p>
          It includes security principles and controls relevant to popular
          compliance certifications (like ISO27001, SOC2, MVSP, etc.)
        </p>
      </FeatureSection>

      <FeatureSection
        title="Agent can interoperate with anyone self"
        btnLink="https://realityworld.com"
        btnText="Read More"
        image={Icon3}
        direction="left"
      >
        <p>
          We have curated a list of awesome open-source developer security
          tools.
        </p>
        <p>
          It includes security principles and controls relevant to popular
          compliance certifications (like ISO27001, SOC2, MVSP, etc.)
        </p>
      </FeatureSection>

      <FeatureSection
        title="Conversational computing"
        btnLink="https://realityworld.com"
        btnText="Read More"
        image={Icon3}
        direction="right"
      >
        <p>
          We have curated a list of awesome open-source developer security
          tools.
        </p>
        <p>
          It includes security principles and controls relevant to popular
          compliance certifications (like ISO27001, SOC2, MVSP, etc.)
        </p>
      </FeatureSection>

      <SectionLayout title="Key Features and Benefits" description="">
        <div className="row">
          <div className="col col--8 col--offset-2">
            <div className="col-demo center">
              <div>
                <ul>
                  <li>
                    <b>Reduce time to market:</b> Build and ship
                    enterprise-grade products
                  </li>
                  <li>
                    <b>Cost Savings:</b> Save money optimizing development costs
                  </li>
                  <li>
                    <b>Develop secure applications:</b> Our APIs integrate
                    security best practices into your development process
                  </li>
                  <li>
                    <b>Enhanced Efficiency:</b> With an intuitive interface and
                    powerful features, businesses can automate tasks, optimize
                    workflows, and maximize efficiency
                  </li>
                  <li>
                    <b>Full Support:</b> BoxyHQ is committed to providing
                    exceptional support to its customers, ensuring a smooth
                    onboarding process and continued assistance throughout their
                    journey
                  </li>
                  <li>
                    <b>Advanced Security:</b> BoxyHQ prioritizes data security,
                    employing robust measures to safeguard sensitive information
                    and ensure peace of mind
                  </li>
                  <li>
                    <b>Seamless Integrations:</b> Integrate with the most
                    popular SSO providers such as Okta, Microsoft Entra ID,
                    Auth0, Google and more
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </SectionLayout>

      <DeveloperCommunitySection />
    </Layout>
  );
};

export default IndexPage;
