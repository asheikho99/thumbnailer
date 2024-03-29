"use client";

import React from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";

import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { useForm } from "react-hook-form";
import { Search } from "lucide-react";

const SearchBar = () => {
  const router = useRouter();

  const urlRegex = /(?:https?:\/\/)?(?:www\.)?(?:youtube\.com\/(?:[^\/\n\s]+\/\S+\/|(?:v|e(?:mbed)?)\/|\S*?[?&]v=)|youtu\.be\/)([a-zA-Z0-9_-]{11})/;

  const formSchema = z.object({
    videoId: z
      .string()
      .refine((val) => urlRegex.test(val), {
        message: "Please enter a valid video URL.",
      })
      .transform((val) => {
        const match = val.match(urlRegex);
        return match ? match[1] : '';
      }),
  });

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      videoId: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    router.push(`/?search=${values.videoId}`);
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="videoId"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <div className="flex flex-row space-x-2">
                  <Input {...field} placeholder="Enter the video URL" />
                  <Button type="submit">
                    <Search />
                  </Button>
                </div>
              </FormControl>
              <FormDescription>
                Enter the full video URL.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
      </form>
    </Form>
  );
};

export default SearchBar;
