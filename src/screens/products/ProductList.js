import React, { useCallback, useMemo, useState, useEffect } from "react";
import Axios from "axios";
import Button from "../../components/Button";
import Table from "../../components/Table";
import { useSelector } from "react-redux";
const ProductList = () => {
  const [list, setList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState();

  const { productCreate } = useSelector((state) => state.productCreate);
  // const {
  //   error: createProductError,
  //   loading: createProductLoading,
  //   success: createProductSuccess,
  //   product: createProduct,
  // } = productCreate;

  const BASE_URL = "https://bitshub-api.herokuapp.com";

  const listProducts = async () => {
    try {
      const data = await Axios.get(`${BASE_URL}/api/products`);
      setLoading(false);
      setList(data?.data);
    } catch (error) {
      setError(error);
    }
  };
  useEffect(() => {
    listProducts();
  }, []);

  const handleOpen = (e) => {
    console.log("just clicked");
  };
  const handleSearchInput = (e) => {
    console.log(e.target.value);
  };
  const exportFunction = () => {
    alert("Export Button is Clicked....");
  };

  const getData = useCallback(() => {
    const result = list?.map((item) => {
      return {
        id: <p className="font-medium text-sm">{item?._id}</p>,
        name: <p className="font-medium text-sm">{item?.name}</p>,
        price: <p className="font-medium text-sm">{item?.price}</p>,
        category: <p className="font-medium text-sm">{item?.category}</p>,
        brand: (
          <div className="p-center rounded-full p-2">
            <p className="font-medium text-sm">{item?.brand}</p>
          </div>
        ),

        action: (
          <div className="flex items-center gap-2">
            <Button secondary className="px-2 text-white">
              Edit
            </Button>
            <Button secondary className="px-2 text-white">
              Delete
            </Button>
          </div>
        ),
      };
    });
    return [...result];
  }, [list]);

  const columns = useMemo(
    () => [
      {
        Header: "ID",
        accessor: "id",
      },
      {
        Header: "NAME",
        accessor: "name",
      },
      {
        Header: "PRICE",
        accessor: "price",
      },
      {
        Header: "CATEGORY",
        accessor: "category",
      },
      {
        Header: "BRAND",
        accessor: "brand",
      },

      {
        Header: "ACTION",
        accessor: "action",
      },
    ],
    []
  );
  const data = useMemo(() => getData(), [getData]);

  return (
    <div className="container md:p-8 p-4">
      <div className="flex justify-between items-center container">
        <p className="text-2xl font-base">Product list</p>
        <div>
          <Button
            primary
            className="p-4 text-sm"
            children="Create New"
            onClick={() => handleOpen()}
          />
        </div>
      </div>

      <div className="">
        <Table
          columns={columns}
          data={data}
          showChecked={true}
          className="w-full"
          placeholder="Search for a user"
          ifExport={true}
          ifFilter={false}
          exportFunction={exportFunction}
          handleSearch={handleSearchInput}
          isLoading={loading}
          errorMessage={error}
        />
      </div>
    </div>
  );
};

export default ProductList;
