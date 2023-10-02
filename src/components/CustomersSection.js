import React from 'react';

import SvgIcon from './SvgIcon';
import SectionLayout from './SectionLayout';

const customersList = [
  {
    title: 'Conversational',
    url: 'https://cal.com',
    logo: require('../../static/img/customers/cal.svg').default,
    quote: `It let our team focus on what we do best (democratizing scheduling for everyone) without getting distracted by the needs of our enterprise customers. Did I mention it's open-source and free?`,
  },
  {
    title: 'Interoperability',
    url: 'https://supertokens.com',
    logo: require('../../static/img/customers/supertokens.svg').default,
    quote: `We at SuperTokens needed to provide SAML login to our users, and instead of building it from scratch, we found the perfect open source project - Reality World!`,
  },
  {
    title: 'Self-evolving',
    url: 'https://www.salita.no',
    logo: require('../../static/img/customers/salita.svg').default,
    quote: `Reality World helped us implement single sign-on for our government customers in record time, it was exactly what we were looking for. Absolute pleasure working with Deepak and the Reality World team.`,
  },
  {
    title: 'Logic-abstraction',
    url: 'https://www.unosecur.com',
    logo: require('../../static/img/customers/unosecur.svg').default,
    quote: `With Reality World, we can focus on building our core product without worrying too much about the enterprise readiness features. The integration was seamless.`,
  },
];

const CustomersSection = () => {
  return (
    <SectionLayout
      title="Computing Innovation"
      style={{ backgroundColor: 'white' }}
      titleStyle={{ color: '#444950' }}
    >
      <div className="row">
        {customersList.map(({ quote, logo, url, title }, idx) => (
          <div className="col" key={idx}>
            <div className="col-demo">
              <div className="text--center">
                <h4 className="text--center" style={{ fontSize: '20px' ,color: '#444950'}}>
                  {title}
                </h4>
                <p style={{ fontSize: '15px' }}>
                  <q style={{ color: '#444950' }}>{quote}</q>
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </SectionLayout>
  );
};

export default CustomersSection;
