import React, { useEffect, useState } from "react";

export default function Effects() {
  const address = [
    { id: 1, zip: "522426", location: "Macherla", isDefault: true },
    { id: 2, zip: "500032", location: "Hyderabad", isDefault: false },
    { id: 3, zip: "560030", location: "Banglore", isDefault: false },
    { id: 4, zip: "600001", location: "TamilNadu", isDefault: false },
  ];
  const [input, setInput] = useState("");
  const [defaultAddress, setDefaultAddress] = useState(
    address.find(({ isDefault }) => isDefault)
  );
  const clickHandler = () => {
    setDefaultAddress(address.find((add) => add.zip === input));
  };
  useEffect(() => {
    console.log("useEffect called");
  }, [defaultAddress.zip]);
  return (
    <>
      <input
        placeholder="enter zip..."
        onChange={(e) => setInput(e.target.value)}
      />
      <button onClick={clickHandler}>Submit</button>
      <p> Default Address :{defaultAddress && defaultAddress?.location}</p>
    </>
  );
}
