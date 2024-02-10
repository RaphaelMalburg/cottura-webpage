"use client";
import FilterParam from "@/lib/FilterParam";
import GetRecipeData from "@/lib/useGetRecipeData";
import { usePathname } from "next/navigation";
import React, { useEffect, useState } from "react";

export default function Recipe() {
  const [data, setData] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const pathname = usePathname();
  const slug = FilterParam(pathname);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await GetRecipeData(slug);
        setData(result);
      } catch (error) {
        // Handle error
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [slug]); // Add slug as a dependency
  useEffect(() => {
    console.log(data);
  }, [data]);
  if (loading) {
    return <p>Loading...</p>;
  }

  if (!data) {
    return <p>Error loading data</p>;
  }
  return (
    <div>
      Recipe<h1>{data.title}</h1>
      <h1>{slug}</h1>
    </div>
  );
}
