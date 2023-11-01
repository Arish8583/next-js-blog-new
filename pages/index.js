import FeaturedPosts from '@/components/homepage/featured-posts'
import Hero from '@/components/homepage/hero'
import { getFeaturedPosts } from '@/lib/posts-util';
import React, { Fragment } from 'react'
import Head from 'next/head';


function HomePage(props) {
  // const Dummy_POSTS = [
  //   {
  //    title: 'getting-started-nextjs',
  //    image: 'getting-started-nextjs.png',
  //    excerpt: 'getting-started-nextjs getting-started-nextjsgetting-started-nextjsgetting-started-nextjsgetting-started-nextjsgetting-started-nextjsgetting-started-nextjsgetting-started-nextjs',
  //    date:'2022-10-22', 
  //    slug: 'getting-started-nextjs' 
  //   },
  //   {
  //     title: 'getting-started-nextjs',
  //     image: 'getting-started-nextjs.png',
  //     excerpt: 'getting-started-nextjs getting-started-nextjsgetting-started-nextjsgetting-started-nextjsgetting-started-nextjsgetting-started-nextjsgetting-started-nextjsgetting-started-nextjs',
  //     date:'2022-10-22', 
  //     slug: 'getting-started-nextjs2' }
  // ];
  return (
    <div>
      <Fragment>
        <Head>
          <title>Max' Blog</title>
          <meta
            name='description'
            content='I post about programming and web development.'
          />
        </Head>
        <Hero />
        <FeaturedPosts posts={props.posts} />
      </Fragment>
    </div>
  )
}
export function getStaticProps() {
  const featuredPosts = getFeaturedPosts();

  return {
    props: {
      posts: featuredPosts,
    },
  };
}

export default HomePage