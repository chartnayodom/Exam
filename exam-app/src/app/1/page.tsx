"use client"

import { BarChart } from "@mui/x-charts/BarChart";
import dayjs from "dayjs";
import Image from "next/image";
import React, { useEffect, useState } from "react";

export default function Home() {

  //setState
  const [name, setName] = useState("")
  const [surname, setSurName] = useState("")
  const [dob, setDob] = useState("")
  const [title, setTitle] = useState("")
  const [age, setAge] = useState("")
  const [profile, setProfile] = useState<string>("")

  //calculate Age
  useEffect(() => {
    const dateDob = dayjs(dob)
    const yeardiff = dayjs().diff(dateDob, "years")
    console.log(yeardiff)
    setAge(yeardiff.toString())
  }, [dob])

  //Handle change Profile Picture
  function changeProfile(event: React.ChangeEvent<HTMLInputElement>) {
    const selectedFiles = event.target.files as FileList;
    // console.log());
    setProfile(URL.createObjectURL(selectedFiles?.[0]));
  }




  //display
  return (
    <div>
      <div>
        <form>
          <label >คำนำหน้า</label>
          <select value={title}>
            <option value="นาย">นาย</option>
            <option value="นางสาว">นางสาว</option>
            <option value="นาง">นาง</option>
          </select>
          {/* <input name="inputTitle" value={name} onChange={e => setTitle(e.target.value)}></input> */}
          <label>ชื่อ</label>
          <input name="inputName" value={name} onChange={e => setName(e.target.value)}></input>
          <label>นามสกุล</label>
          <input name="inputSurname" value={surname} onChange={e => setSurName(e.target.value)}></input>
          <label>วันเกิด</label>
          <input name="inputDob" value={dob} type="date" onChange={e => setDob(e.target.value)}></input>
          <label>อายุ</label>
          <input name="inputAge" value={age}></input>
          <label>รูปโปรไฟล์</label>
          <input name="profilePic" type="file" onChange={changeProfile}></input>
          <img className="proPic" src={profile} />
        </form>
        <button className="">Submit</button>
        <button className="">Delete</button>
      </div>

      {/* show record */}
      <div>
        
      </div>

      {/* show stats */}
      <div>
        <BarChart
          series={[
            { data: [35, 44, 24, 34] },
          ]}
          height={290}
          xAxis={[{ data: ['Q1', 'Q2', 'Q3', 'Q4'], scaleType: 'band' }]}
          margin={{ top: 10, bottom: 30, left: 40, right: 10 }}
        />
      </div>
    </div>

  );
}
