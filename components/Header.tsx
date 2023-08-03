"use client";
import toast from "react-hot-toast";
import { twMerge } from "tailwind-merge";
import { useRouter } from "next/navigation";
import { FaUserAlt } from "react-icons/fa";
import { BiSearch } from "react-icons/bi";
import { HiHome } from "react-icons/hi";
import { RxCaretLeft, RxCaretRight } from "react-icons/rx";
import { useSupabaseClient } from "@supabase/auth-helpers-react";

import useAuthModal from "@/hooks/useAuthModal";
import { useUser } from "@/hooks/useUser";

import Button from "./Button";

interface HeaderProps {
  children: React.ReactNode;
  className?: string;
}

const Header: React.FC<HeaderProps> = ({ children, className }) => {
  const { user } = useUser();
  const router = useRouter();
  const authModal = useAuthModal();
  const supabaseClient = useSupabaseClient();

  const handleLogout = async () => {
    const { error } = await supabaseClient.auth.signOut();
    router.refresh();

    if (error) {
      toast.error(error.message);
    }
  };
  return (
    <div
      className={twMerge(
        "h-fit bg-gradient-to-b from-emerald-800 p-6",
        className
      )}
    >
      <div className='w-full mb-4 flex items-center justify-between'>
        <div className='hidden md:flex gap-x-2 items-center'>
          <button
            onClick={() => router.back()}
            className='bg-black rounded-full flex justify-center items-center hover:opacity-75 transition'
          >
            <RxCaretLeft size={35} className='text-white' />
          </button>
          <button
            onClick={() => router.forward()}
            className='bg-black rounded-full flex justify-center items-center hover:opacity-75 transition'
          >
            <RxCaretRight size={35} className='text-white' />
          </button>
        </div>
        <div className='flex md:hidden gap-x-2 items-center'>
          <button className='bg-white rounded-full p-2 flex justify-center items-center hover:opacity-75 transition'>
            <HiHome size={20} className='text-black' />
          </button>
          <button className='bg-white rounded-full p-2 flex justify-center items-center hover:opacity-75 transition'>
            <BiSearch size={20} className='text-black' />
          </button>
        </div>
        <div className='flex justify-between items-center gap-x-4'>
          {user ? (
            <div className='flex gap-x-4 items-center'>
              <Button onClick={handleLogout} className='bg-white px-6 py-2'>
                Logout
              </Button>
              <Button
                onClick={() => router.push("/account")}
                className='bg-white'
              >
                <FaUserAlt />
              </Button>
            </div>
          ) : (
            <div>
              <Button onClick={authModal.onOpen} className='bg-white px-6 py-2'>
                Sign In
              </Button>
            </div>
          )}
        </div>
      </div>
      {children}
    </div>
  );
};

export default Header;
