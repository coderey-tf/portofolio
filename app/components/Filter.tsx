"use client";
import React, { ChangeEvent, useState } from "react";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
  SelectGroup,
  SelectLabel,
} from "./ui/select";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

interface Data {
  title: string;
  overview: string;
  status: string;
  link: string;
  _id: string;
  imageUrl: string;
  techstack: string[];
}

const status = [
  {
    label: "Completed",
    value: "completed",
  },
  {
    label: "On Progress",
    value: "onprogress",
  },
];

export default function Filter({
  datas,
  selected,
}: {
  datas: Data[];
  selected: string | string[];
}) {
  const [filter, setFilter] = useState("");
  const [search, setSearch] = useState("");

  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const lowerCaseSearch = search.toLowerCase();
  const lowerCaseFilter = filter.toLowerCase();

  // const filteredData = datas
  //   .filter((data) => {
  //     if (!filter) {
  //       return true;
  //     } else if (filter === "Status") {
  //       return true;
  //     }
  //     return data.status === filter;
  //   })
  //   .filter((data) =>
  //     lowerCaseSearch !== ""
  //       ? data.status.toLowerCase().includes(lowerCaseSearch) ||
  //         data.title.toLowerCase().includes(lowerCaseSearch)
  //       : true
  //   );

  const onSelect = (event: string) => {
    const current = new URLSearchParams(searchParams);
    const value = event.replace(/ /g, "");

    if (!value) {
      current.delete("selected");
    } else {
      current.set("selected", value);
    }

    const search = current.toString();
    const lowerCaseFilter = search.toLowerCase();
    const query = lowerCaseFilter ? `?${lowerCaseFilter}` : "";

    router.push(`${pathname}${query}`);
  };

  return (
    <>
      Filter:{" "}
      <Select
        onValueChange={(e: any) => onSelect(e)}
        value={selected as string}
      >
        <SelectTrigger className="w-[180px]">
          <SelectValue placeholder="Status" />
        </SelectTrigger>
        <SelectContent className="bg-background border-green-500">
          <SelectGroup>
            <SelectLabel>Filter</SelectLabel>
            <SelectItem value="all">All</SelectItem>
            {status
              ?.filter((data, index, self) => {
                // Menghapus data yang sudah muncul sebelumnya dalam array
                return index === self.findIndex((d) => d.value === data.value);
              })
              .map((data: any, i: any) => (
                <SelectItem key={i} value={data.value}>
                  {data.label}
                </SelectItem>
              ))}
          </SelectGroup>
        </SelectContent>
      </Select>
    </>
  );
}
