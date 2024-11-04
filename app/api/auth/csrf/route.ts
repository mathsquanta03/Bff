"use client";

import { cookies } from "next/headers";

export async function GET() {
  const response = await fetch("http://localhost:8080/api/csrf", {
    credentials: "include",
  });
  
  const token = await response.text();
  
  return new Response(token, {
    headers: {
      "Content-Type": "text/plain",
    },
  });
}