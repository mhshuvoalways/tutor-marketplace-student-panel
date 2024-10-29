"use client";

import Button1 from "@/app/components/common/button/Button1";
import Input from "@/app/components/common/input/Input";
import UploadImage from "@/app/components/common/upload";
import {
  changeAvatar,
  changePassword,
  clearError,
  getMyAccount,
} from "@/store/features/myAccountSlice";
import { useAppDispatch, useAppSelector } from "@/store/hook";
import Image from "next/image";
import { useEffect, useState } from "react";

const Student = () => {
  const [image, setImage] = useState(null);

  const [password, setPassword] = useState({
    name: "",
    currentPassword: "",
    newPassword: "",
    confirmPassword: "",
  });

  const dispatch = useAppDispatch();

  const { data, isLoadingAvatar, isLoadingPassword, successMessage, errors } =
    useAppSelector((store) => store.myAccount);

  useEffect(() => {
    if (!data) {
      dispatch(getMyAccount());
    }
  }, [dispatch, data]);

  useEffect(() => {
    if (!password.name) {
      setPassword({
        ...password,
        name: data?.name,
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data?.name]);

  let src = "";
  if (image) {
    src = URL.createObjectURL(image);
  } else if (data?.avatar?.url) {
    src = data?.avatar?.url;
  }

  const imageHandler = (acceptedFiles) => {
    dispatch(clearError());
    setImage(acceptedFiles[0]);
  };

  const changeAvatarHandler = () => {
    dispatch(clearError());
    const formData = new FormData();
    formData.append("file", image);
    formData.append("upload_preset", "tutor-marketplace");
    dispatch(changeAvatar(formData));
  };

  const changeHandler = (event) => {
    dispatch(clearError(event.target.name));
    setPassword({
      ...password,
      [event.target.name]: event.target.value,
    });
  };

  const submitHandler = () => {
    dispatch(clearError());
    dispatch(changePassword(password));
  };

  return (
    <div className="bg-white rounded shadow-sm w-full lg:w-10/12 p-5">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 items-end">
        <div className="space-y-5">
          <div className="flex items-center gap-5 text-nowrap">
            {src ? (
              <Image
                src={src}
                alt=""
                className="w-20 lg:size-40 rounded-full"
                width={400}
                height={400}
              />
            ) : (
              <p
                className={`rounded-full bg-primary text-white flex items-center justify-center size-20 lg:size-40 text-2xl lg:text-7xl`}
              >
                {data?.name?.split("")[0]}
              </p>
            )}
            <div className="space-y-3">
              <div>
                <p className="text-2xl">{data?.name}</p>
                <p className="text-gray-700">{data?.email}</p>
              </div>
              <p className="text-gray-400">Max file size is 10 MB</p>
            </div>
          </div>
          <UploadImage imageHandler={imageHandler} />
          <Button1
            title={"Save"}
            onClick={changeAvatarHandler}
            isClicked={isLoadingAvatar}
          />
          {errors.message && (
            <p className="text-red-400 text-center">{errors.message}</p>
          )}
        </div>
        <div className="space-y-5">
          <p className="text-xl">User Info</p>
          <div>
            <Input
              placeholder="Your Name"
              name={"name"}
              changeHandler={changeHandler}
              value={password.name}
            />
            {errors.name && (
              <p className="text-red-400 text-left">{errors.name}</p>
            )}
          </div>
          {data?.provider === "credential" && (
            <>
              <div>
                <Input
                  placeholder="Current password"
                  name={"currentPassword"}
                  changeHandler={changeHandler}
                  value={password.currentPassword}
                  type="password"
                />
                {errors.currentPassword && (
                  <p className="text-red-400 text-left">
                    {errors.currentPassword}
                  </p>
                )}
              </div>
              <div>
                <Input
                  placeholder="New password"
                  name={"newPassword"}
                  changeHandler={changeHandler}
                  value={password.newPassword}
                  type="password"
                />
                {errors.newPassword && (
                  <p className="text-red-400 text-left">{errors.newPassword}</p>
                )}
              </div>
              <div>
                <Input
                  placeholder="Confirm password"
                  name={"confirmPassword"}
                  changeHandler={changeHandler}
                  value={password.confirmPassword}
                  type="password"
                />
                {errors.confirmPassword && (
                  <p className="text-red-400 text-left">
                    {errors.confirmPassword}
                  </p>
                )}
              </div>
            </>
          )}
          <Button1
            title={"Change"}
            onClick={submitHandler}
            isClicked={isLoadingPassword}
          />
          {errors.message && (
            <p className="text-red-400 text-center">{errors.message}</p>
          )}
        </div>
      </div>
      {successMessage && (
        <p className="text-green-400 text-center mt-5">{successMessage}</p>
      )}
    </div>
  );
};

export default Student;
