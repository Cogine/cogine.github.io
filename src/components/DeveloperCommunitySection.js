import React from 'react';
import Link from '@docusaurus/Link';

import SectionLayout from './SectionLayout';

import Translate, { translate } from '@docusaurus/Translate';
const DeveloperCommunitySection = () => {
  return (
    <SectionLayout
      title=<Translate>Join our developer community</Translate>
      description={`Open-source is in the ❤ of Reality World.\n⭐ us on GitHub.`}
    >
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          gap: '10px',
          flexWrap: 'wrap',
        }}
      >
        <Link
          href="https://github.com/Cogine/RealityWorld"
          className="button button--primary button--outline"
        >
          Star on GitHub
        </Link>
      </div>
    </SectionLayout>
  );
};

export default DeveloperCommunitySection;
