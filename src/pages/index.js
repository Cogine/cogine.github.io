import React from 'react';
import Layout from '@theme/Layout';
import HeroSection from '../components/HeroSection';
import CustomersSection from '../components/CustomersSection';
import DeveloperCommunitySection from '../components/DeveloperCommunitySection';
import FeatureSection from '../components/FeatureSection';
import FeatureSectionImage from '../components/FeatureSectionImage';
import SectionLayout from '../components/SectionLayout';

import Translate, { translate } from '@docusaurus/Translate';

const Collaboration = require('../../static/img/home/collaberation.svg').default;
const Platform = require('../../static/img/home/platform.svg').default;
const Conversational = require('../../static/img/home/conversational.svg').default;

const title = 'Reality World';
const description = 'Creating an intelligent reality with AI';

const IndexPage = () => {
  const more = <Translate>Read More</Translate>
  return (
    <Layout title={title} description={description}>
      <HeroSection
        title="Creating an intelligent reality with AI"
        description=<Translate>Rality World is a multi-agent platform built with interoperability as its core, in which a dynamic agent or program can be added and interoperated with all other agents. It's like a complex system and emerges digital intelligence.</Translate>
        image="/img/home-hero.svg"
        buttons={[
          {
            title: <Translate>Whitepaper</Translate>,
            href: 'https://realityworld.com/docs',
            className: 'button--primary',
          },
          {
            title: <Translate>Get Started</Translate>,
            href: '',
            className: 'button--primary button--outline',
          },
        ]}
      />

      <CustomersSection />

      <FeatureSectionImage
        title=<Translate>Let everyone can write AI agent</Translate>
        btnLink="https://realityworld.com"
        btnText={more}
        image="/img/home/flow.png"
        imgWidth='600px'
        imgHeight='333px'
        direction="right"
      >
        <p>
          <Translate>Programming is not easy, but the hardest part is not the programming language itself, its the program structure organizing. We build a high level logic-abstraction to hide the structure and let developer focused on logic only.</Translate>
        </p>
        <p><Translate>Most visual graph editting is just a visual wrapper of the original codes. We build a graph interaction which is as simple as Houdini and as powerful as any turning completed programming language.</Translate>
        </p>
      </FeatureSectionImage>

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

export default IndexPage;
