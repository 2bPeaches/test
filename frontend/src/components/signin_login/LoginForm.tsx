import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { SignInInterface } from "../../interface/ISignIn";

import toast, { Toaster } from "react-hot-toast"; // Import toast functions
import { SignIn } from "../../service/https";
import { CheckSubscription } from "../../service/https/admin";

const LoginForm: React.FC = () => {
    const [username, setUsername] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const navigate = useNavigate(); // ใช้สำหรับการนำทาง

    const handleSignIn = async () => {
        const signInData: SignInInterface = {
            username,
            password,
        };

        try {
            const result = await SignIn(signInData);

            // Check if result contains the expected fields
            if (result && result.role && result.token) {
                localStorage.setItem("token", result.token);
                localStorage.setItem("id", result.id);
                localStorage.setItem("role", result.role);
                toast.success("Login successful!"); // Show success toast

                if (result.role === "admin") {
                    setTimeout(() => navigate("/dashboard"), 600); // Delay navigation
                } else if (result.role === "member") {
                    const check = await CheckSubscription(result.id);
                    console.log(check);
                    if (check.message === "Subscribed") {
                        setTimeout(() => navigate("/classBooking"), 600); // Delay navigation
                    } else {
                        setTimeout(() => navigate("/package"), 600);
                    }
                }
            } else {
                // Handle case where result doesn't have the expected fields
                toast.error("Unexpected response from server. Please try again.");
            }
        } catch (error) {
            console.error("Failed to sign in:", error);
            toast.error("Invalid username or password. Please try again."); // Show error toast
        }
    };

    return (
        <div className="h-full flex  mb-20 p-15 xl:mt-4 ">
            <div className="w-1/5 text-center"></div>
            <div className="w-3/5 text-center h-auto">
                <div className="text-lime-200">
                    <div className="text-5xl font-extrabold mt-20 mb-10 xl:text-5xl xl:mb-5 ">Login</div>
                    <div className="text-5xl font-extrabold mb-20 p-15 xl:text-4xl xl:mb-5">"Unlock your potential."</div>
                </div>

                <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                    <form className="space-y-6">
                        <div>
                            <div className="mt-2 text-left ">
                                <div className="text-xs mb-2 text-white xl:text-lg">Enter your Username</div>
                                <input
                                    id="username"
                                    name="username"
                                    type="text"
                                    value={username}
                                    onChange={(e) => setUsername(e.target.value)}
                                    required
                                    autoComplete="username"
                                    className="block w-full rounded-full text-center py-3 text-gray-100 shadow-sm bg-gray5"
                                    placeholder="Username"
                                />
                            </div>
                        </div>
                        <div>
                            <div className="mt-2 text-left">
                                <div className="text-xs mb-2 text-white xl:text-lg">Enter your Password</div>
                                <input
                                    id="password"
                                    name="password"
                                    type="password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    required
                                    autoComplete="current-password"
                                    className="block w-full rounded-full text-center py-3 text-gray-100 shadow-sm bg-gray5"
                                    placeholder="Password"
                                />
                            </div>
                        </div>

                        <div>
                            <button
                                className="w-4/5 mb-4 text-2xl mt-3 rounded-full font-bold bg-lime-400 text-black hover:bg-black hover:text-white py-2 transition-colors duration-300 xl:w-3/4"
                                type="button"
                                onClick={handleSignIn}
                            >
                                Login
                            </button>

                            <div className=" text-white mt-5 xl:mt-[17.9px]">
                                Don't have an account?
                                <Link to="/Register" className="font-medium text-primary-600 hover:underline dark:text-primary-500 ml-1">
                                    Sign Up
                                </Link>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
            <Toaster /> {/* Add Toaster for displaying toast notifications */}
        </div>
    );
};

export default ข้อความจากรูปภาพ:





















	2.	เปลี่ยนโหมดไฟล์ id_rsa เป็น 600 ด้วยคำสั่ง
chmod 600 ~/.ssh/id_rsa
	3.	ทำการ clone Git repository ของทีมตนเองจาก GitHub ด้วยคำสั่ง เช่น
git clone git@github.com:sut67/team00.git

จะเป็นของกลุ่ม G00 แล้วจะได้ directory เช่น team00 โดยจะทำการเปลี่ยน directory ไปที่ team00 ก่อนที่จะทำงานกับ code ด้วยคำสั่ง
cd team00
	4.	ตรวจสอบว่าเรายังอยู่ที่ main branch ของ Git repository หรือไม่ ด้วยคำสั่ง
git status

ถ้าไม่ใช่ทำการเปลี่ยน branch ให้เป็น main branch ก่อน ด้วยคำสั่ง
git checkout main
	5.	สร้าง branch ใหม่โดยตั้งต้นจาก main branch ให้มีชื่อ issue-<หมายเลข>
ด้วยคำสั่ง
git checkout -b issue-9

เนื่องจากตัวอย่างเป็นการทำงานเพื่อเขียนโค้ดให้ Issue #9
	6.	เขียนโค้ดและเพิ่มหรือลบไฟล์เข้า repository ด้วยคำสั่ง
git add <ไฟล์>
หรือ
git rm <ไฟล์>
	7.	ทำการ commit ด้วยข้อความ และลงท้ายด้วย close #<หมายเลข> เช่น
git commit -m "ทำ Entity Playlist - close #9"

โดยเป็นการ commit ส่งไปยัง branch ชื่อ issue-9 (ไม่ใช่การ commit ลง main branch)
	8.	อัปเดต main branch โดยการ merge โค้ดจาก branch issue-9 ไปยัง branch main โดนตรวจสอบว่าโค้ดใน branch main ตรงกับ GitHub โดยใช้คำสั่ง
git remote update : ดึงโค้ดลงมาไว้เบื้องหลัง
git rebase origin/main : ปรับฐาน issue-9 ให้ตรงกับ remote บน GitHub

สลับมาที่ main branch:
git checkout main

ทำการ merge issue-9 เข้าสู่ main:
git merge issue-9 --no-ff

จากนั้น push:
git push origin main

กรณี push ไม่ขึ้น (เช่น มีการเปลี่ยนแปลงใหม่ที่ remote):
	1.	ใช้คำสั่ง

git remote update
git rebase origin/main


	2.	ลอง push ซ้ำด้วยคำสั่ง

git push origin main
