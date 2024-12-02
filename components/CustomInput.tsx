import React, { useState } from "react";
import { FormControl, FormField, FormLabel, FormMessage } from "./ui/form";
import { Input } from "./ui/input";
import { Control, FieldPath } from "react-hook-form";
import { z } from "zod";
import { authFormSchema } from "@/lib/utils";
import { Button } from "./ui/button";
import { Eye, EyeOff } from "lucide-react";

const formSchema = authFormSchema("sign-up");

interface CustomInputProps {
  control: Control<z.infer<typeof formSchema>>;
  name: FieldPath<z.infer<typeof formSchema>>;
  label: string;
  placeholder: string;
  autocomplete?: string;
}

const CustomInput = ({
  control,
  name,
  label,
  placeholder,
  autocomplete,
}: CustomInputProps) => {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword((prev) => !prev);
  };
  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <div className="form-item">
          <FormLabel>{label}</FormLabel>
          <div className="flex w-full flex-col">
            <FormControl>
              <div className="relative">
                <Input
                  placeholder={placeholder}
                  className="input-class"
                  type={
                    name === "password"
                      ? showPassword
                        ? "text"
                        : "password"
                      : "text"
                  }
                  autoComplete={autocomplete}
                  {...field}
                />
                {name === "password" && (
                  <Button
                    type="button"
                    variant="ghost"
                    size="icon"
                    onClick={togglePasswordVisibility}
                    className="absolute right-0 top-1/2 transform -translate-y-1/2"
                    aria-label={
                      showPassword ? "Hide password" : "Show password"
                    }
                  >
                    {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                  </Button>
                )}
              </div>
            </FormControl>
            <FormMessage className="mt-2" />
          </div>
        </div>
      )}
    />
  );
};

export default CustomInput;
