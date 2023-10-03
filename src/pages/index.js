import React from 'react';
import Layout from '@theme/Layout';
import HeroSection from '../components/HeroSection';
import CustomersSection from '../components/CustomersSection';
import DeveloperCommunitySection from '../components/DeveloperCommunitySection';
import FeatureSection from '../components/FeatureSection';
import FeatureSectionImage from '../components/FeatureSectionImage';
import SectionLayout from '../components/SectionLayout';

const Collaboration = require('../../static/img/home/collaberation.svg').default;
const Platform = require('../../static/img/home/platform.svg').default;
const Conversational = require('../../static/img/home/conversational.svg').default;

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

      <FeatureSectionImage
        title="Let everyone can write AI agent"
        btnLink="https://realityworld.com"
        btnText="Read More"
        image='/img/home/flow.png'
        imgWidth='600px'
        imgHeight='333px'
        direction="right"
      >
        <p>
          Programming is not easy, but the hardest part is not the programming language itself, its the program structure organizing. We build a high level logic-abstraction to hide the structure and let developer focused on logic only.
        </p>
        <p>Most visual graph editting is just a visual wrapper of the original codes. We build a graph interaction which is as simple as Houdini and as powerful as any turning completed programming language.
        </p>
      </FeatureSectionImage>

      <FeatureSection
        title="An agent platform & VM"
        btnLink="https://realityworld.com"
        btnText="Read More"
        image={Platform}
        direction="left"
      >
        <p>
          We defined a standard agent format to represent a turing completed agent program which can be loaded and runned dynamically so everyone can develop an agent to handle personal needs.

        </p>
        <p>
          We then build a platform with a virtual machine to interpret and execute the above agent format program dynamically. By this dynamical capability, developer can create and share agent with users as simple as share a url.

        </p>
      </FeatureSection>

      <FeatureSection
        title="Multi-agent conversational collaborating framework"
        btnLink="https://realityworld.com"
        imgWidth='600px'
        imgHeight='auto'
        btnText="Read More"
        image={Conversational}
        direction="right"
      >
        <p>
          Agents can commnuicating with user, system and other agents in a very simple way which provides the ability to finish a task in a collaberating way.

        </p>
        <p>
          In a LLM-powered application, the inputs of a function is semantic instead of structured data, which brings uncertainty and needs conversational way to get more information. For solve this problem, we propose a new concept and a novel architecture called "Conversational computing" for the first time in the world, to make any function can be paused and conversational commnuicating with user, system and other agents to get full information it needs without extra works.

        </p>
      </FeatureSection>

      <FeatureSectionImage
        title="An engine of complexity to emerge intelligence"
        btnLink="https://realityworld.com"
        btnText="Read More"
        imgWidth='600px'
        imgHeight='auto'
        image='/img/home/complex.jpg'
        direction="left"
      >
        <p>
          In biology or social economic syetm, many agreements have come to that the intelligence of the system come from the emergence mechanism of the complex system theory.

        </p>
        <p>
          In computer science and engineering, applications are isolated each other for data security and some other business reasons. The lack of interoperability make the applications non-cooperative and hence none-intelligent. We re-organized the structure and execution of software contruction process to provide a interopability-native architecture to form an engine of complexity.
        </p>
      </FeatureSectionImage>


      <DeveloperCommunitySection />
    </Layout>
  );
};

export default IndexPage;
