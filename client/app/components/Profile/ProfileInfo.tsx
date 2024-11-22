import Image from "next/image";
import { styles } from "../../../app/styles/style";
import React, { FC, useEffect, useState } from "react";
import { AiOutlineCamera } from "react-icons/ai";
import avatarIcon from "../../../public/assets/avatar.png";
import {
    useEditProfileMutation,
    useUpdateAvatarMutation,
} from "@/redux/features/user/userApi";
import { useLoadUserQuery } from "@/redux/features/api/apiSlice";
import { toast } from "react-hot-toast";
import { Button } from "@mui/material";

type Props = {
    avatar: string | null;
    user: any;
};

const ProfileInfo: FC<Props> = ({ avatar, user }) => {
    // state={
    //     disabled:true;
    // }
    const [name, setName] = useState(user && user.name);
    const [updateAvatar, { isSuccess, error }] = useUpdateAvatarMutation();
    const [editProfile, { isSuccess: success, error: updateError }] =
        useEditProfileMutation();
    const [loadUser, setLoadUser] = useState(false);
    const { } = useLoadUserQuery(undefined, { skip: loadUser ? false : true });

    const imageHandler = async (e: any) => {
        const fileReader = new FileReader();

        fileReader.onload = () => {
            if (fileReader.readyState === 2) {
                const avatar = fileReader.result;
                console.log(avatar);
                updateAvatar(avatar);
            }
        };
        fileReader.readAsDataURL(e.target.files[0]);
    };

    useEffect(() => {
        if (isSuccess) {
            toast.success("Profile picture is updating\n!If not,Please refresh the page");
            setLoadUser(true);
        }
        if (error || updateError) {
            console.log(error);
        }
        if (success) {
            toast.success("Profile updated successfully!");
            setLoadUser(true);
        }
    }, [isSuccess, error, success, updateError]);

    const handleSubmit = async (e: any) => {
        e.preventDefault();
        if (name !== "") {
            await editProfile({
                name: name,
            });
        }
    };
    //   let handleChange=(e)=>{
    //     if()
    //   }

    return (
        <>
            <div className="flex justify-center w-full">
                <div className="relative">
                    <Image
                        src={user.avatar || avatar ? user.avatar.url || avatar : avatarIcon}
                        alt=""
                        width={120}
                        height={120}
                        className="w-[120px] h-[120px] cursor-pointer border-[3px] border-[#37a39a] rounded-full"
                    />
                    <input
                        type="file"
                        name=""
                        id="avatar"
                        className="hidden"
                        onChange={imageHandler}
                        accept="image/png,image/jpg,image/jpeg,image/webp"
                    />
                    <label htmlFor="avatar">
                        <div className="w-[30px] h-[30px] bg-slate-900 rounded-full absolute bottom-2 right-2 flex items-center justify-center cursor-pointer">
                            <AiOutlineCamera size={20} className="z-1" />
                        </div>
                    </label>
                </div>
            </div>
            <br />
            <br />
            <div className="w-full pl-6 800px:pl-10">
                <form onSubmit={handleSubmit}>
                    <div className="800px:w-[50%] m-auto block pb-4">
                        <div className="w-[100%]">
                            <label className="block pb-2">Full Name</label>
                            <input
                                type="text"
                                className={`${styles.input} !w-[100%] mb-4 800px:mb-0`}
                                required
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                            />
                        </div>
                        <div className="w-[100%] pt-2">
                            <label className="block pb-2">Email Address</label>
                            <input
                                type="text"
                                readOnly
                                className={`${styles.input} !w-[100%] mb-1 800px:mb-0`}
                                required
                                value={user?.email}
                            />
                        </div>
                        <input
                            className="w-full  h-[40px] border border-transparent bg-gradient-to-r from-[#37a39a] to-[#3fa7d3] text-center dark:text-white text-white rounded-[5px] mt-8 cursor-pointer shadow-lg transform transition-transform duration-300 hover:scale-105 hover:from-[#3fa7d3] hover:to-[#37a39a] focus:outline-none focus:ring-4 focus:ring-[#37a39a]"
                            required
                            //   disabled={this.state.disabled}
                            value="Update"
                            type="submit"
                        />

                    </div>
                </form>
                <br />
            </div>
        </>
    );
};

export default ProfileInfo;

