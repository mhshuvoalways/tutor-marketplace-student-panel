"use client";

import {
  Listbox,
  ListboxButton,
  ListboxOption,
  ListboxOptions,
} from "@headlessui/react";
import { CheckIcon, ChevronDownIcon } from "lucide-react";
import { useEffect, useState } from "react";

function ListboxComponent({ filter, items, onChange, value }) {
  const [selected, setSelected] = useState(null);

  useEffect(() => {
    if (value) {
      setSelected({
        _id: 100,
        item: value,
      });
    } else {
      setSelected(items[0]);
    }
  }, [items, value]);

  const selectHandler = (value) => {
    if (value._id !== 0) {
      setSelected(value);
      onChange(value);
    } else {
      setSelected({
        _id: 0,
        item: "",
      });
      onChange({
        _id: 0,
        item: "",
      });
    }
  };

  return (
    <Listbox value={selected} onChange={selectHandler}>
      <ListboxButton
        className={`text-nowrap font-outfit ${
          filter
            ? "border w-full text-left rounded py-2 px-2 flex items-center justify-between"
            : ""
        } ${selected?._id === 0 ? "text-gray-400" : "text-gray-700"}`}
      >
        {selected?.item}
        {filter && <ChevronDownIcon className="size-4" />}
      </ListboxButton>
      <ListboxOptions
        anchor="bottom"
        transition
        className={`rounded shadow bg-white p-1 transition duration-100 ease-in data-[leave]:data-[closed]:opacity-0 z-50 ${
          filter ? "w-[var(--button-width)] mt-0" : "w-auto mt-5"
        }`}
      >
        {items.map((item) => (
          <ListboxOption
            key={item.item}
            value={item}
            className="group flex cursor-pointer items-center gap-2 rounded py-1.5 px-3 hover:bg-gray-100 font-outfit"
          >
            {item._id === 0 ? (
              <>
                <CheckIcon className="size-4 opacity-0" />
                <p className="text-gray-400">{item.item}</p>
              </>
            ) : (
              <>
                <CheckIcon className="invisible size-4 group-data-[selected]:visible" />
                <p className="text-gray-700">{item.item}</p>
              </>
            )}
          </ListboxOption>
        ))}
      </ListboxOptions>
    </Listbox>
  );
}

export default ListboxComponent;
