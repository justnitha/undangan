import * as yup from "yup";

export const ContactSchema = yup.object().shape({
    // Nama    : yup
    //             .string()
    //             .min(8)
    //             .max(59)
    //             .required(),
    Massage : yup
                .string()
                .min(2)
                .required("minimal 2 karakter"),
    Kehadiran: yup .string()
                    .oneOf(["Hadir","Tidak-Hadir"],"i")
                    .required()

})