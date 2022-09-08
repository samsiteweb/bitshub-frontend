import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { detailsProduct } from "../../actions/productActions";
import { addToCart } from "../../actions/cartActions";
import Breadcrumbs from "../../components/Breadcrumbs";
import LoadingBox from "../../components/LoadingBox";
import MessageBox from "../../components/modals/MessageBox";
import Products from "../../components/Products";
import Rating from "../../components/Rating";
import Button from "../../components/Button";
import CenterModal from "../../components/modals/CenterModal";
import ProductDetailsModal from "./ProductDetailsModal";

const ProductDetails = (props) => {
  const { _id: productId } = useParams();
  const dispatch = useDispatch();

  const productDetails = useSelector((state) => state?.productDetails);
  const { loading, error, product } = productDetails;
  const [qty, setQty] = useState(1);
  const [openModal, setOpenModal] = useState(false);

  useEffect(() => {
    dispatch(detailsProduct(productId));
  }, [dispatch, productId]);

  const addToCarthandler = () => {
    dispatch(addToCart(productId, qty));
    setOpenModal(!openModal);
  };
  return (
    <div>
      {loading ? (
        <LoadingBox />
      ) : error ? (
        <MessageBox variant="danger">{error}</MessageBox>
      ) : (
        <div>
          <Breadcrumbs page="Product view" />
          <div className="container grid md:grid-cols-2 gap-6">
            {/* <div>
              <img src={product?.image[0]} alt={product?.name} />
              <div className="grid grid-cols-5 gap-4 mt-4">
                <img
                  src={product?.image[0]}
                  alt={product?.name}
                  className="w-full cursor-pointer border hover:border-primary"
                />
                <img src={product?.image[1]} alt="" className="w-full cursor-pointer border hover:border-primary" />
                <img src={product?.image[1]} alt="" className="w-full cursor-pointer border hover:border-primary" />
                <img src={product?.image[1]} alt="" className="w-full cursor-pointer border hover:border-primary" />
                <img src={product?.image[1]} alt="" className="w-full cursor-pointer border hover:border-primary" />
                <img src={product?.image[1]} alt="" className="w-full cursor-pointer border hover:border-primary" />
                <img src={product?.image[1]} alt="" className="w-full cursor-pointer border hover:border-primary" />
                <img src={product?.image[1]} alt="" className="w-full cursor-pointer border hover:border-primary" />
              </div>
            </div> */}

            <div>
              <h3 className="text-xl font-medium uppercase mb-2">{product?.product?.name}</h3>
              <div className="my-2">
                <Rating rating={product?.product?.rating} reviews={product?.product?.reviews} />
              </div>
              <div className="space-y-2">
                <p className="text-gray-800 font-semi-bold space-x-2">
                  <span>Availability:</span>
                  <span className={product?.product?.quantityInStock > 0 ? "text-green-600" : "text-red-600"}>
                    {product?.product?.quantityInStock > 0 ? "In stock" : "out of stock"}
                  </span>
                </p>
                <p className="space-x-2">
                  <span className="text-gray-800 font-semibold">Brand:</span>
                  <span className="text-gray-600">{product?.product?.brand}</span>
                </p>
                <p className="space-x-2">
                  <span className="text-gray-800 font-semibold">Category:</span>
                  <span className="text-gray-600">{product?.product?.category}</span>
                </p>
                <p className="space-x-2">
                  <span className="text-gray-800 font-semibold">SKU:</span>
                  <span className="text-gray-600">{product?.product?.model}</span>
                </p>
              </div>
              <div className="flex items-baseline mb-1 space-x-2 font-roboto mt-4">
                <p className="text-2xl text-primary font-semibold">₦{product?.product?.price}</p>
                <p className="text-base text-gray-400 line-through">{product?.product?.initialPrice}</p>
              </div>
              <p className="mt-4 text-gray-600">{product?.product?.brief}</p>
              {/* size */}
              <div className="pt-4">
                <h3 className="text-sm text-gray-800 uppercase mb-1">Size</h3>
                <div className="flex items-center gap-2">
                  <div className="size-selector">
                    <input type="radio" name="size" className="hidden" id="size-mini" />
                    <label
                      htmlFor="size-mini"
                      className="text-xs border border-gray-200 rounded-sm h-6 w-6 flex items-center justify-center cursor-pointer shadow-sm text-gray-600"
                    >
                      mini
                    </label>
                  </div>
                  <div className="size-selector">
                    <input type="radio" name="size" className="hidden" id="size-13" />
                    <label
                      htmlFor="size-13"
                      className="text-xs border border-gray-200 rounded-sm h-6 w-6 flex items-center justify-center cursor-pointer shadow-sm text-gray-600"
                    >
                      13"
                    </label>
                  </div>
                  <div className="size-selector">
                    <input type="radio" name="size" className="hidden" id="size-15" />
                    <label
                      htmlFor="size-15"
                      className="text-xs border border-gray-200 rounded-sm h-6 w-6 flex items-center justify-center cursor-pointer shadow-sm text-gray-600"
                    >
                      15"
                    </label>
                  </div>
                  <div className="size-selector">
                    <input type="radio" name="size" className="hidden" id="size-17" />
                    <label
                      htmlFor="size-17"
                      className="text-xs border border-gray-200 rounded-sm h-6 w-6 flex items-center justify-center cursor-pointer shadow-sm text-gray-600"
                    >
                      17"
                    </label>
                  </div>
                </div>
              </div>

              {/* color */}
              <div className="pt-4">
                <h3 className="text-sm text-gray-800 uppercase mb-1">Color</h3>
                <div className="flex items-center gap-2">
                  <div className="color-selecter">
                    <input type="radio" name="color" className="hidden" id="color-grey" />
                    <label
                      htmlFor="color-grey"
                      className="border border-gray-200 rounded-sm h-5 w-5 cursor-pointer shadow-sm block"
                      style={{ backgroundColor: "grey" }}
                    ></label>
                  </div>
                  <div className="color-selecter">
                    <input type="radio" name="color" className="hidden" id="color-white" />
                    <label
                      htmlFor="color-white"
                      className="border border-gray-200 rounded-sm h-5 w-5 cursor-pointer shadow-sm block"
                      style={{ backgroundColor: "white" }}
                    ></label>
                  </div>
                  <div className="color-selecter">
                    <input type="radio" name="color" className="hidden" id="color-silver" />
                    <label
                      htmlFor="color-silver"
                      className="border border-gray-200 rounded-sm h-5 w-5 cursor-pointer shadow-sm block"
                      style={{ backgroundColor: "silver" }}
                    ></label>
                  </div>
                  <div className="color-selecter">
                    <input type="radio" name="color" className="hidden" id="color-pink" />
                    <label
                      htmlFor="color-pink"
                      className="border border-gray-200 rounded-sm h-5 w-5 cursor-pointer shadow-sm block"
                      style={{ backgroundColor: "pink" }}
                    ></label>
                  </div>
                  <div className="color-selecter">
                    <input type="radio" name="color" className="hidden" id="color-black" />
                    <label
                      htmlFor="color-black"
                      className="border border-gray-200 rounded-sm h-5 w-5 cursor-pointer shadow-sm block"
                      style={{ backgroundColor: "black" }}
                    ></label>
                  </div>
                </div>
              </div>

              {/* Quantity */}
              <div className="mt-4">
                <h3 className="text-sm text-gray-800 uppercase mb-1">quantity</h3>
                <div className="flex items-center text-gray-600 divide-x divide-gray-300 w-16 h-8">
                  <Button
                    secondary
                    className="px-2 py-1"
                    onClick={() => {
                      setQty((prev) => prev - 1);
                    }}
                  >
                    -
                  </Button>

                  <input
                    className="h-8 w-12 text-base p-2 focus:border-primary focus:ring-primary outline-none"
                    type="number"
                    onChange={(e) => {
                      setQty(Number(e.target.value));
                    }}
                    value={qty}
                  />

                  <Button
                    secondary
                    className="px-2 py-1"
                    onClick={() => {
                      setQty((prev) => prev + 1);
                    }}
                  >
                    +
                  </Button>
                </div>
              </div>

              <div className="flex gap-3 border-b border-gray-200 pb-5 mt-6">
                <div>
                  <Button
                    className="uppercase"
                    primary
                    onClick={addToCarthandler}
                    disabled={
                      product?.product?.quantityInStock < 1 || qty < 1 || qty > product?.product?.quantityInStock
                        ? true
                        : false
                    }
                    loading={loading}
                  >
                    <i className="fas fa-shopping-bag"></i> Add to cart
                  </Button>
                  <p className="text-xs text-red-500 py-2">
                    {product?.product?.quantityInStock < 1
                      ? "item sold out"
                      : qty < 1
                      ? "cart cannot be empty"
                      : qty > product?.product?.quantityInStock
                      ? "quantity cannot be greater than stock"
                      : ""}
                  </p>
                </div>

                <Button className="uppercase" secondary loading={loading}>
                  <i className="fas fa-heart"></i> Wish list
                </Button>
              </div>

              <div className="flex gap-3 mt-4">
                <a
                  href="/"
                  className="text-gray-400 hover:text-gray-500 h-8 w-8 rounded-full border border-gray-300 flex items-center justify-center"
                >
                  <i className="fab fa-facebook-f"></i>
                </a>
                <a
                  href="/"
                  className="text-gray-400 hover:text-gray-500 h-8 w-8 rounded-full border border-gray-300 flex items-center justify-center"
                >
                  <i className="fab fa-twitter"></i>
                </a>
                <a
                  href="/"
                  className="text-gray-400 hover:text-gray-500 h-8 w-8 rounded-full border border-gray-300 flex items-center justify-center"
                >
                  <i className="fab fa-instagram"></i>
                </a>
              </div>
            </div>
          </div>

          <div className="container pb-16">
            <h3 className="border-b border-gray-200 font-roboto text-gray-800 pb-3 font-medium">Product details</h3>

            <div className="pt-6">
              <div className="text-gray-600 space-y-3">
                <p>{product?.product?.desc}</p>
              </div>
            </div>
            <table className="table-auto border-collapse w-full text-left text-gray-600 text-sm mt-6">
              <tbody>
                <tr>
                  <th className="py-2 px-4 border border-gray-300 w-40 font-medium">Color</th>
                  <td className="py-2 px-4 border border-gray-300">{product?.product?.color}</td>
                </tr>
                <tr>
                  <th className="py-2 px-4 border border-gray-300 w-40 font-medium">Size</th>
                  <td className="py-2 px-4 border border-gray-300">{product?.product?.size}</td>
                </tr>
                <tr>
                  <th className="py-2 px-4 border border-gray-300 w-40 font-medium">Weight</th>
                  <td className="py-2 px-4 border border-gray-300">3.5kg</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="container pb-16">
            <h2 className="text-2xl font-medium text-gray-800 uppercase mb-6">related products</h2>
            <Products />
          </div>
        </div>
      )}
      {openModal && (
        <CenterModal modalHandler={addToCarthandler}>
          <ProductDetailsModal modalHandler={addToCarthandler} productId={productId} qty={qty} />
        </CenterModal>
      )}
    </div>
  );
};

export default ProductDetails;
