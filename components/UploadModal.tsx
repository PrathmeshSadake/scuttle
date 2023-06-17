"use client";

import React, { useEffect, useState } from "react";
import {
  useSessionContext,
  useSupabaseClient,
} from "@supabase/auth-helpers-react";
import { useRouter } from "next/navigation";
import Modal from "./Modal";
import useUploadModal from "@/hooks/useUploadModal";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import Input from "./Input";
import Button from "./Button";

const UploadModal = () => {
  const { session } = useSessionContext();
  const router = useRouter();
  const { onClose, isOpen } = useUploadModal();
  const [isLoading, setIsLoading] = useState(false);
  const { register, handleSubmit, reset } = useForm<FieldValues>({
    defaultValues: {
      author: "",
      title: "",
      song: null,
      image: null,
    },
  });

  useEffect(() => {
    if (session) {
      router.refresh();
      onClose();
    }
  }, [session, router, onClose]);

  const onChange = (open: boolean) => {
    if (!open) {
      reset();
      onClose();
    }
  };

  const onSubmit: SubmitHandler<FieldValues> = async (values) => {
    // Upload to supabase
  };

  return (
    <Modal
      title='Add a Song'
      description='Upload an MP3 file.'
      isOpen={isOpen}
      onChange={onChange}
    >
      <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col gap-y-4'>
        <Input
          id='title'
          disabled={isLoading}
          {...register("title", { required: true })}
          placeholder='Song Title'
        />
        <Input
          id='author'
          disabled={isLoading}
          {...register("author", { required: true })}
          placeholder='Song Author Name'
        />
        <div>
          <div className='pb-1'>Select a song file</div>
          <Input
            placeholder='test'
            disabled={isLoading}
            type='file'
            accept='.mp3'
            id='song'
            {...register("song", { required: true })}
          />
        </div>
        <div>
          <div className='pb-1'>Select an image</div>
          <Input
            placeholder='test'
            disabled={isLoading}
            type='file'
            accept='image/*'
            id='image'
            {...register("image", { required: true })}
          />
        </div>
        <Button disabled={isLoading} type='submit' className='bg-green-400'>
          Create
        </Button>
      </form>
    </Modal>
  );
};

export default UploadModal;
