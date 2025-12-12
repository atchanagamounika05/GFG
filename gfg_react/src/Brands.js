import React, { useCallback, useState, memo } from "react";

export default function Brands() {
  const allBrands = [
    { id: 1, brandName: "adiddas" },
    { id: 3, brandName: "nike" },
    { id: 2, brandName: "adids" },
    { id: 4, brandName: "niky" },
    { id: 5, brandName: "rebook" },
    { id: 6, brandName: "fila" },
  ];
  const [value, setValue] = useState("");
  const [brands, setBrands] = useState(allBrands);
  const handleChange = useCallback((e) => {
    const newValue = e.target.value;
    setValue(newValue);

    const res =
      newValue?.length > 0
        ? brands.filter((brand) =>
            brand.brandName.startsWith(newValue.toLowerCase())
          )
        : allBrands;
    setBrands(res);
  }, []);

  function handleSort() {
    const updatedBrands = [...allBrands].sort((a, b) => {
      let aName = a.brandName.toLocaleUpperCase();
      let bName = b.brandName.toLocaleUpperCase();
      if (aName < bName) {
        return -1;
      }
      if (bName < aName) {
        return 1;
      }
      return 0;
    });
    setBrands(updatedBrands);
  }

  return (
    <div>
      <h1>Brands Store</h1>
      <Child handleChange={handleChange} />
      <button onClick={handleSort}>sort by name</button>
      {brands.map((brand) => (
        <p key={brand.id}>{brand.brandName}</p>
      ))}
    </div>
  );
}

export const Child = memo(({ handleChange }) => {
  console.log("child rendered");
  return <input onChange={handleChange} placeholder="search brand" />;
});
