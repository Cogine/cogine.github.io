import React from 'react';
import Layout from '@theme/Layout';

import HeroSectionFull from '../components/HeroSectionFull';
import CustomersSection from '../components/CustomersSection';
import FeatureSection from '../components/FeatureSection';
import FeatureSectionImage from '../components/FeatureSectionImage';
import Translate, { translate } from '@docusaurus/Translate';
import DeveloperCommunitySection from '../components/DeveloperCommunitySection';

const Conversational = require('../../static/img/home/conversational.svg').default;

const Cogine = () => {
  const more = <Translate>Read More</Translate>
  return (
    <Layout>
      <HeroSectionFull
        title="Cogine"
        image='/img/home/cogine.png'
        buttons={[
          {
            title: "Read More",
            href: '/',
            className: 'button--primary',
          },
        ]}
      >
        <p><Translate>
          Cogine is the virtual machine and base framework of Reality World, it defined a standard agent(a micro-program) format, and it can load and run multi-agent dynamically with the ability to interoperate and communicate with each other.
        </Translate></p>
        <p><Translate>The term Cogine stands for An engine of complexity, or an cognitive computing engine, or conversational computing engine.</Translate></p>
        <p><Translate>And you can deploy it yourself within your own application.</Translate></p>
      </HeroSectionFull>


      <CustomersSection />
      <FeatureSection
        title=<Translate>Multi-agent conversational collaborating framework</Translate>
        btnLink="https://realityworld.com"
        imgWidth='600px'
        imgHeight='auto'
        btnText={more}
        image={Conversational}
        direction="right"
      >
        <p>
          <Translate>Agents can commnuicating with user, system and other agents in a very simple way which provides the ability to finish a task in a collaberating way.</Translate>

        </p>
        <p>
          <Translate>In a LLM-powered application, the inputs of a function is semantic instead of structured data, which brings uncertainty and needs conversational way to get more information. For solve this problem, we propose a new concept and a novel architecture called "Conversational computing" for the first time in the world, to make any function can be paused and conversational commnuicating with user, system and other agents to get full information it needs without extra works.</Translate>

        </p>
      </FeatureSection>

      <FeatureSectionImage
        title=<Translate>An engine of complexity to emerge intelligence</Translate>
        btnLink="https://realityworld.com"
        btnText={more}
        imgWidth='600px'
        imgHeight='auto'
        image="/img/home/complex.jpg"
        direction="left"
      >
        <p>
          <Translate>In biology or social economic syetm, many agreements have come to that the intelligence of the system come from the emergence mechanism of the complex system theory.</Translate>

        </p>
        <p>
          <Translate>In computer science and engineering, applications are isolated each other for data security and some other business reasons. The lack of interoperability make the applications non-cooperative and hence none-intelligent. We re-organized the structure and execution of software contruction process to provide a interopability-native architecture to form an engine of complexity.</Translate>
        </p>
      </FeatureSectionImage>
      <DeveloperCommunitySection />
    </Layout>
  );
};

export default Cogine;
