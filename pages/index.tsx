import React from 'react';
import type { NextPage } from 'next';
import { Layout } from '../components/Layout/Layout';
import { Skills } from '../components/Skills/Skills';
import { Projects } from '../components/Projects/Projects';

const Home: NextPage = () => {
  return (
    <Layout>
      <Skills />
      <Projects />
    </Layout>
  );
};

export default Home;
