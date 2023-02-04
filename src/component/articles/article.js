import React from "react";
import "./article.css";

const Article = () => {
  return (
    <>
      <div className="container">
        {/* first card */}
        <div className="a-f-card">
          <div className="a-f-text col-md-8">
            <h1>Property for sale in Turkey</h1>
            <p>
              Congratulations ,you have just landed on #1 website to search for
              // property for sale in Turkey. Capitol Estate is the go-to
              authority // for foreigners buying property in Turkey. With a
              decade of // experience, we specialize in overseas purchases for
              clients in // Western Europe, Russia, and the Middle East. With
              one of the // largest property portfolios in Turkey, we are
              dedicated and able // to provide you with maximum choice and
              premium quality.
            </p>
            <p>
              Providing you with the best selection of Real Estate in Turkey,
              the best return on investment, and the best customer service
              possible are what drive us. Everything about Capitol Estate, from
              our comprehensive and easy-to-use website, to our all inclusive
              free viewing trips have been designed to give you the best home
              buying experience possible.
            </p>
            <p>
              Everything Capitol Estate does is for you… our client! We spend
              countless hours mastering and learning new methods to secure you
              the finest investments, regardless of the city you buy in, so that
              you will enjoy the optimal positive cash flow income or return on
              your investment.
            </p>
          </div>
          <div className="a-f-image">
            <img src="/deals.jpg" alt="image" />
          </div>
        </div>
      </div>
    </>
    // <>
    //   <div class="container article">
    //     <div class="row">
    //       <div class="col-md-10">
    //         <h1 class="fs-1 articles title-color">
    //           Property for sale in Turkey
    //         </h1>
    //         <p class="fs-5">
    //           Congratulations ,you have just landed on #1 website to search for
    //           property for sale in Turkey. Capitol Estate is the go-to authority
    //           for foreigners buying property in Turkey. With a decade of
    //           experience, we specialize in overseas purchases for clients in
    //           Western Europe, Russia, and the Middle East. With one of the
    //           largest property portfolios in Turkey, we are dedicated and able
    //           to provide you with maximum choice and premium quality.
    //         </p>
    //         <p class="fs-5">
    //           Providing you with the best selection of Real Estate in Turkey,
    //           the best return on investment, and the best customer service
    //           possible are what drive us. Everything about Capitol Estate, from
    //           our comprehensive and easy-to-use website, to our all inclusive
    //           free viewing trips have been designed to give you the best home
    //           buying experience possible.
    //         </p>
    //       </div>
    //       <div class="col-md-7 article-img">
    //         <img
    //           src="https://newhomeabroad.com/assets/images/deals.jpg"
    //           class="article-img-w"
    //           alt=""
    //         />
    //       </div>
    //     </div>
    //   </div>
    //   second article
    //   <div class="container article">
    //     <div class="row">
    //       <div class="col-md-7 article-img-2">
    //         <img
    //           src="https://newhomeabroad.com/assets/images/inner-pics.jpg"
    //           class="article-img-w"
    //           alt=""
    //         />
    //       </div>
    //       <div class="col-md-10">
    //         <h1 class="fs-1 articles title-color">
    //           Carefully Selected Properties
    //         </h1>
    //         <p class="fs-5">
    //           Every property for sale in Turkey that Capitol Estate offers is
    //           selected after a very diligent and careful analysis by our expert
    //           agents. We partner with reliable and reputable developers to offer
    //           you the highest-quality properties.
    //         </p>
    //         <p class="fs-5">
    //           Our process for selecting which properties we present to you is
    //           comprised of many steps, to ensure that you are only going to see
    //           the top properties - regardless of your price range.
    //         </p>
    //         <p class="fs-5">
    //           Capitol Estate employes over 25 experts. Headquartered in Alanya,
    //           we also have branch offices in Bodrum, and Istanbul. Our team
    //           specializes in Istanbul Real Estate, Alanya Real Estate, Antalya
    //           Real Estate
    //         </p>
    //       </div>
    //     </div>
    //   </div>
    // </>
  );
};

export default Article;
