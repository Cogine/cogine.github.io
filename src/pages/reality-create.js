import React from 'react';
import Layout from '@theme/Layout';

import HeroSectionFull from '../components/HeroSectionFull';
import CustomersSection from '../components/CustomersSection';
import DeveloperCommunitySection from '../components/DeveloperCommunitySection';
import SectionLayout from '../components/SectionLayout';
import FeatureSectionImage from '../components/FeatureSectionImage';
import Translate, { translate } from '@docusaurus/Translate';

const RealityCreate = () => {
  const more = <Translate>Read More</Translate>
  return (
    <Layout>
      <HeroSectionFull
        title="Reality Create"
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
          Reality Create is a graph-based editor, it can create and define an agent program which will can be running in Reality World app or by the Cogine virtual machine
        </Translate></p>
      </HeroSectionFull>

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

      <DeveloperCommunitySection />
    </Layout>
  );
};

export default RealityCreate;
