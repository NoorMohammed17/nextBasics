import React,{Fragment} from "react";

import Link from 'next/Link';

const NewsPage = () => {
  return (
    <Fragment>
    <h1>Welcome to News Page!</h1>
    <ul>
      <li>
          <Link href='/news/detailpage'>
          to detail page
          </Link></li>
      <li>to someother page</li>
    </ul>
  </Fragment>
  )
}

export default NewsPage;
