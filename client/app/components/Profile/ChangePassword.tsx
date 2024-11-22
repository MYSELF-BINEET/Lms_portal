import { styles } from "@/app/styles/style";
import { useUpdatePasswordMutation } from "@/redux/features/user/userApi";
import React, { FC, useEffect, useState } from "react";
import { toast } from "react-hot-toast";

type Props = {};

const ChangePassword: FC<Props> = (props) => {
    const [oldPassword, setOldPassword] = useState("");
    const [newPassword, setNewPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [updatePassword, { isSuccess, error }] = useUpdatePasswordMutation();

    const passwordChangeHandler = async (e: any) => {
        e.preventDefault();
        if (newPassword !== confirmPassword) {
            toast.error("Passwords do not match");
        } else {
            await updatePassword({ oldPassword, newPassword });
        }
    };

    useEffect(() => {
        if (isSuccess) {
            toast.success("Password changed successfully");
        }
        if (error) {
            if ("data" in error) {
                const errorData = error as any;
                toast.error(errorData.data.message);
            }
        }
    }, [isSuccess, error]);

    return (
        <div className="w-full px-2 pl-7 800px:px-5 800px:pl-0">
            <h1 className="block text-[25px] 800px:text-[30px] font-Poppins text-center font-[500] text-black dark:text-[#fff] pb-2">
                Change Password
            </h1>
            <div className="w-full">
                <form
                    aria-required
                    onSubmit={passwordChangeHandler}
                    className="flex flex-col items-center"
                >
                    <div className=" w-[100%] 800px:w-[60%] mt-5">
                        <label className="block pb-2 text-black dark:text-[#fff]">
                            Enter your old password
                        </label>
                        <input
                            type="password"
                            className={`${styles.input} !w-[100%] mb-4 800px:mb-0 text-black dark:text-[#fff]`}
                            required
                            value={oldPassword}
                            onChange={(e) => setOldPassword(e.target.value)}
                        />
                    </div>
                    <div className=" w-[100%] 800px:w-[60%] mt-2">
                        <label className="block pb-2 text-black dark:text-[#fff]">
                            Enter your new password
                        </label>
                        <input
                            type="password"
                            className={`${styles.input} !w-[100%] mb-4 800px:mb-0 text-black dark:text-[#fff]`}
                            required
                            value={newPassword}
                            onChange={(e) => setNewPassword(e.target.value)}
                        />
                    </div>
                    <div className=" w-[100%] 800px:w-[60%] mt-2">
                        <label className="block pb-2 text-black dark:text-[#fff]">
                            Enter your confirm password
                        </label>
                        <input
                            type="password"
                            className={`${styles.input} !w-[100%] mb-4 800px:mb-0 text-black dark:text-[#fff]`}
                            required
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}
                        />
                        <input
                            className="w-full  h-[40px] border border-transparent bg-gradient-to-r from-[#37a39a] to-[#3fa7d3] text-center dark:text-white text-white rounded-[5px] mt-8 cursor-pointer shadow-lg transform transition-transform duration-300 hover:scale-105 hover:from-[#3fa7d3] hover:to-[#37a39a] focus:outline-none focus:ring-4 focus:ring-[#37a39a]"
                            required
                            //   disabled={this.state.disabled}
                            value="Update"
                            type="submit"
                        />
                    </div>
                </form>
            </div>
        </div>
    );
};

export default ChangePassword;