import React, { useState } from "react";
import toast from "react-hot-toast";
import CachedIcon from "@mui/icons-material/Cached";
import adminInstance from "../../Api/AdminApi";

function AddEvent() {
  const [heading, setHeading] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState("");
  const [prevImg, setPrevImage] = useState("");
  const [spinner, setSpinner] = useState(false);

  const isValidImage = (fileName) => {
    const imageExtensionsPattern = /\.(jpg|jpeg|png|webp)$/i;
    return imageExtensionsPattern.test(fileName);
  };

  const uploadImage = (img) => {
    const selectedImage = img;
    setPrevImage(img);
    if (selectedImage) {
      if (!isValidImage(selectedImage.name)) {
        toast.error("Add a valid logo image (jpg, jpeg, png, or webp).");
        return;
      }
    
      let reader = new FileReader();
      reader.readAsDataURL(selectedImage);
      reader.onload = () => {
        console.log(reader.result)
        setImage(reader.result);
      };
      reader.onerror = (error) => {
        console.log("Error: ", error);
      };
    }
  };

  const resetForm = () => {
    setImage("");
    setDescription("");
    setPrevImage("");
    setHeading("");
    setSpinner(false);
  };
  
  const submitEvents = async (e) => {
    e.preventDefault();
    setSpinner(true)
    try {
      if (!heading.trim() || !description.trim() || !image) {
        toast("fill all the feilds", {
          icon: "⚠️",
          style: {
            background: "black",
            color: "#87CEEB",
            border: "solid .1px",
            width: "11rem",
          },
        });
        return;
      }
      let data = { heading: heading, description: description, image: image };
        const res = await adminInstance.post('/addEvents',data)
        if(res.data.message === 'success'){
          toast.success('Event Added Successfully')
        }else{
          toast.error('Event Adding Failed !')
        }
    } catch (error) {
      console.log(error);
    }finally{
      resetForm()
    }
  };

  return (
    <div className="flex justify-center h-screen bg-slate-900 items-center">
      <div className="block max-w-md rounded-lg bg-white p-6 border border-blue-400 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-slate-800">
        <form onSubmit={submitEvents}>
          {/* <!--Name input--> */}
          <div className="relative mb-6" data-te-input-wrapper-init>
            <label
              for="exampleInput7"
              className="pointer-events-none  left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-400 dark:peer-focus:text-primary"
            >
              Heading
            </label>
            <input
              onChange={(e) => setHeading(e.target.value)}
              type="text"
              value={heading}
              className="peer block border-blue-400  min-h-[auto] w-full rounded border bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-400 dark:placeholder:text-neutral-400 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
              id="exampleInput7"
              placeholder="Name"
            />
          </div>
          {/* <!--Message textarea--> */}
          <div className="relative mb-6" data-te-input-wrapper-init>
            <label
              for="exampleFormControlTextarea13"
              className="pointer-events-none  left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-400 dark:peer-focus:text-primary"
            >
              Description
            </label>
            <textarea
              onChange={(e) => setDescription(e.target.value)}
              className="peer block border border-blue-400 min-h-[auto] w-full rounded  bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-400 dark:placeholder:text-neutral-400 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
              id="exampleFormControlTextarea13"
              rows="3"
              placeholder="Message"
              value={description}
            ></textarea>
          </div>

          <div className="relative mb-6" data-te-input-wrapper-init>
            <div className="w-full flex justify-center items-center h-28 my-2 ">
              <img
                className="w-fit h-full"
                src={
                  prevImg instanceof File
                    ? URL.createObjectURL(prevImg)
                    : "https://freepngimg.com/save/55578-gallery-png-image-high-quality/1000x1000"
                }
                alt=""
              />
            </div>
            <div className="w-full flex justify-center items-center">
              <input
                onChange={(e) => uploadImage(e.target.files[0])}
                className="ml-3 w-3/4 border-none "
                type="file"
                name=""
                id=""
              />
            </div>
          </div>

          {/* <!--Submit button--> */}
          <button
            type="submit"
            className="dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]] font-bold border bg-black text-white hover:border-blue-400 border-blue-950 inline-block w-full rounded bg-primary px-6 pb-2 pt-2.5 text-xs  uppercase leading-normal  shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
            data-te-ripple-init
            data-te-ripple-color="light"
          >
           {spinner ? <CachedIcon className="animate-spin" color="white" /> : "Submit"} 
          </button>
        </form>
      </div>
    </div>
  );
}

export default AddEvent;
