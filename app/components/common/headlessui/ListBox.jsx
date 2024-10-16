"use client";

import {
  Listbox,
  ListboxButton,
  ListboxOption,
  ListboxOptions,
} from "@headlessui/react";
import { CheckIcon, ChevronDownIcon } from "lucide-react";
import { useState } from "react";

function ListboxComponent({ filter, items }) {
  const [selected, setSelected] = useState(items[0]);

  return (
    <Listbox value={selected} onChange={setSelected}>
      <ListboxButton
        className={`text-nowrap font-outfit ${
          filter
            ? "border w-full text-left rounded py-2 px-2 flex items-center justify-between"
            : ""
        } ${selected.id === 0 ? "text-gray-400" : "text-gray-700"}`}
      >
        {selected.name}
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
            key={item.name}
            value={item}
            className="group flex cursor-pointer items-center gap-2 rounded py-1.5 px-3 hover:bg-gray-100 font-outfit"
          >
            {item.id === 0 ? (
              <>
                <CheckIcon className="size-4 opacity-0" />
                <p className="text-gray-400">{item.name}</p>
              </>
            ) : (
              <>
                <CheckIcon className="invisible size-4 group-data-[selected]:visible" />
                <p className="text-gray-700">{item.name}</p>
              </>
            )}
          </ListboxOption>
        ))}
      </ListboxOptions>
    </Listbox>
  );
}

export default ListboxComponent;
