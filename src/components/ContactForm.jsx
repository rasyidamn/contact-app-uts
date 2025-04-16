import React, { useState } from "react";

const ContactForm = ({
  onAddContact,
  contactFormHidden,
  setContactFormHidden,
}) => {
  const [nomor, setNomor] = useState("");
  const [nama, setNama] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const nama_handleChange = (e) => setNama(e.target.value);
  const nomor_handleChange = (e) => setNomor(e.target.value.replace(/\D/g, ""));

  const handleSubmit = (e) => {
    e.preventDefault();

    setSubmitted(true);
    
    if (nama && nomor) {
      onAddContact({ nama: nama, nomor: nomor });
      setNama("");
      setNomor("");
      setContactFormHidden((prev) => !prev);
      setSubmitted(false);
      
    }
  };

  return (
    <>
      <div
        className={`fixed inset-0 bg-white/10 backdrop-blur-xs ${
          contactFormHidden ? "block" : "hidden"
        }`}
        onClick={() => setContactFormHidden((prev) => !prev)}
      ></div>
      <div
        className={`fixed flex flex-col items-center justify-center right-1/2 bottom-1/2 transform scale-0 translate-x-1/2 translate-y-1/2 transition-transform duration-300 ease-in-out ${
          contactFormHidden ? "scale-100" : ""
        }`}
      >
        <div className="flex flex-col justify-evenly items-center max-w-3xl bg-white p-4 rounded-lg min-w-72 h-72 ">
          <h1 className="font-semibold text-xl">Contact Form</h1>
          <form className="flex flex-col gap-2" onSubmit={handleSubmit}>
            <div className="flex flex-col">
              <label htmlFor="nama" className="">
                Nama
              </label>
              <input
                type="text"
                id="nama"
                className="border px-2 rounded-lg"
                value={nama}
                onChange={nama_handleChange}
              />
              <p
                className={`text-[11px]  ${
                  submitted && !nama ? " text-red-500" : "text-transparent"
                }`}
              >
                nama harus diisi!
              </p>
            </div>
            <div className="flex flex-col">
              <label htmlFor="nomor">Nomor Telepon</label>
              <input
                type="text"
                id="nomor"
                value={nomor}
                className="border px-2 rounded-lg"
                onChange={nomor_handleChange}
              />
              <p
                className={`text-[11px]  ${
                  submitted && !nomor ? " text-red-500" : "text-transparent"
                }`}
              >
                nomor harus diisi!
              </p>
            </div>
            <button
              type="submit"
              className="bg-gradient-to-r from-emerald-500 duration-150 to-cyan-500 text-white rounded-full text-xl px-4 py-2 text-center hover:-translate-y-1 active:scale-105"
            >
              tambah kontak
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default ContactForm;
