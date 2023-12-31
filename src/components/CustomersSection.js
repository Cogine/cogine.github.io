import React from 'react';

import SvgIcon from './SvgIcon';
import SectionLayout from './SectionLayout';

import Translate, { translate } from '@docusaurus/Translate';

const customersList = [
  {
    title: <Translate>Conversational</Translate>,
    quote: <Translate>Code can talk to user, system or other agents to ask more information at any function location, the agent will be paused and continue to run when got response.</Translate>,
  },
  {
    title: <Translate>Interoperability</Translate>,
    quote: <Translate>Agents written by different developers could be running in a same memory environment and interoperate with each other with the permission of user.</Translate>,
  },
  {
    title: <Translate>Self-evolving</Translate>,
    quote: <Translate>The agents are working in a collaborated way and user could custimize it's personal composation to make the whole system self-evolving and emerge digital intelligence.</Translate>,
  },
  {
    title: <Translate>Logic-abstraction</Translate>,
    quote: <Translate>We re-organized the whole program to make developers focused on logic of busniess and forget about the hardware, data and programing language abstraction.</Translate>,
  },
];

const CustomersSection = () => {
  return (
    <SectionLayout
      title=<Translate>Computing Innovation</Translate>
      descriptionStyle={{ color: '#444950' }}
      style={{ backgroundColor: 'white' }}
      titleStyle={{ color: '#444950' }}
    >
      <div className="row">
        {customersList.map(({ quote, logo, url, title }, idx) => (
          <div className="col" key={idx}>
            <div className="col-demo">
              <div className="text--center">
                <h4 className="text--center" style={{ fontSize: '20px', color: '#444950' }}>
                  {title}
                </h4>
                <p style={{ fontSize: '15px', color: '#444950' }}>
                  {quote}
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
