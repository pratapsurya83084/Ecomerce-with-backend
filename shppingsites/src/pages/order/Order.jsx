import React, { useContext } from "react";
import Mycontext from "../../context/data/Mycontext";
import Layout from "../../components/layout/Layout";
import Loader from "../../components/loader/Loader";

function Order() {
  const userid = JSON.parse(localStorage.getItem("user")).user.uid;
  const { mode, loading, order, deleteOrder } = useContext(Mycontext);

  // const handleCancelOrder = (orderId) => {
  //   deleteOrder(orderId);
  // };

  return (
    <Layout>
      {loading && <Loader />}
      {order&&order.length > 0 ? (
        <div className="h-full pt-10">
          {order
            .filter((obj) => obj.userid === userid)
            .map((orderItem) => (
              <div
                key={orderItem.id}
                className="mx-auto max-w-5xl justify-center px-6 md:flex md:space-x-6 xl:px-0"
              >
                {orderItem.cartItems.map((item) => (
                  <div key={item.id} className="rounded-lg md:w-2/3">
                    <div
                      className="justify-between mb-6 rounded-lg bg-white p-6 shadow-md sm:flex sm:justify-start"
                      style={{
                        backgroundColor: mode === "dark" ? "#282c34" : "",
                        color: mode === "dark" ? "white" : "",
                      }}
                    >
                      <img
                        src={item.imageUrl}
                        alt="product-image"
                        className="w-full rounded-lg sm:w-40"
                      />
                      <div className="sm:ml-4 sm:flex sm:w-full sm:justify-between">
                        <div className="mt-5 sm:mt-0">
                          <h2
                            className="text-lg font-bold text-gray-900"
                            style={{ color: mode === "dark" ? "white" : "" }}
                          >
                            {item.title}
                          </h2>
                          <p
                            className="mt-1 text-xs text-gray-700"
                            style={{ color: mode === "dark" ? "white" : "" }}
                          >
                            {item.description}
                          </p>
                          <p
                            className="mt-1 text-xs text-black font-bold"
                            style={{ color: mode === "dark" ? "white" : "" }}
                          >
                            Rs.{item.price}
                          </p>
                          <button
                            onClick={() => deleteOrder(orderItem)}
                            className="bg-pink-500 p-2 mt-2 rounded"
                          >
                            Cancel order
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ))}
        </div>
      ) : (
        <div className="">
          <h2 className="text-center text-2xl md:text-4xl font-bold  p-5 text-black mb-full mt-10">
           product is not found
          </h2>
          <div className="flex justify-center">
          <img  className="flex justify-center -mb-3.5" src="https://damodarart.weebly.com/uploads/3/9/7/5/3975487/1759326.gif" />
          </div>
          
        </div>
      )}
    </Layout>
  );
}

export default Order;
