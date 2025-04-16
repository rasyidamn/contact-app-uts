import React from "react";
import profilePic from "../assets/defaultPP.jpg";

const ListContact = ({ contact, deleteContact }) => {
  return (
    <div className="flex flex-col   max-w-xl mx-auto justify gap-2 mb-4">
      {contact.map((contact, index) => {
        return (
          <div
            key={index}
            className="flex justify-start gap-6 px-4  text-slate-900 bg-slate-200 rounded-lg py-2"
          >
            <div className="h-12 w-12 rounded-full overflow-hidden">
              <img
                src={profilePic}
                alt="Profile"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex-1/2">
              <p className="text-xl fontsemi">{contact.nama}</p>
              <p>{contact.nomor}</p>
            </div>
            <div className="flex items-center gap-2">
              <button className="bg-gradient-to-r from-emerald-500 duration-150 to-cyan-500 text-white rounded-full text-xl px-4 py-2 text-center hover:-translate-y-1 active:scale-105">
                Edit
              </button>
              <button
                className="bg-gradient-to-r from-red-500 duration-150 to-red-700 text-white rounded-full text-xl px-4 py-2 text-center hover:-translate-y-1 active:scale-105"
                onClick={() => deleteContact(index)}
              >
                Hapus
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ListContact;
