import React, { useEffect, useState } from "react";
import { TfiUser } from "react-icons/tfi";
import { SlUserFemale } from "react-icons/sl";
import {
  addDoc,
  collection,
  onSnapshot,
  orderBy,
  query,
  Timestamp,
} from "firebase/firestore";
import { db } from "../configfirebase";

const inputStyles =
  "border border-light text-sm focus:outline-none focus:ring-transparent focus:border focus:border-b-1 focus:border-t-0 focus:border-r-0 focus:border-l-0 focus:border-light border-t-0 border-l-0 border-r-0 border-b-1 bg-transparent text-light placeholder-light px-1 py-1 mb-2 w-full";

const RatingCom = () => {
  const [komentar, setKomentar] = useState([]);
  const [formData, setFormData] = useState({
    nama: "",
    pesan: "",
    waktu: Timestamp.now().toDate(),
  });
  const [kelamin, setKelamin] = useState("");

  // Create in Firebase
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.nama || !formData.pesan) {
      alert("Please Fill In The Blanks");
    }
    setFormData({
      nama: "",
      pesan: "",
    });
    setKelamin("");
    await addDoc(collection(db, "komentar"), {
      nama: formData.nama,
      pesan: formData.pesan,
      kelamin: kelamin,
      waktu: Timestamp.now().toDate(),
    })
      .then(() => {
        console.log("Berhasil");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  // Read Firebase
  useEffect(() => {
    const komentarRef = collection(db, "komentar");
    const q = query(komentarRef, orderBy("waktu", "desc"));
    onSnapshot(q, (snapshot) => {
      const listKomentar = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setKomentar(listKomentar);
    });
  }, []);
  return (
    <div className="px-2 py-2 bg-dark-secondary text-gold-secondary mt-[-3rem]">
      <p className="text-center my-5">Lets Talk With Us on Website</p>
      <div className="lg:flex justify-center gap-3 lg:mx-10 md:mx-4 mx-1">
        <div className="bg-dark-primary px-4 py-4 lg:w-[60%] rounded-sm lg:h-[50vh] lg:mb-0 mb-2">
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              name="nama"
              value={formData.nama}
              onChange={(e) => handleChange(e)}
              placeholder="Your Name"
              required
              className={inputStyles}
            />
            <div>
              <select
                name="kelamin"
                onChange={(e) => setKelamin(e.target.value)}
                className={`${inputStyles}mb-2 w-full pl-0`}
              >
                <option selected>Jenis Kelamin</option>
                <option value="1">Laki-laki</option>
                <option value="2">Perempuan</option>
              </select>
            </div>
            <textarea
              name="pesan"
              rows={6}
              value={formData.pesan}
              onChange={(e) => handleChange(e)}
              className={`${inputStyles}`}
              placeholder="Message"
              required
            />
            <button className="bg-white px-2 py-2 w-full text-dark-primary tracking-widest font-semibold fontPoppins mt-2">
              Komentari
            </button>
          </form>
        </div>
        <div className="lg:w-[40%] bg-dark-primary px-2 py-2 rounded-sm h-[50vh]">
          <h1 className="text-center fontPoppins text-xl my-3">
            {`${komentar.length} Komentar`}
          </h1>
          <div className="h-[40vh] overflow-auto">
            <div className="rounded-sm bg-transparent text-light px-2 py-2">
              {komentar.map((item, index) => (
                <div>
                  <div
                    className="flex justify-start items-center gap-2"
                    key={index}
                  >
                    <div className="bg-transparent border border-light h-[30px] w-[30px] rounded-[50%] flex justify-center items-center text-light">
                      <p>
                        {item.kelamin === "1" ? <TfiUser /> : <SlUserFemale />}
                      </p>
                    </div>
                    <div className="lg:text-lg text-light lg:fontPoppins fontPoppins capitalize">
                      <p> {item.nama} </p>
                    </div>
                  </div>
                  <div className="ml-9 text-start fontPoppins">
                    <p className="text-sm text-slate-300">{item.pesan}</p>
                    <div className="text-[10px] flex justify-start items-center gap-1 my-1 text-slate-400">
                      <p>{item.waktu.toDate().toDateString()}</p>
                    </div>
                  </div>
                  <div className="bg-slate-300 h-[1px] w-full mb-2"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RatingCom;
