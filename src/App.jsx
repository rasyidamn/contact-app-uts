import { useState } from "react";
import ContactForm from "./components/ContactForm";
import ListContact from "./components/ListContact";

function App() {
  const [contact, setContact] = useState([]);
  const [contactFormHidden, setContactFormHidden] = useState(true);

  const addContact = (newContact) => {
    setContact([...contact, newContact]);
  };

  const handleDelete = (index) => {
    const updatedContact = [...contact];
    updatedContact.splice(index, 1);
    setContact(updatedContact);
  };

  return (
    // app contact list

    <div className="min-h-screen w-full bg-slate-950 py-12 px-12 font-mono">
      <h1 className="text-4xl min-w-[300px] font-mono font-black text-center mx-auto  bg-clip-text text-transparent bg-gradient-to-b from-emerald-500 to-cyan-500 mb-4">
        Contact List
      </h1>

      <ListContact contact={contact} deleteContact={handleDelete} />

      <ContactForm
        onAddContact={addContact}
        contactFormHidden={contactFormHidden}
        setContactFormHidden={setContactFormHidden}
      />

      <button
        className="fixed flex justify-center items-center gap-2 bottom-10 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-emerald-500 duration-150 to-cyan-500 text-white rounded-full text-xl px-4 py-2 text-center hover:-translate-y-1 active:scale-105"
        onClick={() => setContactFormHidden((prev) => !prev)}
      >
        <svg
          className="w-6 h-6 text-gray-800 dark:text-white"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          fill="none"
          viewBox="0 0 24 24"
        >
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M5 12h14m-7 7V5"
          />
        </svg>
        <span className="text-sm font-bold md:text-xl">Tambah Kontak</span>
      </button>
    </div>
  );
}

export default App;
