import React,{ useState, useEffect } from "react";
import { useFormik } from "formik";
import { ContactSchema } from "../Schema/SchemaForm";
import { FaDove } from "react-icons/fa";
import { GoCommentDiscussion, GoCheckCircleFill } from "react-icons/go";
import { BiTimeFive } from "react-icons/bi";

const Form =() => {
    const [comments, setComments] = useState([]);
    const [jumlahComent, setJumlahComment] =useState(0);

    const onSubmit = async (values, actions) =>{
        console.log(values);
        console.log(actions);
        await new Promise((resolve) => setTimeout(resolve, 1000));
        actions.resetForm()
        // Menyimpan komentar ke state comments
        setComments((prevComments) => [...prevComments, values]);
        // Mengupdate jumlah komentar
        setJumlahComment((prevNum) => prevNum +1);
    }
    const { values, errors, touched, isSubmitting, handleBluer, handleChange, handleSubmit } = useFormik({
        initialValues: {
            Nama:"",
            Massage:"",
            Kehadiran:"",
        },
        validationSchema: ContactSchema,
        onSubmit
    })
    console.log(errors)

    return(
        <div className="bg-coklat relative pb-10 mt-10" >
            <h3 className="capitalize text-4xl text-white text-center mt-4 mb-7 font-sambung font-bold italic wow fadeIn">
                Berikan doa & ucapan 
            </h3>
            <form action="" 
                  onSubmit={handleSubmit}
                  autoComplete="off"
                  className="lg:w-[40%] w-[90%] md:w-[60%] mx-auto bg-[#f5f3ee] rounded-2xl wow pulse"
                  data-wow-offset="100"
            >
                <div className="text-[#79746b] px-5 py-2 flex items-center gap-4">
                    <FaDove/>
                    <p className="font-bold">{jumlahComent} Ucapan</p>
                </div>
                <div className="bg-[#dfdcd2] w-full h-[1px]"></div>
                <div className="py-1 px-5 mt-3">
                    <input 
                        value={values.Nama}
                        onChange={handleChange}
                        type="text"
                        name='Nama'
                        id='Nama'
                        autoComplete='off'
                        placeholder='Name'
                        onBlur={handleBluer}
                        className={`mt-2 outline outline-2 outline-[#dfdcd2] px-2 py-2  text-[#79746b] 
                        ${errors.Nama && touched.Nama ? "input-error w-full ":"block mx-auto  w-full "}
                        `} 
                    />
                </div>
                <div className="py-1 px-5">
                    <textarea 
                        value={values.Massage}
                        onChange={handleChange}
                        type="text"
                        name='Massage'
                        id='Massage'
                        cols="78"
                        rows="4"
                        placeholder='Tulis Ucapan & Doa'
                        onBlur={handleBluer}
                        className={`mt-2 outline outline-2 outline-[#dfdcd2] px-2 py-2 ${errors.Massage && touched.Massage ? "input-error w-full":"block mx-auto text-[#79746b]  w-full "}`}  
                    />
                    {errors.Massage && touched.Massage && (<p className="error  text-red-500">{errors.Massage}</p>)}
                </div>
                <div className="py-1 px-5">
                    <select
                        name="Kehadiran"
                        value={values.Kehadiran}
                        onChange={handleChange}
                        onBlur={handleBluer}
                        placeholder="Konfirmasi Kehadiran"
                        className={`mt-2 outline outline-2 outline-[#dfdcd2] px-2 py-2 text-[#79746b]
                        ${errors.Kehadiran && touched.Kehadiran ? "input-error w-full":"block mx-auto w-full "}`}  
                    >
                        <option value="">Konfirmasi Kehadiran</option>
                        <option value="Hadir">Hadir</option>
                        <option value="Tidak-Hadir">Tidak Hadir</option>
                    </select>
                </div>
                <div className="px-5">
                    <button disabled={isSubmitting} type="submit" className={`rounded-lg font-bold py-1 my-7 px-4  bg-[#786a4a] text-white text-base`}>
                        Kirim
                    </button>
                </div>
                {/* menampung tanggapan dari yang mengirim lewat form */}
                {comments.length > 0 && (
                <div className="overflow-y-auto h-[11rem] ">
                    {comments.reverse().map((comment, index) => (
                    <div className=" ">
                        <div className="bg-[#dfdcd2] w-full h-[1px]"></div>
                        <div key={index} className=" px-5 py-3 gap-3 flex items-start">
                            <div className="text-xl mt-2 ">
                                <GoCommentDiscussion/>
                            </div>
                            <div>
                                <div className="flex gap-2 items-center">
                                    <p className="font-bold text-coklat-100">{comment.Nama}</p>
                                    {comment.Kehadiran === "Hadir" && (
                                        <p className="text-xs flex items-center bg-coklat text-white px-2 rounded-lg">
                                        <GoCheckCircleFill />
                                        {comment.Kehadiran}
                                        </p>
                                    )}
                                </div>
                                <p className="flex items-center text-[10px] text-gray-400">
                                    <BiTimeFive/>
                                    3 bulan, 2 minggu lalu
                                </p>
                                <p className="text-coklat-100">{comment.Massage}</p>
                            </div>
                        </div>
                     </div>
                    ))}
                </div>
            )}
            </form>
        </div>
    )
}
export default Form