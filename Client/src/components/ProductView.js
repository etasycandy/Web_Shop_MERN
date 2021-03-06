import React, { useState, useEffect } from "react";

import { Button } from "./Button";
import numberWithCommas from "../utils/numberWithCommas";

// icon
import { GrSubtractCircle, GrAddCircle } from "react-icons/gr";

const ProductView = (props) => {
  let product = props.product;

  if (product === undefined)
    product = {
      title: "",
      priceOld: "",
      price: "",
      image01: null,
      image02: null,
      categorySlug: "",
      colors: [],
      slug: "",
      size: [],
      description: "",
    };

  const [previewImg, setPreviewImg] = useState(product.image01);

  const [descriptionExpand, setDescriptionExpand] = useState(false);

  const [color, setColor] = useState(undefined);

  const [size, setSize] = useState(undefined);

  const [quantity, setQuantity] = useState(1);

  const updateQuantity = (type) => {
    if (type === "plus") {
      setQuantity(quantity + 1);
    } else {
      setQuantity(quantity - 1 < 1 ? 1 : quantity - 1);
    }
  };

  useEffect(() => {
    setPreviewImg(product.image01);
    setQuantity(1);
    setColor(undefined);
    setSize(undefined);
  }, [product]);

  const check = () => {
    if (color === undefined) {
      alert("Vui lòng chọn màu sắc!");
      return false;
    }

    if (size === undefined) {
      alert("Vui lòng chọn kích cỡ!");
      return false;
    }

    return true;
  };

  const addToCart = () => {
    if (check()) {
      console.log("Add");
    }
  };

  const goToCart = () => {
    if (check()) {
      console.log("Buy");
    }
  };

  const priceOld = [];

  if (product.priceOld > 0) {
    priceOld.push(
      <span key={1} className="product-view__info__item__priceOld">
        <del>{numberWithCommas(product.priceOld)}</del>
      </span>
    );
  } else {
    priceOld.push(<span key={1} className="d-none"></span>);
  }

  return (
    <div>
      <div className="row product-view m-5">
        <div className="row col-sm-12 col-md-7 product-view__images">
          <div className="col-3 product-view__images__list">
            <div
              className="product-view__images__list__item"
              onClick={() => setPreviewImg(product.image01)}
            >
              <img src={product.image01} alt="" />
            </div>
            <div
              className="product-view__images__list__item"
              onClick={() => setPreviewImg(product.image02)}
            >
              <img src={product.image02} alt="" />
            </div>
          </div>
          <div className="col-9 product-view__images__main">
            <img src={previewImg} alt="" />
          </div>
          <div
            className={`col-12 product-description ${
              descriptionExpand ? "expand" : ""
            }`}
          >
            <div className="product-description__title">Product details</div>
            <div
              className="product-description__content"
              dangerouslySetInnerHTML={{ __html: product.description }}
            ></div>
            <div className="product-description__toggle">
              <Button
                buttonColor="transparent"
                buttonStyle="btn--outline"
                onClick={() => setDescriptionExpand(!descriptionExpand)}
              >
                {descriptionExpand ? "Collapse" : "See more >>"}
              </Button>
            </div>
          </div>
        </div>
        <div className="col-sm-12 col-md-5 product-view__info">
          <h1 className="product-view__info__title">{product.title}</h1>
          <div className="product-view__info__item d-flex align-items-center gap-4 mt-4">
            <span className="product-view__info__item__price">
              {numberWithCommas(product.price)}
            </span>
            {priceOld}
          </div>

          <div className="product-view__info__item">
            <div className="product-view__info__item__title">Colors</div>
            <div className="product-view__info__item__list">
              {product.colors.map((item, index) => (
                <div
                  key={index}
                  className={`product-view__info__item__list__item ${
                    color === item ? "active" : ""
                  }`}
                  onClick={() => setColor(item)}
                >
                  <div className={`circle bg-${item}`}></div>
                </div>
              ))}
            </div>
          </div>

          <div className="product-view__info__item">
            <div className="product-view__info__item__title">Sizes</div>
            <div className="product-view__info__item__list">
              {product.size.map((item, index) => (
                <div
                  key={index}
                  className={`product-view__info__item__list__item ${
                    size === item ? "active" : ""
                  }`}
                  onClick={() => setSize(item)}
                >
                  <span className="product-view__info__item__list__item__size">
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="product-view__info__item">
            <div className="product-view__info__item__title">Quantity</div>
            <div className="product-view__info__item__quantity">
              <div
                className="product-view__info__item__quantity__btn"
                onClick={() => updateQuantity("minus")}
              >
                <GrSubtractCircle size={30} />
              </div>
              <div className="product-view__info__item__quantity__input">
                {quantity}
              </div>
              <div
                className="product-view__info__item__quantity__btn"
                onClick={() => updateQuantity("plus")}
              >
                <GrAddCircle size={30} />
              </div>
            </div>
          </div>

          <div className="product-view__info__item">
            {/* <Button buttonStyle="btn--outline" buttonColor="blue">
              ADD TO CART
            </Button>
            <Button buttonStyle="btn--outline" buttonColor="blue">
              BUY
            </Button> */}
            <Button
              buttonStyle="btn--outline"
              buttonColor="blue"
              onClick={() => addToCart()}
            >
              ADD TO CART
            </Button>
            <Button
              buttonStyle="btn--outline"
              buttonColor="blue"
              onClick={() => goToCart()}
            >
              BUY
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductView;
