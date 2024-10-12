"use client";
import { CharacterDataProps } from "@/types";
import React, { useEffect, useRef, useState } from "react";

const BASE_URL = "https://valorant-api.com/v1/agents";

export const Demo = () => {
  const [error, setError] = useState();
  const [isLoading, setIsLoading] = useState(false);

  const [agents, setAgents] = useState<CharacterDataProps[]>([]);

  const abortControllerRef = useRef<AbortController | null>(null);

  useEffect(() => {
    const fetchAgentsInfo = async () => {
      abortControllerRef.current?.abort();
      abortControllerRef.current = new AbortController();
      setIsLoading(true);

      try {
        const response = await fetch(`${BASE_URL}`, {
          signal: abortControllerRef.current?.signal,
        });
        const data = (await response.json()).data as CharacterDataProps[];
        setAgents(data);
      } catch (error: any) {
        if (error.name === "AbortError") {
          console.log("aborted");
          return;
        }
        setError(error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchAgentsInfo();
  }, []);

  if (isLoading) {
    return <div>Loading...</div>;
  }
  if (error) {
    return <div>Error something went wrong</div>;
  }

  return (
    <div className="mx-auto flex min-h-screen w-full max-w-7xl flex-col items-center justify-center border">
      <ul>
        {agents.map((info) => {
          return (
            <li className="flex gap-2" key={info.developerName}>
              {info.displayName}
            </li>
          );
        })}
      </ul>
    </div>
  );
};
