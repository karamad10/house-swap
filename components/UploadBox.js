import Button from "./Button";

const UploadBox = () => {
  return (
    <div className="flex justify-center mt-6">
      <div
        className="rounded-lg drop-shadow-xl shadow-xl pb-5 border-2 border-solid"
        style={{ width: "90%", marginLeft: "10%" }}
      >
        <div className="m-4">
          <label className="inline-block mb-4 mt-4 text-indigo-400">
            Upload Image(jpg,png,svg,jpeg)
          </label>
          <div className="flex items-center justify-center w-full">
            <label className="flex flex-col w-full h-32 border-4 border-dashed hover:bg-indigo-100 hover:border-gray-300">
              <div className="flex flex-col items-center justify-center pt-7">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-12 h-12 text-gray-600 group-hover:text-gray-800"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fill-rule="evenodd"
                    d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z"
                    clip-rule="evenodd"
                  />
                </svg>
                <p className="pt-1 text-sm tracking-wider text-gray-400 group-hover:text-gray-600">
                  Select a photo
                </p>
              </div>
              <input type="file" className="opacity-0" />
            </label>
          </div>
        </div>
        <div className="flex p-2 pl-4 space-x-4">
          <Button text="Upload" href="/" primary />
        </div>
      </div>
    </div>
  );
};

export default UploadBox;
