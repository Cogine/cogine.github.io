import React, { Fragment } from 'react';
import Layout from '@theme/Layout';
import Chidori from "./feature/chidori.mdx"
import LangChain from "./feature/langchain.mdx"
import Cogine from "./feature/cogine.mdx"
import Features from "./feature/features.mdx"
import SectionLayout from "../components/SectionLayout"
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import Translate, { translate } from '@docusaurus/Translate';

const FeaturesPage = () => {
    return (
        <Layout>
            <div
                className="container"
                style={{ padding: '50px 20px 50px 20px' }}
                id="page-pricing"
            >
                <h1 className="text--center"><Translate> Features and benefits</Translate></h1>
                <h2 className="text--center" style={{ fontWeight: 'normal' }}>
                    <Translate>The following we list the main features of Cogine, for the details please check the technical documentation.
                    </Translate>
                </h2>
                <br />
                <Features />

                <SectionLayout
                    title=<Translate>Development comparison with LangChain and Chidori</Translate>
                    description=<Translate>Basically, in other framework, you have to learn Python language, have to care about the structure of the program and have to learn many architecture design (such as different specific class and its inheritance relationships. In Cogine, the only thing you are care about is your logic, no other programming burden.</Translate>
                >
                    <div className="row" >
                        <div className="col col--8 col--offset-2">
                            <div className="col-demo center">
                                <div style={{
                                    width: '1020px',
                                }}>
                                    <Tabs className="center">
                                        <TabItem value="apple" label="Cogine" default>
                                            <Cogine />
                                        </TabItem>
                                        <TabItem value="orange" label="LangChain">
                                            <LangChain />
                                        </TabItem>
                                        <TabItem value="chidori" label="Chidori">
                                            <Chidori />
                                        </TabItem>
                                    </Tabs>
                                </div>
                            </div>
                        </div>
                    </div>
                </SectionLayout>
            </div>
        </Layout>
    );
};

export default FeaturesPage;