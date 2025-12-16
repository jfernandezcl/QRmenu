import { useTranslation } from "react-i18next";
import React from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const registerSchema = z.object({
  restaurantName: z.string().min(2, "El nombre es obligatorio"),
  email: z.string().email("Email inválido"),
  password: z.string().min(6, "Mínimo 6 caracteres"),
});

type RegisterFormData = z.infer<typeof registerSchema>;

export default function RegisterForm() {
  const { t } = useTranslation();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterFormData>({
    resolver: zodResolver(registerSchema),
  });

  const onSubmit = (data: RegisterFormData) => {
    console.log("Formulario enviado:", data);
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="max-w-md mx-auto p-6 bg-white rounded shadow-md flex flex-col gap-4"
    >
      <h2 className="text-2xl font-semibold text-center">
        {t("register.title")}
      </h2>

      <div className="flex flex-col">
        <label className="mb-1 font-medium">
          {t("labels.restaurant_name")}
        </label>
        <input
          {...register("restaurantName")}
          className="px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Mi Restaurante"
        />
        {errors.restaurantName && (
          <span className="text-red-500 text-sm mt-1">
            {errors.restaurantName.message}
          </span>
        )}
      </div>

      <div className="flex flex-col">
        <label className="mb-1 font-medium">{t("labels.email")}</label>
        <input
          {...register("email")}
          type="email"
          className="px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
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
          className="px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
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
        className="mt-4 bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition"
      >
        {t("buttons.register")}
      </button>
    </form>
  );
}
