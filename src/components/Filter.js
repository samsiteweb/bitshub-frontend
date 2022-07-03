import React from "react";

const Filter = () => {
  return (
    <div className="col-span-1 bg-white px-4 pb-6 shadow rounded overflow-hidden">
      <div className="divide-y divide-gray-200 space-y-5">
        {/* categories */}
        <div>
          <h3 className="text-sl text-gray-800 mb-3 uppercase font-medium">Categories</h3>
          <div className="space-y-2">
            <div className="flex items-center">
              <input type="checkbox" id="cat-1" className="text-primary focus:ring-0 rounded-sm cursor-pointer" />
              <label htmlFor="cat-1" className="text-gray-600 ml-3 cursor-pointer">
                Workstation
              </label>
              <div className="ml-auto text-gray-600 text-sm">(15)</div>
            </div>

            <div className="flex items-center">
              <input type="checkbox" id="cat-2" className="text-primary focus:ring-0 rounded-sm cursor-pointer" />
              <label htmlFor="cat-2" className="text-gray-600 ml-3 cursor-pointer">
                Desktop
              </label>
              <div className="ml-auto text-gray-600 text-sm">(10)</div>
            </div>
            <div className="flex items-center">
              <input type="checkbox" id="cat-3" className="text-primary focus:ring-0 rounded-sm cursor-pointer" />
              <label htmlFor="cat-3" className="text-gray-600 ml-3 cursor-pointer">
                Gaming
              </label>
              <div className="ml-auto text-gray-600 text-sm">(123)</div>
            </div>
            <div className="flex items-center">
              <input type="checkbox" id="cat-4" className="text-primary focus:ring-0 rounded-sm cursor-pointer" />
              <label htmlFor="cat-4" className="text-gray-600 ml-3 cursor-pointer">
                Office
              </label>
              <div className="ml-auto text-gray-600 text-sm">(39)</div>
            </div>
          </div>
        </div>

        {/* Brand */}
        <div className="pt-4">
          <h3 className="text-sl text-gray-800 mb-3 uppercase font-medium">Brands</h3>
          <div className="space-y-2">
            <div className="flex items-center">
              <input type="checkbox" id="cat-1" className="text-primary focus:ring-0 rounded-sm cursor-pointer" />
              <label htmlFor="cat-1" className="text-gray-600 ml-3 cursor-pointer">
                Workstation
              </label>
              <div className="ml-auto text-gray-600 text-sm">(15)</div>
            </div>

            <div className="flex items-center">
              <input type="checkbox" id="cat-1" className="text-primary focus:ring-0 rounded-sm cursor-pointer" />
              <label htmlFor="cat-1" className="text-gray-600 ml-3 cursor-pointer">
                Desktop
              </label>
              <div className="ml-auto text-gray-600 text-sm">(10)</div>
            </div>
            <div className="flex items-center">
              <input type="checkbox" id="cat-1" className="text-primary focus:ring-0 rounded-sm cursor-pointer" />
              <label htmlFor="cat-1" className="text-gray-600 ml-3 cursor-pointer">
                Gaming
              </label>
              <div className="ml-auto text-gray-600 text-sm">(123)</div>
            </div>
            <div className="flex items-center">
              <input type="checkbox" id="cat-1" className="text-primary focus:ring-0 rounded-sm cursor-pointer" />
              <label htmlFor="cat-1" className="text-gray-600 ml-3 cursor-pointer">
                Office
              </label>
              <div className="ml-auto text-gray-600 text-sm">(39)</div>
            </div>
          </div>
        </div>

        {/* Price */}
        <div className="pt-4">
          <h3 className="text-xl text-gray-800 mb-3 uppercase font-medium">Price</h3>
          <div className="mt-4 flex items-center">
            <input
              type="text"
              className="w-full border-gray-300 focus:border-primary focus:ring-primary focu:ring-0 px-3 py-1 text-gray-600 text-sm shadow-sm rounded"
              placeholder="min"
            />
            <span className="mx-3 text-gray-500">-</span>
            <input
              type="text"
              className="w-full border-gray-300 focus:border-primary focus:ring-primary focu:ring-0 px-3 py-1 text-gray-600 text-sm shadow-sm rounded"
              placeholder="max"
            />
          </div>
        </div>

        {/* size */}
        <div className="pt-4">
          <h3 className="text-xl text-gray-800 mb-3 uppercase font-medium">Size</h3>
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
          <h3 className="text-xl text-gray-800 mb-3 uppercase font-medium">Color</h3>
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
      </div>
    </div>
  );
};

export default Filter;
