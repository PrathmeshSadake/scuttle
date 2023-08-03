"use client";
import {
  useSessionContext,
  useSupabaseClient,
} from "@supabase/auth-helpers-react";
import { useRouter } from "next/navigation";
import { Auth } from "@supabase/auth-ui-react";
import { ThemeSupa } from "@supabase/auth-ui-shared";

import Modal from "./Modal";
import useAuthModal from "@/hooks/useAuthModal";
import { useEffect } from "react";

const AuthModal = () => {
  const supabase = useSupabaseClient();
  const session = useSessionContext();
  const authModal = useAuthModal();
  const router = useRouter();

  useEffect(() => {
    if (session) {
      router.refresh();
      authModal.onClose();
    }
  }, [session, router, authModal.onClose]);

  const onChange = (open: boolean) => {
    if (!open) authModal.onClose();
  };
  return (
    <Modal
      title='Welcome back'
      description='Login to your account'
      isOpen={authModal.isOpen}
      onChange={onChange}
    >
      <Auth
        supabaseClient={supabase}
        theme='dark'
        magicLink
        appearance={{
          theme: ThemeSupa,
          variables: {
            default: {
              colors: {
                brand: "#404040",
                brandAccent: "#22c55e",
              },
            },
          },
        }}
        providers={["google"]}
      />
    </Modal>
  );
};

export default AuthModal;
