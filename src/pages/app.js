import React from 'react';
import Layout from '@theme/Layout';

import HeroSectionFull from '../components/HeroSectionFull';
import CustomersSection from '../components/CustomersSection';
import DeveloperCommunitySection from '../components/DeveloperCommunitySection';
import SectionLayout from '../components/SectionLayout';
import FeatureSection from '../components/FeatureSection';
import Translate, { translate } from '@docusaurus/Translate';
const Platform = require('../../static/img/home/platform.svg').default;

const RealityWorld = () => {
  const more = <Translate>Read More</Translate>
  return (
    <Layout>
      <HeroSectionFull
        title="Reality World"
        image='/img/home/reality-create.png'
        buttons={[
          {
            title: "Read More",
            href: '/',
            className: 'button--primary',
          },
        ]}
      >
        <p><Translate>
          Reality World is an app which can load and run any agent defined by the Cogine agent format, it's also a simulator you can used to debug your agent program.
        </Translate></p>
        <p><Translate>User who installed the Reality World app can create and share agent each other. It makes Reality World a agent platform.</Translate></p>
      </HeroSectionFull>

      <FeatureSection
        title=<Translate>An agent VM, platform and simulator</Translate>
        btnLink="https://realityworld.com"
        btnText={more}
        image={Platform}
        direction="left"
      >
        <p>
          <Translate>We defined a agent format standard to represent a turing completed agent program which can be loaded and runned dynamically so everyone can develop an agent to handle personal needs.</Translate>

        </p>
        <p>
          <Translate>We then build a platform with a virtual machine to interpret and execute the above agent format program dynamically. By this dynamical capability, developer can create and share agent with users as simple as share a url.</Translate>

        </p>
      </FeatureSection>

      <DeveloperCommunitySection />
    </Layout>
  );
};

export default RealityWorld;
