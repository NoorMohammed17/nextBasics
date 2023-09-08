import React,{Fragment} from "react";
import { useRouter } from "next/router";


const DetailPage = () => {
  const router = useRouter();
  const newsId = router.query.newsId;

  //console.log(router.query.newsId)
  return (
    <Fragment>
      <h1>Welcome to Detail Page!</h1>
     
    </Fragment>
  );
};

export default DetailPage;
