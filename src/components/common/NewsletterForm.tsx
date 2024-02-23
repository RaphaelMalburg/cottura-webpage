"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "../ui/button";

import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { newsletterForm } from "@/lib/validations/newsletter-form";
import { usePathname } from "next/navigation";
import emailjs from "@emailjs/browser";
import { useRef } from "react";

type FormValues = z.infer<typeof newsletterForm>;

export function NewsletterForm() {
  const pathname = usePathname();
  const inputRef = useRef();

  const form = useForm<z.infer<typeof newsletterForm>>({
    resolver: zodResolver(newsletterForm),
    defaultValues: {
      email: "",
    },
  });

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormValues>();
  function onSubmit(data: z.infer<typeof newsletterForm>) {
    console.log(data);
    emailjs
      .send(process.env.NEXT_PUBLIC_SERVICE_ID || "", process.env.NEXT_PUBLIC_TEMPLATE_ID || "", data, {
        publicKey: process.env.NEXT_PUBLIC_PUBLIC_KEY,
      })
      .then((response) => {
        console.log("SUCCESS!", response.status, response.text);
        reset({ email: "" });
      })
      .catch((error) => {
        console.error("ERROR!", error);
      });
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className=" grid col-span-2  grid-cols-1 md:grid-cols-2 gap-2 ">
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem className="grid">
              <FormControl>
                <Input placeholder="Seu email aqui" {...field} className=" px-4 py-6 md:mx-0 mx-auto my-auto text-Black rounded-md justify-self-end max-w-[450px]" />
              </FormControl>

              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit" variant={"secondary"} className="px-4 py-6 my-auto md:mx-0 mx-auto rounded-md  ">
          Inscreva-se
        </Button>
      </form>
    </Form>
  );
}
