"use client";

import React, { useState } from "react";

import { set, z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import { authFormSchema } from "@/lib/utils";
import CustomInput from "./CustomInput";
import { AlertCircle, Loader2 } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { signIn, signUp } from "@/lib/actions/user.actions";
import { AppwriteException } from "node-appwrite";
import { Alert, AlertDescription, AlertTitle } from "./ui/alert";

const AuthForm = ({ type }: { type: string }) => {
  const router = useRouter();
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const formSchema = authFormSchema(type);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
      firstName: "",
      lastName: "",
      idNumber: "",
      address1: "",
      city: "",
      province: "",
      postalCode: "",
      dateOfBirth: "",
      email: "",
      password: "",
    },
  });

  const onSubmit = async (data: z.infer<typeof formSchema>) => {
    setLoading(true);
    setError(null);

    try {
      if (type === "sign-up") {
        const userData = {
          username: data.username!,
          firstName: data.firstName!,
          lastName: data.lastName!,
          idNumber: data.idNumber!,
          address1: data.address1!,
          city: data.city!,
          province: data.province!,
          postalCode: data.postalCode!,
          dateOfBirth: data.dateOfBirth!,
          email: data.email,
          password: data.password,
        };
        const newUser = await signUp(userData);
        setUser(newUser);
        if (newUser) router.push("/dashboard");
      }

      if (type === "sign-in") {
        const response = await signIn({
          email: data.email,
          password: data.password,
        });
        if (response) router.push("/dashboard");
      }
    } catch (err) {
      if (err instanceof Error) {
        // console.log("Error message:", err.message);
        setError(err.message);
      } else {
        // console.log("Unknown error format:", err);
        setError("An unknown error occurred. Please try again.");
      }
    } finally {
      setLoading(false);
    }
  };
  return (
    <section className="auth-form">
      <header className="flex flex-col gap-5 md:gap-8">
        <div className="flex flex-col gap-1 md:gap-3">
          <h1 className="text-24 lg:text-36 font-semibold text-secondary-foreground">
            {type === "sign-in" ? "Sign In" : "Sign Up"}
            <p className="text-16 font-normal">
              Please enter your details to continue
            </p>
          </h1>
        </div>
      </header>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
          {type === "sign-up" && (
            <>
              <CustomInput
                control={form.control}
                name="username"
                label="Username"
                placeholder="Enter your username"
                autocomplete="username"
              />

              <div className="flex gap-4">
                <CustomInput
                  control={form.control}
                  name="firstName"
                  label="First Name"
                  placeholder="Enter your first name"
                  autocomplete="given-name"
                />

                <CustomInput
                  control={form.control}
                  name="lastName"
                  label="Last Name"
                  placeholder="Enter your last name"
                  autocomplete="family-name"
                />
              </div>

              <CustomInput
                control={form.control}
                name="idNumber"
                label="ID Number"
                placeholder="Enter your ID number"
                autocomplete="off"
              />

              <CustomInput
                control={form.control}
                name="address1"
                label="Address"
                placeholder="Enter your address"
                autocomplete="street-address"
              />

              <div className="flex gap-4">
                <CustomInput
                  control={form.control}
                  name="city"
                  label="City"
                  placeholder="Enter your city"
                  autocomplete="address-level2"
                />

                <CustomInput
                  control={form.control}
                  name="province"
                  label="Province"
                  placeholder="Ex. Gauteng"
                  autocomplete="address-level1"
                />
                <CustomInput
                  control={form.control}
                  name="postalCode"
                  label="Postal Code"
                  placeholder="Ex. 12345"
                  autocomplete="postal-code"
                />
              </div>

              <CustomInput
                control={form.control}
                name="dateOfBirth"
                label="Date of Birth"
                placeholder="YYYY-MM-DD"
                autocomplete="bday"
              />
            </>
          )}
          <CustomInput
            control={form.control}
            name="email"
            label="Email"
            placeholder="Email"
            autocomplete="email"
          />
          <CustomInput
            control={form.control}
            name="password"
            label="Password"
            placeholder="Password"
            autocomplete="current-password"
          />
          {error && (
            <Alert variant="destructive">
              <AlertCircle className="h-4 w-4" />
              <AlertTitle>Error</AlertTitle>
              <AlertDescription>
                Incorrect email or password. Please try again.
              </AlertDescription>
            </Alert>
          )}
          <div className="flex flex-col gap-4">
            <Button type="submit" disabled={loading}>
              {loading ? (
                <>
                  <Loader2 size={20} className="animate-spin" /> &nbsp;
                  Loading...
                </>
              ) : type === "sign-in" ? (
                "Sign In"
              ) : (
                "Sign Up"
              )}
            </Button>
          </div>
        </form>
      </Form>
      <footer className="flex justify-center gap-1">
        <p className="text-14 font-normal">
          {type === "sign-in"
            ? "Don't have an account?"
            : "Already have an account?"}
        </p>
        <Link
          href={type === "sign-in" ? "/sign-up" : "/sign-in"}
          className="text-14 font-semibold text-primary"
        >
          {type === "sign-in" ? "Sign Up" : "Sign In"}
        </Link>
      </footer>
    </section>
  );
};

export default AuthForm;
