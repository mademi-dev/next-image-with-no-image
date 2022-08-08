import React from 'react';
import dynamic from 'next/dynamic';

const Image = dynamic(() => import('../index'));

export default function HomePage() {

  return Image;
}

export async function getStaticProps() {

  try {
  } catch (error) {
  }

  return {
  };
}
