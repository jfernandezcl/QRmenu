import { useTranslation } from "react-i18next";
import React from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const loginSchema = z.object({
  email: z.string().email("Email inválido"),
  password: z.string().min(6, "Mínimo 6 caracteres"),
});

type LoginFormData = z.infer<typeof loginSchema>;

export default function LoginForm() {
  const { t } = useTranslation();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormData>({
    resolver: zodResolver(loginSchema),
  });

  const onSubmit = (data: LoginFormData) => {
    console.log("Formulario enviado:", data);
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="max-w-md mx-auto w-full p-8 py-12 bg-white rounded shadow-md flex flex-col gap-4"
    >
      <h2 className="text-2xl font-semibold text-center">{t("login.title")}</h2>

      <div className="flex flex-col">
        <label className="mb-1 font-medium">{t("labels.email")}</label>
        <input
          {...register("email")}
          type="email"
          className="px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-buttonSecondary"
          placeholder="correo@restaurante.com"
        />
        {errors.email && (
          <span className="text-red-500 text-sm mt-1">
            {errors.email.message}
          </span>
        )}
      </div>

      <div className="flex flex-col">
        <label className="mb-1 font-medium">{t("labels.password")}</label>
        <input
          {...register("password")}
          type="password"
          className="px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-buttonSecondary"
          placeholder="********"
        />
        {errors.password && (
          <span className="text-red-500 text-sm mt-1">
            {errors.password.message}
          </span>
        )}
      </div>

      <button
        type="submit"
        className="mt-4 bg-bgSecundary text-white py-2 rounded hover:bg-hoverPrimary transition"
      >
        {t("buttons.login")}
      </button>
    </form>
  );
}
